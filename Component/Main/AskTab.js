/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import AskDynamicDirView from '../Ask/AskDynamicDirView';
import AskQuestionView from '../Ask/AskQuestionView';
import AskSpecialistView from '../Ask/AskSpecialistView';
import AskTopicView from '../Ask/AskTopicView';
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
                <ScrollableTabView locked={true} initialPage={0}
                                   tabBarBackgroundColor='#FFFFFF'
                                   tabBarActiveTextColor='#47AD1D'
                                   tabBarInactiveTextColor='rgba(0,0,0,0.75)'
                                   tabBarTextStyle={{fontSize: 12,marginTop:10}}
                                   tabBarUnderlineStyle={{backgroundColor: '#47AD1D',height:2}}
                                   scrollWithoutAnimation={true}>
                    <AskDynamicDirView tabLabel="动态"/>
                    <AskQuestionView tabLabel="问题"/>
                    <AskSpecialistView tabLabel="专家"/>
                    <AskTopicView tabLabel="话题"/>
                </ScrollableTabView>
            </View>
        );
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
