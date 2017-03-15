/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

var mine_arrow_right = require('../../img/mine_arrow_right.png');
class HomeCommonCellTopView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bean: '',  // 标题
            rightTitle: '',
        }
    }


    render() {
        return (
            <View style={styles.container}>

                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}

                {this.renderRightView()}
            </View>
        );
    }


    // cell右边显示的内容
    renderLeftView() {
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={styles.lineTag}/>
                <Text>{this.props.bean.region_name}</Text>
            </View>
        )
    }

    // cell右边显示的内容
    renderRightView() {
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {this.rightTitle()}
                <Image source={mine_arrow_right} style={{width:19, height:18, marginRight:8}}/>
            </View>
        )
    }


    rightTitle() {
        if (this.props.rightTitle.length > 0) {
            return (
                <TouchableOpacity activeOpacity={0.8} onPress={this.childMore.bind(this)}>
                    <Text style={{color:'gray', marginRight:3}}>{this.props.rightTitle}</Text>
                </TouchableOpacity>
            )
        }
    }

    childMore() {
        return this.props.callbackMore(this.props.bean);
    }
}


const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        // 主轴的对齐方式
        justifyContent: 'space-between',
        // 垂直居中
        alignItems: 'center'
    },
    lineTag: {
        height: 20,
        width: 4,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 5,
        backgroundColor: '#47AD1D',

    },
});

// 输出组件类
export default HomeCommonCellTopView;
