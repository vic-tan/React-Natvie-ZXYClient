/**
 * 数据加载异常
 * @author tanlifei
 * @date 2017-03-10
 */
'use strict';
import React, {Component} from 'react';
import {} from 'react-native';


const DOMAIN = 'http://demo.zhixueyun.com/zxy-mobile-new/';//域名
const USER_LOGIN = 'user/login';//登录
const USER_PERSONALINFO = 'user/personalInfo';//我的
const USER_MY_COURSE_FAVORITE = 'user/myCourseFavorite';//我的收藏-->课程收藏
const USER_MY_DOC_FAVORITE = 'user/myDocFavorite';//我的收藏-->知识收藏
const LIVE_GENSEE_LIST = 'gensee/getGenseeList';//我的直播

const COURSE_NEWES_LIST = 'course/newestList';//课程最新
const COURSE_HOTEST_LIST = 'course/hotestList';//课程最热
const SYS_LOAD_INDEX_LAYOUT = 'sys/loadIndexLayout';//首页



export default{
    DOMAIN,
    USER_LOGIN,
    USER_PERSONALINFO,
    USER_MY_COURSE_FAVORITE,
    USER_MY_DOC_FAVORITE,
    LIVE_GENSEE_LIST,
    COURSE_NEWES_LIST,
    COURSE_HOTEST_LIST,

    SYS_LOAD_INDEX_LAYOUT,
}

