/**
 * 数据加载异常
 * @author tanlifei
 * @date 2017-03-10
 */
'use strict';
import React, {Component} from 'react';
import {} from 'react-native';

const DOMAIN = 'http://tc.zhixueyun.com/zxy-mobile-new/';//---------------------------------------->域名
//const DOMAIN = 'http://demo.zhixueyun.com/zxy-mobile-new/';//---------------------------------------->域名
const USER_LOGIN = 'user/login';//------------------------------------------------------------------->登录
const USER_PERSONALINFO = 'user/personalInfo';//----------------------------------------------------->我的
const USER_MY_COURSE_FAVORITE = 'user/myCourseFavorite';//------------------------------------------->我的收藏-->课程收藏
const USER_MESSAGE_LIST = 'user/messageList';//------------------------------------------->我的收藏-->课程收藏
const USER_MY_DOC_FAVORITE = 'user/myDocFavorite';//------------------------------------------------->我的收藏-->知识收藏
const USER_UPLOAD_HEAD_PHOTO = 'user/uploadHeadPhoto';//------------------------------------------------->我的收藏-->知识收藏
const LIVE_GENSEE_LIST = 'gensee/getGenseeList';//--------------------------------------------------->我的直播
const LIVE_GENSEE_HISTORY_LIST = 'gensee/getGenseeHistoryList';//--------------------------------------------------->我的直播

const COURSE_NEWES_LIST = 'course/newestList';//----------------------------------------------------->课程最新
const COURSE_HOTEST_LIST = 'course/hotestList';//---------------------------------------------------->课程最热
const COURSE_MY_COURSE_LIST = 'course/myCourseList';//---------------------------------------------------->课程最热
const COURSE_SCORM_CATEGORY_LIST = 'course/scorm/scormCategoryList';//---------------------------------------------------->课程最热
const COURSE_NOTE_LIST = 'course/note/noteList';//---------------------------------------------------->课程最热
const COURSE_COMMENT_LIST = 'course/comment/commentList';//---------------------------------------------------->课程最热
const COURSE_COURSE_BRIEF = 'course/courseBrief';//---------------------------------------------------->课程最热


const SYS_LOAD_INDEX_LAYOUT = 'sys/loadIndexLayout';//首页
const SYS_FIND_INDEX_RECOMMEND_COURSE_LIST = 'sys/findIndexRecommendCourseList';//------------------->首页推荐课程列表接口
const SYS_FIND_INDEX_RECOMMEND_SUBJECT_LIST = 'sys/findIndexRecommendSubjectList';//----------------->首页推荐专题列表接口
const SYS_FIND_INDEX_RECOMMEND_HOT_KNOWLEDGE_LIST = 'sys/findIndexHotKnowledgeList';//--------------->首页热门知识列表接口
const SYS_FIND_INDEX_RECOMMEND_HOT_ACTIVITY_LIST = 'sys/findIndexHotActivityList';//----------------->首页最新活动列表接口
const SYS_FIND_INDEX_RECOMMEND_MY_REQUIRED_LIST = 'sys/findIndexMyRequiredList';//----------------->首页最新活动列表接口
const SYS_FIND_INDEX_RECOMMEND_HOT_LECTURERS_LIST = 'sys/findIndexLecturersList';//------------------>首页讲师榜列表接口
const SYS_FIND_INDEX_RECOMMEND_RECOMMEND_ACTIVITY_LIST = 'sys/findIndexRecommendActivityList';//------------------>首页讲师榜列表接口
const NEWS_LIST = 'news/newsList';

const PATH_LIST = 'path/publicPathList';
const PATH_MY_LIST = 'path/myPathList';

const DOC_NEWEST_LIST = 'doc/newestList';
const DOC_HOTEST_LIST = 'doc/hotestList';
const DOC_MY_PUBLISH = 'doc/myPublish';

const TRAIN_CLASS_PUBLIC_LIST = 'train/class/publicList';
const TRAIN_MY_FINISHED_LIST = 'train/class/myFinishedList';
const TRAIN_MY_STUDYING_LIST = 'train/class/myStudyingList';
const TRAIN_MY_APPLYING_LIST = 'train/class/myApplyingList';

const SUBJECT_NEWEST_LIST = 'subject/newestList';
const SUBJECT_HOTEST_LIST = 'subject/hotestList';

const SURVEY_SURVEY_LIST = 'survey/surveyList';
const SURVEY_MY_SURVEY_LIST = 'survey/mySurveyList';

const EXAM_PUBLIC_LIST = 'exam/publicList';
const EXAM_SIMULATE_LIST = 'exam/simulate/examList';
const EXAM_MY_FINISHED_LIST = 'exam/myFinishedList';
const EXAM_MY_OVER_DATE_LIST = 'exam/myOverDateList';
const EXAM_MY_UNSTAR_LIST = 'exam/myUnStartList';




export default{
    DOMAIN,
    //用户
    USER_LOGIN,
    USER_PERSONALINFO,
    USER_MY_COURSE_FAVORITE,
    USER_MY_DOC_FAVORITE,
    USER_MESSAGE_LIST,
    USER_UPLOAD_HEAD_PHOTO,

    //直播
    LIVE_GENSEE_LIST,
    LIVE_GENSEE_HISTORY_LIST,

    //课程
    COURSE_NEWES_LIST,
    COURSE_HOTEST_LIST,
    COURSE_MY_COURSE_LIST,
    COURSE_SCORM_CATEGORY_LIST,
    COURSE_NOTE_LIST,
    COURSE_COMMENT_LIST,
    COURSE_COURSE_BRIEF,

    //新闻
    NEWS_LIST,

    //培训
    TRAIN_CLASS_PUBLIC_LIST,
    TRAIN_MY_APPLYING_LIST,
    TRAIN_MY_FINISHED_LIST,
    TRAIN_MY_STUDYING_LIST,

    //专题
    SUBJECT_NEWEST_LIST,
    SUBJECT_HOTEST_LIST,

    //调研
    SURVEY_SURVEY_LIST,
    SURVEY_MY_SURVEY_LIST,

    //考试
    EXAM_PUBLIC_LIST,
    EXAM_SIMULATE_LIST,
    EXAM_MY_FINISHED_LIST,
    EXAM_MY_OVER_DATE_LIST,
    EXAM_MY_UNSTAR_LIST,

    //路径
    PATH_LIST,
    PATH_MY_LIST,

    //系统
    SYS_LOAD_INDEX_LAYOUT,
    SYS_FIND_INDEX_RECOMMEND_COURSE_LIST,
    SYS_FIND_INDEX_RECOMMEND_SUBJECT_LIST,
    SYS_FIND_INDEX_RECOMMEND_HOT_KNOWLEDGE_LIST,
    SYS_FIND_INDEX_RECOMMEND_HOT_ACTIVITY_LIST,
    SYS_FIND_INDEX_RECOMMEND_MY_REQUIRED_LIST,
    SYS_FIND_INDEX_RECOMMEND_HOT_LECTURERS_LIST,
    SYS_FIND_INDEX_RECOMMEND_RECOMMEND_ACTIVITY_LIST,


    DOC_NEWEST_LIST,
    DOC_HOTEST_LIST,
    DOC_MY_PUBLISH,



}

