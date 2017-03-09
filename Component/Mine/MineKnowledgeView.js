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
    StatusBar,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var ComNavBar = require("../Common/ComNavBar");
class MineKnowledgeView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='我的知识' navigator={this.props.navigator}/>
                <Text style={styles.text}>我的知识</Text>
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

    }
);

module.exports = MineKnowledgeView;
