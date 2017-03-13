/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import HttpUitls from '../Uitls/HttpUitls';
import ToastUtils from '../Uitls/ToastUtils';
import TLFForgotPassword from './TLFForgotPassword';
import TLFNavigation from './TLFNavigation';
import {
    AppRegistry,
    StyleSheet,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    View,
    Dimensions,
    Text
} from 'react-native';
var {width, height} = Dimensions.get('window');

class TLFLoginView extends Component {
    constructor(props) {
        super(props);
    }

    /* _validation() {
     /!* var qyname =this.refs['qyname'];
     var name =this.refs['name'];
     var pwd =this.refs['pwd'];
     toastShort.show(qyname.text );
     if(qyname.text.isEmpty()){
     toastShort.show('企业名不能为空！');
     }else if(name.text.isEmpty()){
     toastShort.show('账号不能为空！');
     }else if(pwd.text.isEmpty()){
     toastShort.show('密码不能为空！');
     }*!/
     }*/

    _login() {
        loaderHandler.showLoader('登录中...');
        let map = new Map()
        map.set('appSystem', 'Android 6.0.1');
        map.set('password', 'hdAn1URhCSUEdBHszUUXrQ==');
        map.set('language', 'Hzh_CN');
        map.set('login_id', 'tanlifei');
        map.set('client_type', 6);
        map.set('company_name', '猛象谷');
        HttpUitls.postFrom('user/login', map, (set) => this._callback(set))
    }

    _callback(set) {
        loaderHandler.hideLoader();
        if (set != null) {
            if (set.code == '0000') {
                storage.save({
                    key: 'user',
                    rawData: {
                        sid: set.data.sid,
                        user: set.data,
                    },
                    expires: null
                });
                const {navigator} = this.props;
                if (navigator) {
                    navigator.push({component: TLFNavigation});
                }
            } else {
                ToastUtils.toastShort(set.msg);
            }
        }
    }

    _ForgotPassword() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({component: TLFForgotPassword});
        }
    }

    render() {
        storage.save({
            key: 'fristLaunchState',
            rawData: {
                islaunchstate: 'true',
            },
            expires: null
        });
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image source={require('../../img/main_login_bg.png')} style={styles.launchImageStyle}></Image>
                <View style={styles.content}>
                    <Image source={require('../../img/main_login_logo.png')} style={styles.logoImg}></Image>

                    <View style={[styles.textInputView,{marginTop: 20}]}>
                        <Text style={styles.textInputTitle}>企业名称</Text>
                        <TextInput refs='qyname' placeholder={'请输入企业名称'}
                                   style={[styles.textInput]}
                                   value="猛象谷"
                                   underlineColorAndroid="transparent"/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.textInputView}>
                        <Text style={styles.textInputTitle}>账       号</Text>
                        <TextInput refs='name' placeholder={'账号/邮箱/手机号'} style={styles.textInput}
                                   value="tanlifei"
                                   underlineColorAndroid="transparent"/>
                    </View>
                    <View style={styles.line}/>

                    <View style={styles.textInputView}>
                        <Text style={styles.textInputTitle}>密       码</Text>
                        <TextInput refs='pwd' clearButtonMode='while-editing' secureTextEntry={true}
                                   placeholder={'请输入密码'}
                                   value="t123456"
                                   style={[styles.textInput]} underlineColorAndroid="transparent"/>

                    </View>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={this._login.bind(this)}>
                        <View style={styles.loginBtn}>
                            <Text style={{color:'white',fontSize : 15}}>登 录</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={this._ForgotPassword.bind(this)}>
                        <Text style={{color:'#63666A'}}>忘记密码</Text>
                    </TouchableOpacity>


                </View>
                <View style={styles.bottom}>
                    <Text style={styles.name}>深圳知学云科技有限公司</Text>
                    <Text style={styles.tel}>400-656-8595</Text>
                </View>
                <BusyIndicator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    logoImg: {
        width: 130,
        height: 150,
        marginTop: 50,
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
        backgroundColor: '#1EB0FC',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
    },
    bottom: {
        width: width,
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    },
    name: {
        bottom: 15,
        color: '#C7C7CD',
    },
    tel: {
        bottom: 10,
        color: '#C7C7CD'
    }
});

export default TLFLoginView;
