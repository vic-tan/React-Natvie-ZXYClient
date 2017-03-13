/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import CouresDirView  from '../Course/CouresDirView';
import CouresHotView  from '../Course/CouresHotView';
import CouresNewView  from '../Course/CouresNewView';
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
                {this.renderNavBar()}
                <ScrollableTabView locked={true} initialPage={1}
                                   tabBarBackgroundColor='#FFFFFF'
                                   tabBarActiveTextColor='#47AD1D'
                                   tabBarInactiveTextColor='rgba(0,0,0,0.75)'
                                   tabBarTextStyle={{fontSize: 12,marginTop:10}}
                                   tabBarUnderlineStyle={{backgroundColor: '#47AD1D',height:2}}
                                   scrollWithoutAnimation={true}>
                    <CouresDirView tabLabel="目录"/>
                    <CouresHotView tabLabel="最新"/>
                    <CouresNewView tabLabel="最热"/>
                </ScrollableTabView>
            </View>
        );
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
