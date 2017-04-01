/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import SearchView from '../Search/SearchView';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
var nav_search = require('../../img/nav_search.png');
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
                    <TouchableOpacity activeOpacity={0.8} onPress={this._search.bind(this)}>
                        <View style={styles.navBarSearchView}>
                            <Image source={nav_search} style={styles.search}/>
                            <Text style={styles.navBarTextInput}
                            >搜一搜</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _search() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({component: SearchView});
        }
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
        navBarSearchView: {
            width: width * 0.8,
            marginLeft: 10,
            height: 37,
            flexDirection: 'row',
            backgroundColor: '#409D1A',
            borderRadius: 5,
        },
        navBarTextInput: {
            fontSize: 13,
            marginTop: 10,
            marginLeft: 5,
            alignItems: 'center',
            color: 'rgba(256,256,256,0.56)'
        },

        search: {
            width: 30,
            height: 30,
            marginTop: 3,
            marginLeft: 10,
        },


    }
);

export default ActiveTab;
