/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import AskDynamicDirView from '../Ask/AskDynamicDirView';
import AskQuestionView from '../Ask/AskQuestionView';
import AskSpecialistView from '../Ask/AskSpecialistView';
import AskTopicView from '../Ask/AskTopicView';
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
var nav_search = require('../../img/nav_search.png');
var nav_add = require('../../img/nav_add.png');


class AskTab extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                {this.renderNavBar()}
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem(){
        var allImage = [];
        allImage.push(
            <AskDynamicDirView key={0} tabLabel="动态"/>
        );
        allImage.push(
            <AskQuestionView key={1} tabLabel="问题"/>
        );
        allImage.push(
            <AskSpecialistView key={2} tabLabel="专家"/>
        );
        allImage.push(
            <AskTopicView key={3} tabLabel="话题"/>
        );

        return allImage;
    }

    renderNavBar() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <Text style={styles.navBartext}>问道</Text>
                    <View>
                        <TextInput style={styles.navBarTextInput} placeholder='搜一搜'
                                   clearButtonMode='while-editing'
                                   placeholderTextColor="rgba(256,256,256,0.56)"

                        />
                        <Image source={nav_search} style={styles.search}/>
                    </View>
                    <Image source={nav_add} style={styles.navBarAdd}/>
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
            width: width * 0.72,
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
        },
        navBarAdd: {
            paddingLeft: 10,
            paddingRight: 10,
            width: 45,
            height: 45,
        },


    }
);

module.exports = AskTab;
