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
    Text
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class TLFForgotPassword extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>TLFForgotPassword.js</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {},
    }
);

module.exports = TLFForgotPassword;
