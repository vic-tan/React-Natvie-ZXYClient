/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ActionSheet from 'react-native-actionsheet';
import { toastShort } from '../Uitls/ToastUtils';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    TabNavigator,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var ComNavBar = require("../Common/ComNavBar");
var ComSettingListItem = require("../Common/ComSettingListItem");
const buttons = ['取消', '确认退出',];
class MineSetView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='设置' navigator={this.props.navigator}/>
                <View style={{height:15,width:width}}/>
                <ComSettingListItem title='修改密码' index={0} navigator={this.props.navigator}/>
                <View style={{height:1.1,width:width}}/>
                <ComSettingListItem title='清除缓存' index={1} navigator={this.props.navigator}/>
                <View style={{height:1.1,width:width}}/>
                <ComSettingListItem title='检测更新' index={2} navigator={this.props.navigator}/>
                <View style={{height:15,width:width}}/>
                <ComSettingListItem title='二维码' index={3} navigator={this.props.navigator}/>
                <View style={{height:1.1,width:width}}/>
                <ComSettingListItem title='关于我们' index={4} navigator={this.props.navigator}/>

                <TouchableOpacity activeOpacity={0.5}
                                  onPress={this._actionSheet.bind(this)}>
                    <View style={styles.eixtBtn}>
                        <Text style={{color:'white',fontSize : 15}}>退出登录</Text>
                    </View>
                </TouchableOpacity>
                <ActionSheet
                    ref={(o) => this.ActionSheet = o}
                    title="是否退出登录？"
                    options={buttons}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={1}
                    onPress={this._exit.bind(this)}
                />
            </View>
        );
    }

    _actionSheet() {
        this.ActionSheet.show();
    }

    _exit(index) {
        toastShort('开发中...敬请期待');
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3F3',
        },
        line: {
            height: 1.1,
            width: width,
        },
        eixtBtn: {
            height: 40,
            width: width * 0.92,
            backgroundColor: '#47AD1D',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 5,
        },


    }
);

module.exports = MineSetView;
