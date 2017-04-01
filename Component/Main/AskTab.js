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
import SearchView from '../Search/SearchView';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity,
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

    tabPagerItem() {
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
                    <TouchableOpacity activeOpacity={0.8} onPress={this._search.bind(this)}>
                        <View style={styles.navBarSearchView}>
                            <Image source={nav_search} style={styles.search}/>
                            <Text style={styles.navBarTextInput}
                            >搜一搜</Text>
                        </View>
                    </TouchableOpacity>
                    <Image source={nav_add} style={styles.navBarAdd}/>
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
            width: width * 0.68,
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
        navBarAdd: {
            paddingLeft: 10,
            paddingRight: 10,
            width: 45,
            height: 45,
        },


    }
);

export default AskTab;
