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
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    View,
    Text
} from 'react-native';
var {width} = Dimensions.get('window');

class QrCodeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.content}>
                    <ComNavBar title='二维码' navigator={this.props.navigator}/>
                    <View style={[styles.textInputView,{marginTop: 15}]}>
                        <Image source={{uri:'http://demo.zhixueyun.com/app/qr.png'}} style={styles.qrCodeImg}/>
                        <Text style={styles.textInputTitle}>扫描二维码 ，下载客户端</Text>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },
    qrCodeImg:{
        alignSelf: 'center',
        marginTop: width*0.2,
        width:width*0.52,
        height:width*0.52,
    },
    textInputTitle: {
        fontSize: 14,
        width: width,
        height: 30,
        marginTop: 15,
        alignSelf: 'center',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.35)',
    },




});

export default QrCodeView;
