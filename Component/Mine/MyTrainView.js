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
import MyTrainPagerView from './MyTrainPagerView';
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
class MineClassView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='我的班级' navigator={this.props.navigator}/>
                <ComTabPager initialPage={0} callbackTab={this.tabPagerItem()}/>
            </View>
        );
    }

    tabPagerItem() {
        var allImage = [];
        allImage.push(
            <MyTrainPagerView key='0' tabLabel="报名中" url={UrlConstant.TRAIN_MY_APPLYING_LIST}/>
        );
        allImage.push(
            <MyTrainPagerView key='1' tabLabel="开班中" url={UrlConstant.TRAIN_MY_STUDYING_LIST}/>
        );
        allImage.push(
            <MyTrainPagerView key='3' tabLabel="已结束" url={UrlConstant.TRAIN_MY_FINISHED_LIST}/>
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

export default MineClassView;
