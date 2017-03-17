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
import TrainDoadingView from './TrainDoadingView';
import TrainEndView from './TrainEndView';
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

class TrainView extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <ComNavBar title='培训' navigator={this.props.navigator}/>
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem(){
        var allImage = [];
        allImage.push(
            <TrainDoadingView key={0} tabLabel="进行中"/>
        );
        allImage.push(
            <TrainEndView key={1} tabLabel="往期回顾"/>
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

module.exports = TrainView;
