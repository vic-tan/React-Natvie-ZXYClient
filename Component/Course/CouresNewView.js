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
    StatusBar,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
class CouresNewView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>CouresNewView.js.js</Text>
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

export default CouresNewView;
