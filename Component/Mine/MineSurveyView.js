/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ComNavBar from '../Common/ComNavBar';
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
class MineSurveyView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='我的调研' navigator={this.props.navigator}/>
                <Text style={styles.text}>我的调研</Text>
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

export default MineSurveyView;
