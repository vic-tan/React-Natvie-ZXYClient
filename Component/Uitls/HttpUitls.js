/**
 * NetUitl 网络请求的实现
 * @author tanlifei
 * @date 2017-03-11
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import JsonUitls from './JsonUitls';
import Toast from './ToastUtils';
import {
    AppRegistry,
    StyleSheet,
    NetInfo
} from 'react-native';


class HttpUitls extends Component {

    //post请求
    /**
     *url :请求地址
     *data:参数
     *callback:回调函数
     */
    static  postFrom(url, data, callback) {
        NetInfo.isConnected.fetch().done((isConnected) => {
            /* if (!isConnected) {
             Toast.toastShort('网络不可用,请稍后再试');
             callback(null);
             return;
             }*/
            var fetchOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                referer: 'http://tc.zhixueyun.com/zxy-student-web/',
                body: 'json=' + JsonUitls.mapToJson(data)//这里我参数只有一个data,大家可以还有更多的参数
            };

            fetch('http://demo.zhixueyun.com/zxy-mobile-new/' + url, fetchOptions)
                .then((response) => response.text())
                .then((responseText) => {
                    callback(JSON.parse(responseText));
                }).done();
        });

    }

    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    static postJson(url, data, callback) {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (!isConnected) {
                Toast.toastShort('网络不可用,请稍后再试');
                callback(null);
                return;
            }
            var fetchOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    //json形式
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };

            fetch(url, fetchOptions)
                .then((response) => response.text())
                .then((responseText) => {
                    callback(JSON.parse(responseText));
                }).done();
        });
    }

    //get请求
    /**
     *url :请求地址
     *callback:回调函数
     */
    static  get(url, callback) {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (!isConnected) {
                Toast.toastShort('网络不可用,请稍后再试');
                callback(null);
                return;
            }
            fetch(url)
                .then((response) => response.text())
                .then((responseText) => {
                    callback(JSON.parse(responseText));
                }).done();
        });
    }

}

export default HttpUitls;
/**
 * Created by tanlifei on 2017/3/7.
 */
