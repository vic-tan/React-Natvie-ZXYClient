/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    ActivityIndicator,
    ListView,
    Platform
} from 'react-native';
import {PullList} from 'react-native-pull';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var ComNavBar = require("../Common/ComNavBar");
var ComFooterRefreshView = require("../Common/ComFooterRefreshView");
var ToastUtils = require("../Uitls/ToastUtils");
var HttpUitls = require("../Uitls/HttpUitls");
var RefreshViewUitls = require("../Uitls/RefreshViewUitls");
class MineMsgView extends Component {
    constructor(props) {
        super(props);
        this.dataSource = [];
        this.state = {
            sid: '',
            pageNumber: 1,
            footerState: 0,//0:表示无， 1加载中 2,已没有更多了
            isFirstLoading: true,//true ,第一次加载，false,加载更多
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.onPullRelease = this.onPullRelease.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    onPullRelease(resolve) {
        this.request(true, () => {
            resolve();
        })
    }

    loadMore() {
        if (this.state.isFirstLoading || this.state.footerState == 0 || this.state.footerState == 2) {
            return;
        }
        this.request(false, () => {
        })
    }

    request(isPullRelease, callback) {
        let url = 'user/messageList';
        RefreshViewUitls.request(isPullRelease,url,this.state.pageNumber,(map, set)=>{
            if (isPullRelease) {
                callback()
            }
            this.requestOk(isPullRelease,map, set);
        });


    }

    requestOk(isPullRelease,map, set) {
        if (set.code == '0000') {
            if (isPullRelease) {
                this.dataSource = [];
            }
            for (var i = 0; i < set.data.list.length; i++) {
                this.dataSource.push(set.data.list[i]);
            }
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource),
                isFirstLoading: set.data.list.length === map.get('pageSize') ? false : true,
                footerState: set.data.list.length === map.get('pageSize') ? 1 : 2,
                pageNumber: isPullRelease ? (set.data.list.length === map.get('pageSize') ? 2 : 1) : (set.data.list.length === map.get('pageSize') ? this.state.pageNumber + 1 : this.state.pageNumber),
            });
        } else {
            ToastUtils.toastShort(set.msg);
        }
    }

    componentDidMount() {
        storage.load({
            key: 'user',
        }).then(ret => {
            this.setState({
                sid: ret.sid,
                isFirstLoading: true,
            });
        }).catch(err => {
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='消息' navigator={this.props.navigator}/>
                <PullList
                    dataSource={this.state.list}
                    renderRow={this.renderRow.bind(this)}
                    onPullRelease={this.onPullRelease.bind(this)}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0}
                    enableEmptySections={true}
                    renderFooter={this.renderFooter.bind(this)}
                />
            </View>
        );
    }


    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <Text style={{height:10}}/>
                <View style={styles.rowContainer}>
                    <Text style={styles.rowTitle}>{rowData.title}</Text>
                    <Text style={styles.rowDesc}>{rowData.content}</Text>
                    <View style={styles.timeView}>
                        <Text style={styles.rowTime}> </Text>
                        <Text style={styles.rowTime}>{rowData.send_time}</Text>
                    </View>
                </View>
                <Text style={{height:4}}/>
            </View>
        );
    }

    renderFooter() {
        return (
            <ComFooterRefreshView isFirstLoading={this.state.isFirstLoading} footerState={this.state.footerState}/>
        );

    }


}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },

        rowContainer: {
            width: width * 0.95,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 5,
            alignSelf: 'center',
        },

        rowTitle: {
            width: width * 0.95,
            color: "#C62433",
            fontSize: 15,
            fontWeight: 'bold',
            padding: 9,
            paddingBottom: 0,
        },
        rowDesc: {
            width: width * 0.95,
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            padding: 9,
            paddingTop: 5,
            paddingBottom: 0,
        },
        timeView: {
            width: width * 0.95,
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        rowTime: {
            color: "rgba(0,0,0,0.5)",
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            fontSize: 13,
            padding: 9,
            paddingTop: 5,
            paddingBottom: 5,
        },


    }
);

module.exports = MineMsgView;
