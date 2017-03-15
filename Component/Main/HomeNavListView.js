/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
var cellW = 42;
var cellH = 70;
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
            <TouchableOpacity onPress={()=>{alert(rowdata.code)}}>
                <View style={styles.cellStyle}>
                    <View style={styles.imgContentView}>
                        {this._showImage(rowdata)}
                    </View>
                    <Text style={styles.titleStyle}>{rowdata.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _showImage(rowdata) {
        switch (rowdata.code){
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#47AD1D'
    },
    img: {
        width: 42,
        height: 42
    },
    cellStyle: {
        width: cellW,
        height: cellH,
        // 水平居中和垂直居中
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: vMargin
    },

    titleStyle: {
        fontSize: Platform.OS == 'ios' ? 14 : 12,
        color: 'gray',
        marginTop:48
    }
});
export default HomeNavListView;
