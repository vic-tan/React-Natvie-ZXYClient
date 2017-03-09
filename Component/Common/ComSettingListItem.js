/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import { toastShort } from '../Uitls/ToastUtils';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var ChangePwdView = require("../Setting/ChangePwdView");
var MineStutyView = require("../Mine/MineStutyView");
var MineClassView = require("../Mine/MineClassView");
var MineExamView = require("../Mine/MineExamView");
var MineSurveyView = require("../Mine/MineSurveyView");
var MineKnowledgeView = require("../Mine/MineKnowledgeView");
var QrCodeView = require("../Setting/QrCodeView");
var MineAskView = require("../Mine/MineAskView");

var ComSettintListItemView = require("./ComSettingListItemView")
    ;

class ComSettingListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            index: -1
        };
    }

    render() {
        return (
            <View style={styles.navBarView}>
                <TouchableHighlight onPress={this._onPress.bind(this)}>
                    <View >
                        <ComSettintListItemView title={this.props.title}/>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    _onPress() {
        const {navigator} = this.props;
        if (navigator) {
            switch (this.props.index) {
                case 0://修改密码
                    navigator.push({component: ChangePwdView});
                    break;
                case 1://学习路径
                    toastShort('用户名不能为空...');
                    break;
                case 2://
                    navigator.push({component: QrCodeView});
                    break;
                case 3://二维码
                    navigator.push({component: QrCodeView});
                    break;
                case 4://我的调研
                    navigator.push({component: MineSurveyView});
                    break;
                case 5://我的知识
                    navigator.push({component: MineKnowledgeView});
                    break;
                case 6://二维码
                    navigator.push({component: QrCodeView});
                    break;
                case 7://我的问道
                    navigator.push({component: MineAskView});
                    break;
            }
        }
    }
}


const styles = StyleSheet.create({

        navBarView: {
            backgroundColor: 'white',
            width: width,
        },
    }
);

module.exports = ComSettingListItem;