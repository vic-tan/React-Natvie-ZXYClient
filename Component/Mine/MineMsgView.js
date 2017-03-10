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
var ComErrorView = require("../Common/ComErrorView");
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
            footerState: RefreshViewUitls.footerStateHide(),//0:表示无， 1加载中 2,已没有更多了
            isFirstLoading: RefreshViewUitls.footerStateIsfirstLoading(),//true ,第一次加载，false,加载更多
            parentViewState: ComErrorView.parentViewStateShow(),
            childViewState: ComErrorView.childViewStateLoading(),
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.onPullRelease = this.onPullRelease.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        storage.load({
            key: 'user',
        }).then(ret => {
            this.setState({
                sid: ret.sid,
                isFirstLoading: RefreshViewUitls.footerStateIsfirstLoading(),
            });
        }).catch(err => {
        })
        this.onStartRequest();
    }

    againRefresh() {
        this.onStartRequest();
    }

    onStartRequest() {
        this.request(RefreshViewUitls.refreshStateStart(), (map, set) => {
            if (set == null) {
                this.setPrompt(ComErrorView.parentViewStateShow(), ComErrorView.childViewStateNetWordError());
            } else if (set.code !== '0000') {
                this.setPrompt(ComErrorView.parentViewStateShow(), ComErrorView.childViewStateLoadingError());
            } else if (set.data.list.length <= 0) {
                this.setPrompt(ComErrorView.parentViewStateShow(), ComErrorView.childViewStateNoData());
            } else {
                this.setPrompt(ComErrorView.parentViewStateHide(), ComErrorView.childViewStateHide());
            }
        })
    }


    onPullRelease(resolve) {
        this.request(RefreshViewUitls.refreshStatePull(), () => {
            resolve();
        })
    }

    loadMore() {
        this.request(RefreshViewUitls.refreshStateMore(), (map, set) => {
        });
    }


    setPrompt(parentViewState, childViewState) {
        this.setState({
            parentViewState: parentViewState,
            childViewState: childViewState,
        });
    }

    /**
     * @param isPullRelease  0.表示默认第一次加载 1、为下拉，2、 加载更多
     * @param callback
     */
    request(isPullRelease, callback) {
        if (isPullRelease == RefreshViewUitls.refreshStateMore() && (this.state.isFirstLoading || this.state.footerState == 0 || this.state.footerState == 2)) {
            return;
        }
        let url = 'user/messageList';
        RefreshViewUitls.pullRequest(isPullRelease, url, this.state.pageNumber, (map, set) => {
            this.requestOk(isPullRelease, map, set, callback);
        });


    }

    requestOk(isPullRelease, map, set, callback) {
        if (set == null) {
            if (isPullRelease == RefreshViewUitls.refreshStatePull() || isPullRelease == RefreshViewUitls.refreshStateStart()) {
            }
            callback(map, set);
            return
        }
        if (set.code == '0000') {
            if (isPullRelease == RefreshViewUitls.refreshStatePull() || isPullRelease == RefreshViewUitls.refreshStateStart()) {
                this.dataSource = [];
            }
            for (var i = 0; i < set.data.list.length; i++) {
                this.dataSource.push(set.data.list[i]);
            }
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource),
                isFirstLoading: RefreshViewUitls.getIsFirstLoading(map, set),
                footerState: RefreshViewUitls.getFooterState(map, set),
                pageNumber: RefreshViewUitls.getPageNumber(isPullRelease, map, set),
            });
        } else {
            if (isPullRelease == RefreshViewUitls.refreshStatePull() || isPullRelease == RefreshViewUitls.refreshStateStart()) {
                ToastUtils.toastShort(set.msg);//上拉下拉有异常只提示就行，不用像第一次进来显示不同界面
            }
        }
        callback(map, set);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='消息' navigator={this.props.navigator}/>
                {this.showView()}
            </View>
        );
    }


    showView() {
        if (this.state.parentViewState) {
            return (
                <ComErrorView parentViewState={this.state.parentViewState}
                              childViewState={this.state.childViewState}
                              callbackParent={this.againRefresh.bind(this)}/>)
        } else {
            return (
                <PullList
                    dataSource={this.state.list}
                    renderRow={this.renderRow.bind(this)}
                    onPullRelease={this.onPullRelease.bind(this)}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0}
                    enableEmptySections={true}
                    renderFooter={this.renderFooter.bind(this)}
                />
            )
        }

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
