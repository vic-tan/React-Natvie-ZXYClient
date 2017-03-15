/**
 * 数据加载异常
 * @author tanlifei
 * @date 2017-03-10
 */
'use strict';
import React, {Component} from 'react';
import {} from 'react-native';


const DOMAIN = 'http://demo.zhixueyun.com/zxy-mobile-new/';//---------------------------------------->域名
const USER_LOGIN = 'user/login';//------------------------------------------------------------------->登录
const USER_PERSONALINFO = 'user/personalInfo';//----------------------------------------------------->我的
const USER_MY_COURSE_FAVORITE = 'user/myCourseFavorite';//------------------------------------------->我的收藏-->课程收藏
const USER_MY_DOC_FAVORITE = 'user/myDocFavorite';//------------------------------------------------->我的收藏-->知识收藏
const LIVE_GENSEE_LIST = 'gensee/getGenseeList';//--------------------------------------------------->我的直播

const COURSE_NEWES_LIST = 'course/newestList';//----------------------------------------------------->课程最新
const COURSE_HOTEST_LIST = 'course/hotestList';//---------------------------------------------------->课程最热


const SYS_LOAD_INDEX_LAYOUT = 'sys/loadIndexLayout';//首页
const SYS_FIND_INDEX_RECOMMEND_COURSE_LIST = 'sys/findIndexRecommendCourseList';//------------------->首页推荐课程列表接口
const SYS_FIND_INDEX_RECOMMEND_SUBJECT_LIST = 'sys/findIndexRecommendSubjectList';//----------------->首页推荐专题列表接口
const SYS_FIND_INDEX_RECOMMEND_HOT_KNOWLEDGE_LIST = 'sys/findIndexHotKnowledgeList';//--------------->首页热门知识列表接口
const SYS_FIND_INDEX_RECOMMEND_HOT_ACTIVITY_LIST = 'sys/findIndexHotActivityList';//----------------->首页最新活动列表接口
const SYS_FIND_INDEX_RECOMMEND_MY_REQUIRED_LIST = 'sys/findIndexMyRequiredList';//----------------->首页最新活动列表接口
const SYS_FIND_INDEX_RECOMMEND_HOT_LECTURERS_LIST = 'sys/findIndexLecturersList';//------------------>首页讲师榜列表接口
const SYS_FIND_INDEX_RECOMMEND_RECOMMEND_ACTIVITY_LIST = 'sys/findIndexRecommendActivityList';//------------------>首页讲师榜列表接口


export default{
    DOMAIN,
    //用户
    USER_LOGIN,
    USER_PERSONALINFO,
    USER_MY_COURSE_FAVORITE,
    USER_MY_DOC_FAVORITE,

    //直播
    LIVE_GENSEE_LIST,

    //课程
    COURSE_NEWES_LIST,
    COURSE_HOTEST_LIST,

    //系统
    SYS_LOAD_INDEX_LAYOUT,
    SYS_FIND_INDEX_RECOMMEND_COURSE_LIST,
    SYS_FIND_INDEX_RECOMMEND_SUBJECT_LIST,
    SYS_FIND_INDEX_RECOMMEND_HOT_KNOWLEDGE_LIST,
    SYS_FIND_INDEX_RECOMMEND_HOT_ACTIVITY_LIST,
    SYS_FIND_INDEX_RECOMMEND_MY_REQUIRED_LIST,
    SYS_FIND_INDEX_RECOMMEND_HOT_LECTURERS_LIST,
    SYS_FIND_INDEX_RECOMMEND_RECOMMEND_ACTIVITY_LIST,
}
