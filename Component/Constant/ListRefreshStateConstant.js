/**
 * 列表刷新状态标识
 * @author tanlifei
 * @date 2017-03-10
 */
'use strict';
import React, {Component} from 'react';
import {} from 'react-native';


//0.默认进来自动加载，1.下拉加载,2.上滑加载更多
const REFRESH_OPT_START = 0;//默认进来自动加载，
const REFRESH_OPT_PULL= 1;//下拉加载，
const REFRESH_OPT_MORE = 2;//上滑加载更多

//0:表示无， 1加载中 2,已没有更多，到底了
const REFRESH_FOOTER_STATE_HIDE = 0;//表示无
const REFRESH_FOOTER_STATE_LOADING = 1;//加载中
const REFRESH_FOOTER_STATE_NO_DATA= 2;//已没有更多了,到底了

//true ,第一次加载，false,加载更多
const REFRESH_FOOTER_STATE_IS_FIRST_LOADING= true;//第一次加载
const REFRESH_FOOTER_STATE_IS_NOT_FIRST_LOADING= false;//alse,加载更多

export default{
    REFRESH_OPT_START,
    REFRESH_OPT_PULL,
    REFRESH_OPT_MORE,

    REFRESH_FOOTER_STATE_HIDE,
    REFRESH_FOOTER_STATE_LOADING,
    REFRESH_FOOTER_STATE_NO_DATA,

    REFRESH_FOOTER_STATE_IS_FIRST_LOADING,
    REFRESH_FOOTER_STATE_IS_NOT_FIRST_LOADING,
}

