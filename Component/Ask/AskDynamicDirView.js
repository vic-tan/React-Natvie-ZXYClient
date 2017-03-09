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
class AskDynamicDirView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>AskDynamicDirView</Text>
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

});

module.exports = AskDynamicDirView;
