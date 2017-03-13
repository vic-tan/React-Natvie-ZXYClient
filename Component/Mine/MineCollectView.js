/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ComNavBar from '../Common/ComNavBar';
import MineCollectCourse from './MineCollectCourse';
import MineCollectViewKnowledge from './MineCollectViewKnowledge';
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
    ListView,
    Platform
} from 'react-native';

class MineCollectView extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <ComNavBar title='我的收藏' navigator={this.props.navigator}/>
                <ScrollableTabView locked={true} initialPage={0}
                                   tabBarBackgroundColor='#FFFFFF'
                                   tabBarActiveTextColor='#47AD1D'
                                   tabBarInactiveTextColor='rgba(0,0,0,0.75)'
                                   tabBarTextStyle={{fontSize: 12,marginTop:10}}
                                   tabBarUnderlineStyle={{backgroundColor: '#47AD1D',height:2}}
                                   scrollWithoutAnimation={true}>

                        <MineCollectCourse tabLabel="课程"/>
                        <MineCollectViewKnowledge tabLabel="知识"/>
                </ScrollableTabView>

            </View>
        );
    }



}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },
    }
);

module.exports = MineCollectView;
