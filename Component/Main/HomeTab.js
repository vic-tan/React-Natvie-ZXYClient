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
    Text
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'test'
        }
        console.log('--->constructor');
    }


    componentWillMount() {
        console.log('--->render');
    }

    componentDidMount() {
        console.log('--->componentDidMount');
    }

    componentWillMount() {
        console.log('--->render');
    }

    componentWillReceiveProps() {
        console.log('--->componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('--->shouldComponentUpdate');
        return false
    }

    componentWillUpdate() {
        console.log('--->shouldComponentUpdate');
    }

    componentDidUpdate() {
        console.log('--->componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('--->componentWillUnmount');
    }

    render() {
        console.log('--->render');
        return (
            <View style={styles.container}>
                <StatusBar hidden={false}/>
                <Text style={{marginTop: 30}} onPress={()=>this._click()}>{this.state.name}</Text>
            </View>
        );
    }

    _click() {
        this.setState({name:'组件被刷新了'});
        console.log('--->click----state.name=='+this.state.name);

    }
}

const styles = StyleSheet.create({
        container: {},
    }
);

module.exports = HomeTab;
