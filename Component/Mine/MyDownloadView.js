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
import ComTabPager from '../Common/ComTabPager';
import MyPathPagerView from './MyPathPagerView';
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

class MineDownloadView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='我的离线' navigator={this.props.navigator}/>
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem() {
        var allImage = [];
        allImage.push(
            <MyPathPagerView key={0} tabLabel="离线课程" pager="1"/>
        );
        allImage.push(
            <MyPathPagerView key={1} tabLabel="离线知识" pager="2"/>
        );
        return allImage;
    }


}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },

        rowContainer: {
            width: width * 0.95,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 10,
            alignSelf: 'center',
        },

        rowTitle: {
            width: width * 0.9,
            color: "#C62433",
            fontSize: 15,
            fontWeight: 'bold',
            padding: 9,
            paddingBottom: 0,
        },
        rowDesc: {
            width: width * 0.95,
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            padding: 9,
            paddingTop: 5,
            paddingBottom: 0,
        },
        timeView: {
            width: width * 0.9,
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        rowTime: {
            color: "rgba(0,0,0,0.5)",
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            fontSize: 13,
            padding: 9,
            paddingTop: 5,
            paddingBottom: 5,
        },


    }
);


export default MineDownloadView;
