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
    Dimensions,
    Image,
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    Platform
} from 'react-native';

var {width, height} = Dimensions.get('window');
var nav_search = require('../../img/nav_search.png');
var nav_add = require('../../img/nav_add.png');
var nav_back = require('../../img/nav_back.png');


class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'课程',
            isVisible: false,
            buttonRect: {},
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                {this.renderNavBar()}
            </View>
        );
    }


    renderNavBar() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._back.bind(this)}>
                        <View style={{height: 48,width: 30}}>
                            <Image source={nav_back} style={styles.navBarBack}/>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <TextInput style={styles.navBarTextInput} placeholder='搜一搜'
                                   clearButtonMode='while-editing'
                                   placeholderTextColor="rgba(0,0,0,0.56)"

                        />
                        <Text style={styles.search}>{this.state.title}</Text>
                    </View>
                    <Image source={nav_search} style={styles.navBarAdd}/>
                </View>
            </View>
        );
    }

    _back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
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
        navBarBack: {
            width: 30,
            height: 45,
            marginLeft: 5,
            paddingTop: 10,
            paddingLeft: 10,
        },
        navBarView: {
            height: 48,
            marginTop: Platform.OS === 'ios' ? 20 : 0,
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
            width: width * 0.76,
            marginLeft: 10,
            height: 37,
            fontSize: 14,
            paddingLeft: 38,
            backgroundColor: '#ffffff',
            borderRadius: 5,
        },
        search: {
            backgroundColor: '#ffffff',
            width: 30,
            position: 'absolute',
            fontSize: 14,
            marginTop: 11,
            marginLeft: 15,
            fontSize: 13,
            color:'#000000',
        },
        navBarAdd: {
            paddingLeft: 10,
            paddingRight: 8,
            width: 32,
            height: 32,
        },


    }
);

export default SearchView;
