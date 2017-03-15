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
import Swiper from 'react-native-swiper';
import HomeNavView from './HomeNavView.js';
import HomeBannerView from './HomeBannerView.js';
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
    ListView,
    ActivityIndicator,
    Platform,
    Text
} from 'react-native';
var {width, height} = Dimensions.get('window');
var ToastUtils = require('../Uitls/ToastUtils');
class HomeTab extends Component {

    constructor(props) {
        super(props);
        this.banner_list = [];
        this.nav_list = [];
        this.state = {
            sid: '',
            refreshing: false,
            currentPage: 0,// 当前的页码
            banner_list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.banner_list),
            nav_list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.banner_list),
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
                this.nav_list = [];
                for (var i = 0; i < set.data.banner_list.length; i++) {
                    this.banner_list.push(set.data.banner_list[i]);
                }
                for (var i = 0; i < set.data.region_list[0].nav_list.length; i++) {
                    this.nav_list.push(set.data.region_list[0].nav_list[i]);
                }
                this.setState({
                    banner_list: this.state.banner_list.cloneWithRows(this.banner_list),
                    nav_list: this.state.nav_list.cloneWithRows(this.nav_list),
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
                <StatusBar hidden={false} backgroundColor='transparent'/>
                <PullView style={{width: Dimensions.get('window').width}} onPullRelease={this.onPullRelease}
                          topIndicatorHeight={60}
                    {...this._gestureHandlers}>
                    <HomeBannerView bannerList={this.banner_list}/>
                    <HomeNavView navList={this.nav_list}/>
                </PullView>
                <BusyIndicator />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
    },

});
export default HomeTab;
