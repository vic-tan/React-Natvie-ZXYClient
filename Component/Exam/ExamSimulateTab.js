/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ComNavBar from '../Common/ComNavBar';
import ExamDoadingView from './ExamDoadingView.js';
import ExamEndView from './ExamEndView';
import ComTabPager from '../Common/ComTabPager';

import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    View,
    Text,
    TextInput,
    StatusBar,
    Platform
} from 'react-native';

var {width, height} = Dimensions.get('window');


class ExamSimulateTab extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='考试' navigator={this.props.navigator}/>
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem(){
        var allImage = [];
        allImage.push(
            <ExamDoadingView key={0} tabLabel="进行中" tab={1}/>
        );
        allImage.push(
            <ExamEndView key={1} tabLabel="已结束" tab={1}/>
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
    }
);

module.exports = ExamSimulateTab;
