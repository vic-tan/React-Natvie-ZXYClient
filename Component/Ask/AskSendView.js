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
import ComNavBar from '../Common/ComNavBar';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Dimensions,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
var ToastUtils = require('../Uitls/ToastUtils');
const buttons = ['取消', '拍照','手机相册',];
class AskSendView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='发布' navigator={this.props.navigator}/>
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={this._actionSheet.bind(this)}>
                    <View style={styles.eixtBtn}>
                        <Text style={{color:'white',fontSize : 15}}>退出登录</Text>
                    </View>
                </TouchableOpacity>
                <ActionSheet
                    ref={(o) => this.ActionSheet = o}
                    title="请选择图片来源？"
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
        ToastUtils.toastShort(index);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
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
});

export default AskSendView;
