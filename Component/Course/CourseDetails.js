/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import CourseDetailsDirView  from './CourseDetailsDirView';
import CourseDetailsDescView  from './CourseDetailsDescView';
import CourseDetailsDiscussView  from './CourseDetailsDiscussView';
import CourseDetailsNotesView  from './CourseDetailsNotesView';
import ComCourseTabPager from './ComCourseTabPager';
import TabNavigator from 'react-native-tab-navigator';
import CourseVideo from 'react-native-video';
import CourseDetailsDowloadView from './CourseDetailsDowloadView';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    View,
    TextInput,
    Navigator,
    Dimensions,
    Text,
    Platform
} from 'react-native';

var {width, height} = Dimensions.get('window');
var course_bg_play_default = require('../../img/course_bg_play_default.png');
var nav_back = require('../../img/nav_back.png');
var play = require('../../img/course_btn_play.png');

var home_nor = require('../../img/tab_home_nor.png');
var home_pre = require('../../img/tab_home_pre.png');
var course_nor = require('../../img/tab_course_nor.png');
var course_pre = require('../../img/tab_course_pre.png');
var active_nor = require('../../img/tab_active_nor.png');
var active_pre = require('../../img/tab_active_pre.png');
var ask_nor = require('../../img/tab_ask_nor.png');
var ask_pre = require('../../img/tab_ask_pre.png');


var btnHeight = 48;
var palyHeight = 190;
class CourseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'stretch',
            duration: 0.0,
            currentTime: 0.0,
            controls: true,
            paused: true,
            isBuffering: false,
        }
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onBuffer = this.onBuffer.bind(this);
    }


    render() {
        return (
            <View style={styles.container}>
                {this._video()}
                <View style={{width:width, height: height-btnHeight-palyHeight, marginBottom: btnHeight}}>
                    <ComCourseTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
                </View>
                {this.renderNavBar()}
                {this._opt()}
                {this._videoPaused()}
            </View>
        );
    }

    _videoPaused() {
        if (this.state.paused) {
            return (
                <View style={styles._videoPaused}>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => {this.setState({paused: !this.state.paused})}}>
                        <View style={styles._videoViewPaused}>
                            <Image source={play} style={styles._videoPausedBtn}/>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    _video() {
        /*if ('1' == this.props.parentData.apply_status) {
         return ( <Image source={course_bg_play_default} style={styles.video}/>);
         } else {*/
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => {this.setState({paused: !this.state.paused})}}>
                <CourseVideo
                    source={{uri:'http://cdn.zhixueyun.com/CqhVfFhHoUyEA_vZAAAAAOtgCjM405.mp4'}}
                    style={styles.video}
                    rate={this.state.rate}
                    paused={this.state.paused}
                    volume={this.state.volume}
                    muted={this.state.muted}
                    resizeMode={this.state.resizeMode}
                    onLoad={this.onLoad}
                    onBuffer={this.onBuffer}
                    onProgress={this.onProgress}
                    onEnd={() => { alert('Done!') }}
                    repeat={true}
                />
            </TouchableOpacity>
        );
        //}

    }

    onLoad(data) {
        console.log('On load fired!');
        this.setState({duration: data.duration});
    }

    onProgress(data) {
        this.setState({currentTime: data.currentTime});
    }

    onBuffer({isBuffering}: {isBuffering: boolean}) {
        this.setState({isBuffering});
    }

    _opt() {
        if ('1' == this.props.parentData.apply_status) {
            return (
                <View style={styles.optView}>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={this._actionSheet.bind(this)}>
                        <View style={styles.optBtn}>
                            <Text style={{color:'white',fontSize : 16}}>我要学习</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.optView}>
                    <TabNavigator >
                        {/* -- 收藏 -- */}
                        {this.renderTabBarItem('收藏', home_nor, home_pre, 'collection')}
                        {/* -- 下载 -- */}
                        {this.renderTabBarItem('下载', course_nor, course_pre, 'download')}
                        {/* -- 评分 -- */}
                        {this.renderTabBarItem('评分', active_nor, active_pre, 'score')}
                        {/* -- 放弃 -- */}
                        {this.renderTabBarItem('放弃', ask_nor, ask_pre, 'give_up')}
                    </TabNavigator>
                </View>
            );
        }
    }

    // 每一个TabBarItem
    renderTabBarItem(title, renderIcon, renderSelectedIcon, selectedTab) {
        return (
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={renderIcon} style={styles.icon}/>} // 图标
                renderSelectedIcon={() =><Image source={renderSelectedIcon} style={styles.icon}/>}   // 选中的图标
                onPress={()=>{this.tabClick(title,selectedTab)}}
                titleStyle={styles.titleStyle}>
            </TabNavigator.Item>
        )
    }

    tabClick(title, selectedTab) {
        if (selectedTab === 'download') {
            const {navigator} = this.props;
            if (navigator) {
                navigator.push({
                    component: CourseDetailsDowloadView,
                    params: {
                        list: this.props.parentData.list,
                    }
                });
            }
        } else {
            alert(title);
        }
    }

    _actionSheet() {

    }

    renderNavBar() {
        return (
            <View style={styles.navBarView}>
                <TouchableOpacity activeOpacity={0.5} onPress={this._back.bind(this)}>
                    <View style={{height: 35,width: 50,}}>
                        <Image source={nav_back} style={styles.navBarBack}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }


    tabPagerItem() {
        var allImage = [];
        allImage.push(
            <CourseDetailsDirView key={0} tabLabel="目录" list={this.props.parentData.list}/>
        );
        allImage.push(
            <CourseDetailsDescView key={2} tabLabel="简介" course_id={this.props.parentData.id}/>
        );
        allImage.push(
            <CourseDetailsDiscussView key={4} tabLabel="讨论" course_id={this.props.parentData.id}/>
        );
        allImage.push(
            <CourseDetailsNotesView key={6} tabLabel="笔记" course_id={this.props.parentData.id}/>
        );
        return allImage;
    }


}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        navBarView: {
            height: 35,
            width: 50,
            marginTop: Platform.OS == 'ios' ? 20 : 0,
            position: 'absolute',
            top: 0,
        },
        navBarBack: {
            marginLeft: 10,
            width: 35,
            height: 30,
        },
        video: {
            width: width, height: palyHeight
        },
        _videoPaused: {
            height: palyHeight,
            width: width,
            position: 'absolute',
            top: 0,
        },

        _videoViewPaused: {
            height: palyHeight,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
        },

        _videoPausedBtn: {
            height: 65,
            width: 65,
            alignSelf: 'center',
        },
        optView: {
            height: btnHeight,
            width: width,
            position: 'absolute',
            bottom: 0,
        },
        optBtn: {
            backgroundColor: '#47AD1D',
            height: btnHeight,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
        },
        titleStyle: {
            paddingBottom: 3,
            color: '#999999'
        },
        selectedTitleStyle: {
            paddingBottom: 3,
            color: '#47AD1D',
        },
        icon: {
            width: 23,
            height: 23,
        }
    }
);

export default CourseDetails;
