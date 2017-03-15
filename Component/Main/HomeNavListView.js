/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
var nav_back = require('../../img/ktv.png');
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
var cellW = Platform.OS == 'ios' ? 70 : 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);
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
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={nav_back} style={{width:52, height:52}}/>
                    <Text style={styles.titleStyle}>{rowdata.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }


    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.contentViewStyle}
                    scrollEnabled={false}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    contentViewStyle: {
        flexDirection:'row',
        flexWrap: 'wrap',
        width:width,
        alignItems:'center', // 必须设置,否则换行不起作用
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
        color: 'gray'
    }
});
export default HomeNavListView;
