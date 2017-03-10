/**
 * 数据加载异常
 * @author tanlifei
 * @date 2017-03-10
 */
'use strict';
import React, {Component} from 'react';
import {} from 'react-native';


//-1.什么都不显示,0表示正在加载，1.暂无数据，2.网络异常,3服务器异常，4.加载失败重试
const CHILD_VIEW_STATE_HIDE = -1;//表示正在加载，
const CHILD_VIEW_STATE_LOADING = 0;//表示正在加载，
const CHILD_VIEW_STATE_NO_DATA = 1;//暂无数据
const CHILD_VIEW_STATE_NET_WORK_ERROR = 2;//网络异常
const CHILD_VIEW_STATE_LOADING_ERROR = 3;//加载失败重试

const PARENT_VIEW_STATE_SHOW = true;//异常显示父类view 显示
const PARENT_VIEW_STATE_HIDE = false;//异常显示父类view 隐藏

export default{
    CHILD_VIEW_STATE_HIDE,
    CHILD_VIEW_STATE_LOADING,
    CHILD_VIEW_STATE_NO_DATA,
    CHILD_VIEW_STATE_NET_WORK_ERROR,
    CHILD_VIEW_STATE_LOADING_ERROR,

    PARENT_VIEW_STATE_SHOW,
    PARENT_VIEW_STATE_HIDE,
}

