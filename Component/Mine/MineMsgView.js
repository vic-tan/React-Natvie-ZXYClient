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
var ToastUtils = require("../Uitls/ToastUtils");
var HttpUitls = require("../Uitls/HttpUitls");
var list = [];
class MineMsgView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // assumes immutable objects
        this.state = {
            nomore: true,
            list: ds.cloneWithRows(list),
        };
        this.onPullRelease = this.onPullRelease.bind(this);
    }

    onPullRelease(resolve) {
        storage.load({
            key: 'user',
        }).then(ret => {
            let sid = ret.sid;
            let map = new Map()
            map.set('type', '');
            map.set('pageNumber', 1);
            map.set('sid', sid);
            map.set('pageSize', 2);
            HttpUitls.postFrom('user/messageList', map, (set) => {
                resolve();
                if (set.code == '0000') {
                    this.setState({
                        list: this.state.list.cloneWithRows(set.data.list)
                    });
                } else {
                    ToastUtils.toastShort(set.msg);
                }
            })
        }).catch(err => {
        })
    }

    componentDidMount() {

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
        console.log('--------->renderFooter');
        if (this.state.nomore) {
            return null;
        }
        return (
            <View style={{height: 100}}>
                <ActivityIndicator />
            </View>
        );
    }

    loadMore() {
        /*if(this.isFirstTime){
            if(!this.state.isShowBottomRefresh){
                this.isFirstTime = false;
            }
            return;
        }

        this.isFirstTime = true;
        this.setState({isShowBottomRefresh: true});*/
        console.log('--------->loadMore');
        /*this.dataSource.push({
            id: 0,
            title: `more to create data ...`,
        });
        this.setState({
            list: this.state.list.cloneWithRows(this.dataSource)
        });

        storage.load({
            key: 'user',
        }).then(ret => {
            let sid = ret.sid;
            let map = new Map()
            map.set('type', '');
            map.set('pageNumber', 2);
            map.set('sid', sid);
            map.set('pageSize', 2);
            HttpUitls.postFrom('user/messageList', map, (set) => {
                if (set.code == '0000') {
                    this.setState({
                        list: this.state.list.cloneWithRows(set.data.list)
                    });
                } else {
                    ToastUtils.toastShort(set.msg);
                }
            })
        }).catch(err => {
        })*/

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
