/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import ExamApplyTab from './ExamApplyTab';
import ExamSimulateTab from './ExamSimulateTab';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Navigator,
    Dimensions,
    View,
    Text
} from 'react-native';

var {width, height} = Dimensions.get('window');

var home_nor = require('../../img/tab_home_nor.png');
var home_pre = require('../../img/tab_home_pre.png');
var course_nor = require('../../img/tab_course_nor.png');
var course_pre = require('../../img/tab_course_pre.png');


class ExamTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'apply'};
    }


    render() {
        return (
            <TabNavigator >
                {/* -- 首页 -- */}
                {this.renderTabBarItem('报名考试', home_nor, home_pre, 'apply')}
                {/* -- 课程 -- */}
                {this.renderTabBarItem('模拟考试', course_nor, course_pre, 'simulate')}
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
        if (tag == 'apply') {
            return (<ExamApplyTab {...this.props} navigator={this.props.navigator}/>);
        } else if (tag == 'simulate') {
            return (<ExamSimulateTab {...this.props} navigator={this.props.navigator}/>);
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

export default ExamTabView;
