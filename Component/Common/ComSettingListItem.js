/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import ChangePwdView from '../Setting/ChangePwdView';
import MineStutyView from '../Mine/MyPathView';
import MineClassView from '../Mine/MyTrainView';
import MineExamView from '../Mine/MyExamView';
import MineSurveyView from '../Mine/MySurveyView';
import MineKnowledgeView from '../Mine/MineKnowledgeView';
import QrCodeView from '../Setting/QrCodeView';
import MineAskView from '../Mine/MineAskView';

import ComSettintListItemView from './ComSettingListItemView';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
var ToastUtils = require('../Uitls/ToastUtils');

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
                    ToastUtils.toastShort('用户名不能为空...');
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

export default ComSettingListItem;