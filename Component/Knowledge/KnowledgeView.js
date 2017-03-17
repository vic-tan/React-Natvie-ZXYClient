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
import KnowledgeDirView  from '../Knowledge/KnowledgeDirView';
import KnowledgeHotView  from '../Knowledge/KnowledgeHotView';
import KnowledgeNewView  from '../Knowledge/KnowledgeNewView';
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
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='知识' navigator={this.props.navigator}/>
                <ComTabPager initialPage={1} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem() {
        var allImage = [];
        allImage.push(
            <KnowledgeDirView key={0} tabLabel="目录"/>
        );
        allImage.push(
            <KnowledgeHotView key={1} tabLabel="最新"/>
        );
        allImage.push(
            <KnowledgeNewView key={2} tabLabel="最热"/>
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
