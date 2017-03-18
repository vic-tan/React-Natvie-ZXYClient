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
import MyPathPagerView from './MyPathPagerView';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
class MyPathView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='学习路径' navigator={this.props.navigator}/>
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem() {
        var allImage = [];
        allImage.push(
            <MyPathPagerView key={0} tabLabel="学习中" pager="1"/>
        );
        allImage.push(
            <MyPathPagerView key={1} tabLabel="已完成" pager="2"/>
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

export default MyPathView;
