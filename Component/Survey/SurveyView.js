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
import ComTabPager from '../Common/ComTabPager';
import SurveyDoadingView from './SurveyDoadingView';
import SurveyEndView from './SurveyEndView';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ListView,
    Platform
} from 'react-native';

class SurveyView extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <ComNavBar title='调研' navigator={this.props.navigator}/>
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem(){
        var allImage = [];
        allImage.push(
            <SurveyDoadingView key={0} tabLabel="进行中"/>
        );
        allImage.push(
            <SurveyEndView key={1} tabLabel="已结束"/>
        );

        return allImage;
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },
    }
);

module.exports = SurveyView;
