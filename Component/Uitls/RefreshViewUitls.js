/**
 * NetUitl 网络请求的实现
 * @author tanlifei
 * @date 2017-03-11
 */
'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import ListRefreshStateConstant from '../Constant/ListRefreshStateConstant'
var JsonUitls = require("./JsonUitls");
var HttpUitls = require("./HttpUitls");


class RefreshViewUitls extends Component {

    /**
     * 列表下拉上拉请求接口
     * @param pullReleaseTag 0.表示默认第一次加载 1、为下拉，2、 加载更多
     * @param url
     * @param pageNumber 请求的页码数
     * @param callback 请求完成回调
     */
    static pullRequest(pullReleaseTag, url, pageNumber, callback) {
        storage.load({
            key: 'user',
        }).then(ret => {
            let map = new Map()
            map.set('type', '');
            map.set('pageNumber', pullReleaseTag <= 1 ? 1 : pageNumber);
            map.set('sid', ret.sid);
            map.set('pageSize', 10);
            HttpUitls.postFrom(url, map, (set) => {
                callback(map, set)
            })
        }).catch(err => {
        })
    }

    /**
     *
     *  改变是不是第一次加载数据的标识
     * @param map 请求列表的时的参数
     * @param set 请求列表的list
     * @returns {boolean}
     */
    static  getIsFirstLoading(map, set) {
        return set.data.list.length === map.get('pageSize') ? false : true;
    }

    /**
     * footer 状态改变 上拉完成后，用来显示下一页footer显示什么状态
     * @param map 请求列表的时的参数
     * @param set 请求列表的list
     * @returns {boolean}
     */
    static  getFooterState(map, set) {
        return set.data.list.length === map.get('pageSize') ? 1 : 2;
    }

    /**
     * 上拉或下拉请示接口完成后更怕pageNumber 变数
     * @param isPullRelease true 表示下拉，false 表示上拉
     * @param map 请求列表的时的参数
     * @param set 请求列表的list
     * @returns {*}
     */
    static  getPageNumber(isPullRelease, map, set) {
        return isPullRelease ? (set.data.list.length === map.get('pageSize') ? 2 : 1) : (set.data.list.length === map.get('pageSize') ? set.data.pageNumber + 1 : set.data.pageNumber);
    }


    /*---------------------  刷新状态 view ----------------------------------*/
    /**
     * 0.默认进来自动加载
     */
    static refreshStateStart() {
        return  ListRefreshStateConstant.REFRESH_OPT_START;
    }

    /**
     * 1.下拉加载
     */
    static refreshStatePull() {
        return  ListRefreshStateConstant.REFRESH_OPT_PULL;
    }

    /**
     * 2.上滑加载更多
     */
    static refreshStateMore() {
        return  ListRefreshStateConstant.REFRESH_OPT_MORE;
    }


    /*---------------------  footer view ----------------------------------*/
    /**
     * 表示不显示加载更多的foorter
     */
    static footerStateHide() {//表示正在加载
        return  ListRefreshStateConstant.REFRESH_FOOTER_STATE_HIDE;
    }

    /**
     * 1加载中
     */
    static footerStateLoading() {//暂无数据
        return  ListRefreshStateConstant.REFRESH_FOOTER_STATE_LOADING;
    }

    /**
     * 2,已没有更多，到底了
     */
    static footerStateNoData() {//网络异常
        return  ListRefreshStateConstant.REFRESH_FOOTER_STATE_NO_DATA;
    }


    //true ,第一次加载，false,加载更多
    /**
     * 一次界面第一次加载footer view
     */
    static footerStateIsfirstLoading() {//加载失败重试
        return  ListRefreshStateConstant.REFRESH_FOOTER_STATE_IS_FIRST_LOADING;
    }

    /**
     * false,加载更多 foorter view
     */
    static footerStateIsNotfirstLoading() {//加载失败重试
        return  ListRefreshStateConstant.REFRESH_FOOTER_STATE_IS_NOT_FIRST_LOADING;
    }
}

module.exports = RefreshViewUitls;
/**
 * Created by tanlifei on 2017/3/7.
 */
