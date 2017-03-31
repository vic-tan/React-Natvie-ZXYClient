/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import CourseDirView  from '../Course/CourseDirView';
import CourseHotView  from '../Course/CourseHotView';
import CourseNewView  from '../Course/CourseNewView';
import ComTabPager from '../Common/ComTabPager';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    TextInput,
    Dimensions,
    Text,
    Platform
} from 'react-native';

var {width, height} = Dimensions.get('window');
var mine_pre = require('../../img/nav_search.png');

class CourseTab extends Component {
    constructor(props) {
        super(props);
        this.state={
            rule_id:''
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                {this.renderNavBar()}
                <ComTabPager initialPage={1} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem() {
        var allImage = [];
        allImage.push(
            <CourseDirView key={0} tabLabel="目录" navigator={this.props.navigator} />
        );
        allImage.push(
            <CourseNewView key={2} tabLabel="最热" navigator={this.props.navigator} rule_id={this.state.rule_id}/>
        );
        allImage.push(
            <CourseHotView key={1} tabLabel="最新" navigator={this.props.navigator} rule_id={this.state.rule_id}/>
        );
        return allImage;
    }

    renderNavBar() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <Text style={styles.navBartext}>课程</Text>
                    <View>
                        <TextInput style={styles.navBarTextInput} placeholder='搜一搜'
                                   clearButtonMode='while-editing'
                                   placeholderTextColor="rgba(256,256,256,0.56)"

                        />
                        <Image source={mine_pre} style={styles.search}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
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
            width: width * 0.82,
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
        }


    }
);

export default CourseTab;
