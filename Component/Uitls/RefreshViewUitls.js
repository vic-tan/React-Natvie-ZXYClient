/**
 * NetUitl 网络请求的实现
 * @author lidong
 * @date 2016-03-17
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
var JsonUitls = require("./JsonUitls");
var HttpUitls = require("./HttpUitls");


class RefreshViewUitls extends Component {

    /**
     *
     * @param pullReleaseTag true 为下拉，false 加载更多
     * @param url
     * @param pageNumber 请求的页码数
     * @param callback 请求完成回调
     */
    static request(pullReleaseTag, url, pageNumber, callback) {
        storage.load({
            key: 'user',
        }).then(ret => {
            let map = new Map()
            map.set('type', '');
            map.set('pageNumber', pullReleaseTag ? 1 : pageNumber);
            map.set('sid', ret.sid);
            map.set('pageSize', 10);
            HttpUitls.postFrom(url, map, (set) => {
                callback(map, set)
            })
        }).catch(err => {
        })

    }
}

module.exports = RefreshViewUitls;
/**
 * Created by tanlifei on 2017/3/7.
 */
