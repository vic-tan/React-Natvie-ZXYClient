/**
 * NetUitl 网络请求的实现
 * @author tanlifei
 * @date 2017-03-11
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import UrlConstant from '../Constant/UrlConstant';
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

            fetch(UrlConstant.DOMAIN + url, fetchOptions)
                .then((response) => response.text())
                .then((responseText) => {
                    console.log('httpUtils------>url=' + url + '-------->params=' + JsonUitls.mapToJson(data) + '----->json=' + responseText);
                    callback(JSON.parse(responseText));
                }).done();
        });

    }

    static updateImage(url, data,imgAry, callback) {
        NetInfo.isConnected.fetch().done((isConnected) => {
            /* if (!isConnected) {
             Toast.toastShort('网络不可用,请稍后再试');
             callback(null);
             return;
             }*/
            let formData = new FormData();//因为需要上传多张图片,所以需要遍历数组,把图片的路径数组放入formData中
            for (let[k,v] of data) {
                formData.append(k,v);
            }
            for (let[k,v] of imgAry) {
                let file = {uri: v, type: 'multipart/form-data', name: 'image.png'};   //这里的key(uri和type和name)不能改变,
                formData.append(k,file);
            }
            var fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                referer: 'http://tc.zhixueyun.com/zxy-student-web/',
                body: formData//这里我参数只有一个data,大家可以还有更多的参数
            };

            fetch(UrlConstant.DOMAIN + url, fetchOptions)
                .then((response) => response.text())
                .then((responseText) => {
                    console.log('httpUtils------>url=' + url + '-------->params=' + JsonUitls.mapToJson(data) +JsonUitls.mapToJson(imgAry)+ '----->json=' + responseText);
                    callback(JSON.parse(responseText),imgAry);
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
