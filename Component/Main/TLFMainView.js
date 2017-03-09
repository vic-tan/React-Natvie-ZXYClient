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
    Navigator,
    View,
    Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
var HomeTab = require("./HomeTab");
var CourseTab = require("./CourseTab");
var ActiveTab = require("./ActiveTab");
var AskTab = require("./AskTab");
var MineTab = require("./MineTab");
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var home_nor = require('../../img/tab_home_nor.png');
var home_pre = require('../../img/tab_home_pre.png');
var course_nor = require('../../img/tab_course_nor.png');
var course_pre = require('../../img/tab_course_pre.png');
var active_nor = require('../../img/tab_active_nor.png');
var active_pre = require('../../img/tab_active_pre.png');
var ask_nor = require('../../img/tab_ask_nor.png');
var ask_pre = require('../../img/tab_ask_pre.png');
var mine_nor = require('../../img/tab_mine_nor.png');
var mine_pre = require('../../img/tab_mine_pre.png');

class TLFMainView extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'mine'};
    }


    render() {
        return (
            <TabNavigator >
                {/* -- 首页 -- */}
                {this.renderTabBarItem('首页', home_nor, home_pre, 'home')}
                {/* -- 课程 -- */}
                {this.renderTabBarItem('课程', course_nor, course_pre, 'course')}
                {/* -- 活动 -- */}
                {this.renderTabBarItem('活动', active_nor, active_pre, 'active')}
                {/* -- 问题 -- */}
                {this.renderTabBarItem('问题', ask_nor, ask_pre, 'ask')}
                {/* -- 我的 -- */}
                {this.renderTabBarItem('我的', mine_nor, mine_pre, 'mine')}
            </TabNavigator>
        );
    }


    // 每一个TabBarItem
    renderTabBarItem(title, renderIcon, renderSelectedIcon, selectedTab) {
        return (
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={renderIcon} style={styles.icon}/>} // 图标
                renderSelectedIcon={() =><Image source={renderSelectedIcon} style={styles.icon}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.titleStyle}>
                {this._changeTab(selectedTab)}
            </TabNavigator.Item>
        )
    }

    _changeTab(tag) {
        if (tag == 'home') {
            return (<HomeTab {...this.props}/>);
        } else if (tag == 'course') {
            return (<CourseTab {...this.props}/>);
        } else if (tag == 'active') {
            return (<ActiveTab {...this.props}/>);
        } else if (tag == 'ask') {
            return (<AskTab {...this.props}/>);
        } else if (tag == 'mine') {
            return (<MineTab {...this.props}/>);
        }
    }

}

const styles = StyleSheet.create({
        container: {},

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

module.exports = TLFMainView;
