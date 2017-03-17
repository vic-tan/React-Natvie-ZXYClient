/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import MyCourseView from '../Mine/MyCourseView';
import MineStutyView from '../Mine/MineStutyView';
import MineClassView from '../Mine/MineClassView';
import MineExamView from '../Mine/MineExamView';
import MySurveyView from '../Mine/MySurveyView';
import MineKnowledgeView from '../Mine/MineKnowledgeView';
import MineLiveView from '../Mine/MineLiveView';
import MineAskView from '../Mine/MineAskView';
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
class ComMineGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            icon: '',
            desc_header: '',
            desc_count: '',
            desc_footer: '',
            index: -1
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBarView}>
                    <TouchableHighlight onPress={this._onPress.bind(this)} style={{flex: 1}}>
                        <View style={{ flex: 1,backgroundColor: 'white' ,flexDirection: 'row'}}>
                            <Image source={this.props.icon} style={styles.gridImgItem}/>
                            <View style={{justifyContent: 'center',alignItems:'center' ,alignSelf:'center'}}>
                                {this._typeTitle()}
                                <View style={{flexDirection: 'row',flex: 1}}>
                                    <Text style={styles.gridDesc}>{this.props.desc_header}</Text>
                                    <Text style={styles.gridDescCount}>{this.props.desc_count}</Text>
                                    <Text style={styles.gridDesc}>{this.props.desc_footer}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    _typeTitle() {
        switch (this.props.index) {
            case 6://我的课程
            case 7:
                return (
                    <Text style={[styles.gridTile2]}>{this.props.title}</Text>
                );
                break;
            default:
                return (
                    <Text style={styles.gridTile}>{this.props.title}</Text>
                );
                break;
        }
    }


    _onPress() {
        const {navigator} = this.props;
        if (navigator) {
            switch (this.props.index) {
                case 0://我的课程
                    navigator.push({component: MyCourseView});
                    break;
                case 1://学习路径
                    navigator.push({component: MineStutyView});
                    break;
                case 2://我的班级
                    navigator.push({component: MineClassView});
                    break;
                case 3://我的考试
                    navigator.push({component: MineExamView});
                    break;
                case 4://我的调研
                    navigator.push({component: MySurveyView});
                    break;
                case 5://我的知识
                    navigator.push({component: MineKnowledgeView});
                    break;
                case 6://我的直播
                    navigator.push({component: MineLiveView});
                    break;
                case 7://我的问道
                    navigator.push({component: MineAskView});
                    break;
            }
        }
    }
}


const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
        },
        navBarView: {
            backgroundColor: 'white',
            width: width * 0.5,
        },

        gridImgItem: {
            width: 28,
            height: 28,
            marginLeft: 20,
            marginTop: 15,
            marginBottom: 8,
            marginRight: 8,
        },
        gridTile: {
            color: 'rgba(0,0,0,0.75)',
            fontSize: 15,
            marginTop: 15,
            alignSelf: 'flex-start'
        },
        gridTile2: {
            color: 'rgba(0,0,0,0.75)',
            fontSize: 15,
            alignSelf: 'flex-start',
            paddingTop: 20,
        },
        gridDesc: {
            color: 'rgba(0,0,0,0.35)',
            fontSize: 12,
            marginTop: 10,
            marginBottom: 15,
            alignSelf: 'flex-start'
        },
        gridDescCount: {
            color: '#ff6000',
            fontSize: 12,
            marginTop: 10,
            marginBottom: 15,
            alignSelf: 'flex-start'
        },
    }
);

export default ComMineGridItem;