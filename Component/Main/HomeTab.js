/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {PullView} from 'react-native-pull';
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import HttpUitls from '../Uitls/HttpUitls';
import UrlConstant from '../Constant/UrlConstant';
import HomeNavView from './HomeNavView.js';
import HomeBannerView from './HomeBannerView.js';

import HomeCourseLayoutView from './HomeCourseLayoutView.js';
import HomeLiveLayoutView from './HomeLiveLayoutView.js';
import HomeKnowledgeLayoutView from './HomeKnowledgeLayoutView.js';
import HomeLecturersLayoutView from './HomeLecturersLayoutView.js';
import HomeNewActivityLayoutView from './HomeNewActivityLayoutView.js';
import HomeRecommendedActivityLayoutView from './HomeRecommendedActivityLayoutView.js';
import HomeSubjectLayoutView from './HomeSubjectLayoutView.js';

import {
    AppRegistry,
    PanResponder,
    StyleSheet,
    Image,
    StatusBar,
    View,
    Array,
    Dimensions,
    ScrollView,
    TextInput,
    ListView,
    ActivityIndicator,
    Platform,
    Text
} from 'react-native';
var {width, height} = Dimensions.get('window');
var ToastUtils = require('../Uitls/ToastUtils');

var nav_search = require('../../img/nav_search.png');
var nav_msg = require('../../img/new_nav_bell_message.png');
var new_nav_scan = require('../../img/new_nav_scan.png');
class HomeTab extends Component {

    constructor(props) {
        super(props);
        this.banner_list = [];
        this.region_list = [];
        this.state = {
            sid: '',
            refreshing: false,
            currentPage: 0,// 当前的页码
            region_list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.region_list),
            banner_list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.banner_list),
        };
        this.onPullRelease = this.onPullRelease.bind(this);
    }


    onPullRelease(resolve) {
        this.request(this.state.sid, () => {
            resolve();
        });
    }

    _gestureHandlers: {}

    componentWillMount() {
        this._gestureHandlers = {
            //外部正方形在“捕获期”阻止底层时间成为响应者
            onStartShouldSetResponderCapture: () => true,
            onMoveShouldSetResponderCapture: () => true,
            onResponderGrant: () => {
                this.setState({bg: 'red'})
            },
            onResponderMove: () => {
                console.log(123)
            },
            onResponderRelease: () => {
                this.setState({bg: 'white'})
            },
        }
    }

    componentDidMount() {
        this._loadData();
    }


    _loadData() {
        storage.load({
            key: 'user',
        }).then(ret => {
            let sid = ret.sid;
            this.setState({
                sid: ret.sid,
            });
            loaderHandler.showLoader('加载中...');
            this.request(sid, () => {
            });
        }).catch(err => {

        })
    }

    request(sid, callback) {
        let map = new Map()
        map.set('sid', sid);
        HttpUitls.postFrom(UrlConstant.SYS_LOAD_INDEX_LAYOUT, map, (set) => this._bannerAndTypeCallback(set, callback))
    }

    _bannerAndTypeCallback(set, callback) {
        loaderHandler.hideLoader();
        if (set != null) {
            if (set.code == '0000') {
                this.banner_list = [];
                this.region_list = [];
                for (var i = 0; i < set.data.region_list.length; i++) {
                    this.region_list.push(set.data.region_list[i]);
                }
                for (var i = 0; i < set.data.banner_list.length; i++) {
                    this.banner_list.push(set.data.banner_list[i]);
                }
                this.setState({
                    region_list: this.state.region_list.cloneWithRows(this.region_list),
                    banner_list: this.state.banner_list.cloneWithRows(this.banner_list),
                });
            } else {
                ToastUtils.toastShort(set.msg);
            }
        }
        callback();
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar hidden={false}/>
                {this.renderNavBar()}
                <PullView style={{width: Dimensions.get('window').width}} onPullRelease={this.onPullRelease}
                          topIndicatorHeight={60}
                    {...this._gestureHandlers}>
                    <HomeBannerView bannerList={this.banner_list}/>
                    {this.renderAllView()}
                </PullView>
                <BusyIndicator />
            </View>
        );
    }


    renderNavBar() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <Image source={new_nav_scan} style={styles.navBarAdd}/>
                    <View>
                        <TextInput style={styles.navBarTextInput} placeholder='搜一搜'
                                   clearButtonMode='while-editing'
                                   placeholderTextColor="rgba(256,256,256,0.56)"

                        />
                        <Image source={nav_search} style={styles.search}/>
                    </View>
                    <Image source={nav_msg} style={styles.navBarAdd}/>
                </View>
            </View>
        );
    }

    // 返回所有的图片
    renderAllView() {
        var allView = [];
        for (var i = 0; i < this.region_list.length; i++) {
            var item = this.region_list[i];
            switch (item.content_code) {
                case 'navigation_module'://tab导航
                    allView.push(
                        <HomeNavView key={i} navList={this.region_list[i].nav_list}/>
                    );
                    break;
                case 'recommended_courses'://推荐课程
                    allView.push(
                        <HomeCourseLayoutView key={i} bean={item} sid={this.state.sid}/>
                    );
                    break;
                case 'hot_subject' ://推荐专题
                    allView.push(
                        <HomeSubjectLayoutView key={i} bean={item} sid={this.state.sid}/>
                    );
                    break;
                case 'hot_knowledge' ://热门知识
                    allView.push(
                        <HomeKnowledgeLayoutView key={i} bean={item} sid={this.state.sid}/>
                    );
                    break;
                case 'hot_activity' ://最新活动
                    allView.push(
                        <HomeNewActivityLayoutView key={i} bean={item} sid={this.state.sid}/>
                    );
                    break;
                case 'my_required' ://我的必修
                    allView.push(
                        <HomeLiveLayoutView key={i} bean={item} sid={this.state.sid}/>
                    );
                    break;
                case 'lecturers_list' ://讲师榜
                    allView.push(
                        <HomeLecturersLayoutView key={i} bean={item} sid={this.state.sid}/>
                    );
                    break;
                case 'recommended_activity' ://推荐活动
                    allView.push(
                        <HomeRecommendedActivityLayoutView key={i} bean={item} sid={this.state.sid}/>
                    );
                    break;
            }
        }
        return allView;
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
    },
    renderNavBar: {
        backgroundColor: '#47AD1D',

    },
    navBarView: {
        height: 48,
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navBartext: {
        marginLeft: 10,
        fontSize: 17,
        color: 'white'
    },
    navBarTextInput: {
        alignSelf: 'center',
        width: width * 0.68,
        marginLeft: 10,
        height: 37,
        fontSize: 13,
        paddingLeft: 38,
        backgroundColor: '#409D1A',
        borderRadius: 5,
    },
    search: {
        width: 30,
        height: 30,
        position: 'absolute',
        marginTop: 3,
        marginLeft: 15,
    },
    navBarAdd: {
        paddingLeft: 10,
        paddingRight: 10,
        width: 45,
        height: 45,
    },

});
export default HomeTab;
