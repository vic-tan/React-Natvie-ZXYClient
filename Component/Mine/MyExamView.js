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
import MyExamPagerView from './MyExamPagerView';
import UrlConstant from '../Constant/UrlConstant';
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
class MineExamView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='我的考试' navigator={this.props.navigator}/>
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem() {
        var allImage = [];
        allImage.push(
            <MyExamPagerView key={0} tabLabel="待考试" url={UrlConstant.EXAM_MY_UNSTAR_LIST}/>
        );
        allImage.push(
            <MyExamPagerView key={1} tabLabel="已完成" url={UrlConstant.EXAM_MY_FINISHED_LIST}/>
        );
        allImage.push(
            <MyExamPagerView key={2} tabLabel="已过期" url={UrlConstant.EXAM_MY_OVER_DATE_LIST}/>
        );


        return allImage;
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

export default MineExamView;
