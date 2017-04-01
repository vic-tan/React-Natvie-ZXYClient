/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import LiveView from '../Live/LiveView';
import NewView from '../New/NewView';
import PathView from '../Path/PathView';
import TrainView from '../Train/TrainView';
import SurveyView from '../Survey/SurveyView';
import SubjectView from '../Subject/SubjectView';
import KnowledgeView from '../Knowledge/KnowledgeView';
import ExamNavigation from '../Exam/ExamTabView';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Dimensions,
    ListView,
    TouchableOpacity,
    Text,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
// 全局的变量
var cols = 4;
var cellW = 52;
var cellH = 80;
var vMargin = (width - cellW * cols) / (cols + 1);
var new_menu_ask = require('../../img/new_menu_ask.png');
var new_menu_course = require('../../img/new_menu_course.png');
var new_menu_knowledge = require('../../img/new_menu_knowledge.png');
var new_menu_live = require('../../img/new_menu_live.png');
var new_menu_malls = require('../../img/new_menu_malls.png');
var new_menu_news = require('../../img/new_menu_news.png');
var new_menu_research = require('../../img/new_menu_research.png');
var new_menu_route = require('../../img/new_menu_route.png');
var new_menu_special = require('../../img/new_menu_special.png');
var new_menu_test = require('../../img/new_menu_test.png');
var new_menu_train = require('../../img/new_menu_train.png');


class HomeNavListView extends Component {

    constructor(props) {
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        super(props);
        this.state = {
            dataArr: [],
            dataSource: ds.cloneWithRows(this.props.dataArr)
        };
    }


    // 具体的cell
    renderRow(rowdata) {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={this._navigator.bind(this,rowdata.code)}>
                <View style={styles.cellStyle}>
                    <View style={styles.imgContentView}>
                        {this._showImage(rowdata)}
                    </View>
                    <Text style={styles.titleStyle}>{rowdata.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _navigator(navigatorTag) {
        const {navigator} = this.props;
        if (navigator) {
            let view = LiveView;
            switch (navigatorTag) {
                case 'news':
                    view = NewView;
                    break;
                case 'train':
                    view = TrainView;
                    break;
                case 'subject':
                    view = SubjectView;
                    break;
                case 'exam':
                    view = ExamNavigation;
                    break;
                case 'live':
                    view = LiveView;
                    break;
                case 'path':
                    view = PathView;
                    break;
                case 'knowledge':
                    view = KnowledgeView;
                    break;
                case 'survey':
                    view = SurveyView;
                    break;
                case 'mall':
                    break;
                case 'course':
                    break;
                case 'ask_bar':
                    break;
            }
            navigator.push({component: view});
        }

    }


    _showImage(rowdata) {
        switch (rowdata.code) {
            case 'news':
                return (<Image source={new_menu_news} style={styles.img}/>);
            case 'train':
                return (<Image source={new_menu_train} style={styles.img}/>);
            case 'subject':
                return (<Image source={new_menu_special} style={styles.img}/>);
            case 'exam':
                return (<Image source={new_menu_test} style={styles.img}/>);
            case 'live':
                return (<Image source={new_menu_live} style={styles.img}/>);
            case 'path':
                return (<Image source={new_menu_route} style={styles.img}/>);
            case 'knowledge':
                return (<Image source={new_menu_knowledge} style={styles.img}/>);
            case 'survey':
                return (<Image source={new_menu_research} style={styles.img}/>);
            case 'mall':
                return (<Image source={new_menu_malls} style={styles.img}/>);
            case 'course':
                return (<Image source={new_menu_course} style={styles.img}/>);
            case 'ask_bar':
                return (<Image source={new_menu_ask} style={styles.img}/>);
        }

    }


    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    contentContainerStyle={styles.contentViewStyle}
                    scrollEnabled={false}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    contentViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        alignItems: 'center', // 必须设置,否则换行不起作用
    },
    imgContentView: {
        alignSelf: 'center',
        width: 42,
        height: 42,
        position: 'absolute',
        borderRadius: 21,
        marginLeft: 5,
        backgroundColor: '#47AD1D'
    },
    img: {
        width: 42,
        height: 42,
    },
    cellStyle: {
        width: cellW,
        height: cellH,
        // 水平居中和垂直居中
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: vMargin,
        alignSelf: 'center',
    },

    titleStyle: {
        fontSize: Platform.OS == 'ios' ? 14 : 12,
        color: 'gray',
        marginTop: 70
    }
});
export default HomeNavListView;
