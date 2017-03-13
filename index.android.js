/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import TLFLaunchView from './Component/Main/TLFLaunchView';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    View
} from 'react-native';
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
