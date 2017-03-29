/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import CouresDirView  from './CourseDirView';
import CouresHotView  from './CourseHotView';
import CourseDetailsDiscussView  from './CourseDetailsDiscussView';
import CourseDetailsNotesView  from './CourseDetailsNotesView';
import ComCourseTabPager from './ComCourseTabPager';
import ComImage from '../Common/ComImage';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    View,
    TextInput,
    Dimensions,
    Text,
    Platform
} from 'react-native';

var {width, height} = Dimensions.get('window');
var course_bg_play_default = require('../../img/course_bg_play_default.png');
var nav_back = require('../../img/nav_back.png');
class CourseDetails extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>
                <Image source={course_bg_play_default} style={{ width:width, height:190}}/>
                <ComCourseTabPager initialPage={1} callbackTab={this.tabPagerItem()}/>
                {this.renderNavBar()}
            </View>
        );
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
            <CouresDirView key={0} tabLabel="目录"/>
        );
        allImage.push(
            <CouresHotView key={2} tabLabel="简介"/>
        );
        allImage.push(
            <CourseDetailsDiscussView key={4} tabLabel="讨论" course_id={this.props.parentData.id}/>
        );
        allImage.push(
            <CourseDetailsNotesView key={6} tabLabel="笔记"/>
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
    }
);

export default CourseDetails;
