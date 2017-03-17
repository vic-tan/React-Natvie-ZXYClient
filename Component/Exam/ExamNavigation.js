/**
 * Created by tanlifei on 2017/3/7.
 */
/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ExamTabView from './ExamTabView';
import {
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
} from 'react-native';
class ExamNavigation extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route}/>
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Navigator
                    ref='navigator'
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                    component:ExamTabView,
                    name: 'Navigation'
                     }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

export default ExamNavigation;
