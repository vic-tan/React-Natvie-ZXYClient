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

var home_nor = require('../../img/tab_home_nor.png');
var home_pre = require('../../img/tab_home_pre.png');
var course_nor = require('../../img/tab_course_nor.png');
var course_pre = require('../../img/tab_course_pre.png');
var active_nor = require('../../img/tab_active_nor.png');
var active_pre = require('../../img/tab_active_pre.png');
var ask_nor = require('../../img/tab_ask_nor.png');
var ask_pre = require('../../img/tab_ask_pre.png');


var btnHeight = 48;
class CourseDetails extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={course_bg_play_default} style={{ width:width, height:190}}/>
                <View style={{width:width, height: height-btnHeight-190, marginBottom: btnHeight}}>
                    <ComCourseTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
                </View>
                {this.renderNavBar()}
                {this._opt()}
            </View>
        );
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
                        {this.renderTabBarItem('收藏', home_nor, home_pre, 'home')}
                        {/* -- 下载 -- */}
                        {this.renderTabBarItem('下载', course_nor, course_pre, 'course')}
                        {/* -- 评分 -- */}
                        {this.renderTabBarItem('评分', active_nor, active_pre, 'active')}
                        {/* -- 放弃 -- */}
                        {this.renderTabBarItem('放弃', ask_nor, ask_pre, 'ask')}
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
                onPress={()=>{this.tabClick(title)}}
                titleStyle={styles.titleStyle}>
            </TabNavigator.Item>
        )
    }

    tabClick(selectedTab) {
        alert(selectedTab);
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
