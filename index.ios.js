/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    View
} from 'react-native';
var TLFLaunchView = require("./Component/Main/TLFLaunchView");
export default class ZXYClient extends Component {
    render() {
        return (
            <Navigator initialRoute={{component:TLFLaunchView}}
                       configureScene={()=>{
                 return Navigator.SceneConfigs.FadeAndroid;
             }}
                       renderScene={(route,navigator) =>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator}/>
            }}>
                <TLFLaunchView />
            </Navigator>
        );
    }
}

AppRegistry.registerComponent('ZXYClient', () => ZXYClient);
