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
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
var {width} = Dimensions.get('window');

class ChangePwdView extends Component {
    constructor(props) {
        super(props);
    }

    _enter() {
        const {navigator} = this.props;
        if (navigator) {
            //navigator.push({component: TLFMainView});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.content}>
                    <ComNavBar title='修改密码' navigator={this.props.navigator}/>
                    <View style={[styles.textInputView,{marginTop: 15}]}>
                        <Text style={styles.textInputTitle}>旧密码</Text>
                        <TextInput placeholder={'请输入旧密码'}
                                   style={[styles.textInput]} secureTextEntry={true}
                                   underlineColorAndroid="transparent" learButtonMode='while-editing'/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.textInputView}>
                        <Text style={styles.textInputTitle}>新密码</Text>
                        <TextInput placeholder={'请输入新密码'} style={styles.textInput} secureTextEntry={true}
                                   underlineColorAndroid="transparent" learButtonMode='while-editing'/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.textInputView}>
                        <Text style={styles.textInputTitle}>确认密码</Text>
                        <TextInput clearButtonMode='while-editing' secureTextEntry={true} placeholder={'请确认密码'}
                                   style={[styles.textInput]} underlineColorAndroid="transparent"/>

                    </View>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={this._enter.bind(this)}>
                        <View style={styles.loginBtn}>
                            <Text style={{color:'white',fontSize : 15}}>确 定</Text>
                        </View>
                    </TouchableOpacity>

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

    content: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
    },
    line: {
        width: width,
        height: 0.3,
        backgroundColor: '#C7C7CD',
    },

    textInputView: {
        backgroundColor: 'white',
        width: width,
        height: 52,
        flexDirection: 'row',
    },
    textInputTitle: {
        flex: 1,
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'right',
        paddingRight: 12,
        color: '#000000',
    },
    textInput: {
        flex: 3,
        height: 52,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        height: 40,
        width: width * 0.92,
        backgroundColor: '#47AD1D',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
    },
});

export default ChangePwdView;
