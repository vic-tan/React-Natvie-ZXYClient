/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text,
    TextInput,
    StatusBar,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var mine_pre = require('../../img/nav_search.png');
class ActiveTab extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                {this.renderNavBar()}
                <Text style={styles.text}>CourseTab.js</Text>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <Text style={styles.navBartext}>活动</Text>
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
            position : 'absolute',
            marginTop: 3,
            marginLeft:15,
        }


    }
);

module.exports = ActiveTab;
