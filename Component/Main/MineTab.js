/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import SetView from '../Mine/MineSetView';
import MineMallView from '../Mine/MineMallView';
import HttpUitls from '../Uitls/HttpUitls';
import ToastUtils from '../Uitls/ToastUtils';
import ComMineItemHeader from '../Common/ComMineItemHeader';
import ComMineGridItem from '../Common/ComMineGridItem';
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
var nav_setting = require('../../img/nav_set.png');
var user_default_logo = require('../../img/user_default_logo.png');
var mine_icon_favorite = require('../../img/mine_icon_favorite.png');
var mine_icon_download = require('../../img/mine_icon_download.png');
var mine_icon_message = require('../../img/mine_icon_message.png');
var mine_icon_message_pre = require('../../img/mine_icon_message_pre.png');
var mine_icon_mall = require('../../img/mine_icon_mall.png');
var mine_arrow_right = require('../../img/mine_arrow_right.png');

var mine_icon_course = require('../../img/mine_icon_course.png');
var mine_icon_route = require('../../img/mine_icon_route.png');
var mine_icon_class = require('../../img/mine_icon_class.png');
var mine_icon_exam = require('../../img/mine_icon_exam.png');
var mine_icon_survey = require('../../img/mine_icon_survey.png');
var mine_icon_knowledge = require('../../img/mine_icon_knowledge.png');
var mine_icon_live = require('../../img/mine_icon_live.png');
var mine_icon_ask = require('../../img/mine_icon_ask.png');



class MoneTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            info: [],
        }
    }

    componentWillReceiveProps() {
        //this._loadData();
    }

    componentDidMount() {
        this._loadData();

    }


    _loadData() {
        storage.load({
            key: 'user',
        }).then(ret => {
            let sid = ret.sid;
            this.setState({
                user: ret.user,
                name: ret.user.name,
                refresh: false
            });
            loaderHandler.showLoader('加载中...');
            let map = new Map()
            map.set('sid', sid);
            HttpUitls.postFrom('user/personalInfo', map, (set) => this._callback(set))
        }).catch(err => {

        })
    }

    _callback(set) {
        if (set.code == '0000') {
            this.state.info = set.data;
            this.setState({
                info: set.data,
            });
        } else {
            ToastUtils.toastShort(set.msg);
        }
        loaderHandler.hideLoader();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                {this.renderHeader()}
                {this.renderContent()}
                <BusyIndicator />
            </View>
        );
    }
    ;

    renderContent() {
        return (
            <ScrollView>
                <View style={{width:width,flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <ComMineItemHeader title='我的收藏' icon={mine_icon_favorite} index={0}
                                           navigator={this.props.navigator}/>
                    </View>
                    <View style={{width:1.1}}/>
                    <View style={{flex: 1}}>
                        <ComMineItemHeader title='我的离线' icon={mine_icon_download} index={1}
                                           navigator={this.props.navigator}/>
                    </View>
                    <View style={{width:1.1}}/>
                    <View style={{flex: 1}}>
                        <ComMineItemHeader title='我的消息' icon={mine_icon_message_pre} index={2}
                                           navigator={this.props.navigator}/>
                    </View>
                </View>


                <View style={{width:width,flexDirection:'row', marginTop: 10,marginBottom: 10,alignItems: 'center'}}>
                    <TouchableHighlight onPress={this._mall.bind(this)} style={{flex: 1}}>
                        <View style={{ flex: 1,backgroundColor: 'white' ,flexDirection: 'row' }}>
                            <Image source={mine_icon_mall} style={styles.tagImgItem}/>
                            <Text style={styles.tagItem}>积分商城</Text>
                            <Image source={mine_arrow_right} style={styles.arrowRight}/>
                        </View>
                    </TouchableHighlight>
                </View>


                <View style={{width:width,flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <ComMineGridItem title='我的课程' icon={mine_icon_course}
                                         desc_header='有 '
                                         desc_count={this.state.info.unfinished_course_count}
                                         desc_footer=' 门学习中' 
                                         index={0}
                                         navigator={this.props.navigator}/>
                    </View>

                    <View style={{width:0.9}}/>
                    <View style={{flex: 1}}>
                        <ComMineGridItem title='学习路径' icon={mine_icon_route}
                                         desc_header='有 '
                                         desc_count={this.state.info.unfinished_path_count}
                                         desc_footer=' 门学习中'
                                         index={1}
                                         navigator={this.props.navigator}/>
                    </View>
                </View>
                <View style={{width:width,height:0.9}}/>
                <View style={{width:width,flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <ComMineGridItem title='我的班级' icon={mine_icon_class}
                                         desc_header='有 '
                                         desc_count={this.state.info.going_train_count}
                                         desc_footer=' 门开班中'
                                         index={2}
                                         navigator={this.props.navigator}/>
                    </View>

                    <View style={{width:0.9}}/>

                    <View style={{flex: 1}}>
                        <ComMineGridItem title='我的考试' icon={mine_icon_exam}
                                         desc_header='有 '
                                         desc_count={this.state.info.unbegin_exam_count}
                                         desc_footer=' 个未完成'
                                         index={3}
                                         navigator={this.props.navigator}/>
                    </View>
                </View>
                <View style={{width:width,height:0.9}}/>

                <View style={{width:width,flexDirection:'row'}}>

                    <View style={{flex: 1}}>
                        <ComMineGridItem title='我的调研' icon={mine_icon_survey}
                                         desc_header='有 '
                                         desc_count={this.state.info.survey_count}
                                         desc_footer=' 个未完成'
                                         index={4}
                                         navigator={this.props.navigator}/>
                    </View>

                    <View style={{width:0.9}}/>

                    <View style={{flex: 1}}>
                        <ComMineGridItem title='我的知识' icon={mine_icon_knowledge}
                                         desc_header='共分享知识 '
                                         desc_count={this.state.info.publish_doc_count}
                                         desc_footer=' 个'
                                         index={5}
                                         navigator={this.props.navigator}/>
                    </View>

                </View>
                <View style={{width:width,height:0.9}}/>
                <View style={{width:width,flexDirection:'row'}}>

                    <View style={{flex: 1}}>
                        <ComMineGridItem title='我的直播' icon={mine_icon_live}
                                         desc_header=''
                                         desc_count=''
                                         desc_footer=''
                                         index={6}
                                         navigator={this.props.navigator}/>
                    </View>


                    <View style={{width:0.9}}/>

                    <View style={{flex: 1}}>
                        <ComMineGridItem title='我的问道' icon={mine_icon_ask}
                                         desc_header=''
                                         desc_count=''
                                         desc_footer=''
                                         index={7}
                                         navigator={this.props.navigator}/>
                    </View>
                </View>


            </ScrollView>
        )
    }


    renderHeader() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._set.bind(this)}>
                        <View style={styles.navBarSetLayout}>
                            <Image source={nav_setting} style={styles.navBarSet}/>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerContent}>
                        <Image source={{uri:this.state.user.head_photo}} style={styles.headerLogo}/>
                        <View style={{marginLeft: 17}}>
                            <Text style={{color: 'white' ,marginTop: 12,fontSize: 17}}>{this.state.user.name}</Text>
                            <Text
                                style={{color: 'rgba(256,256,256,0.56)' ,marginTop: 8,fontSize: 11}}>{this.state.user.org_name}</Text>

                            <View style={{marginTop: 15,flexDirection:'row', flex: 1}}>
                                <View style={styles.numLayout}>
                                    <Text style={{color: 'white' ,fontSize: 11}}>{this.state.info.course_hour}</Text>
                                    <Text style={{color: 'rgba(256,256,256,0.56)' ,marginTop: 3,fontSize: 11}}>课时</Text>
                                </View>
                                <View style={styles.numLayout}>
                                    <Text style={{color: 'white' ,fontSize: 11}}>{this.state.info.credit}</Text>
                                    <Text style={{color: 'rgba(256,256,256,0.56)' ,marginTop: 3,fontSize: 11}}>学分</Text>
                                </View>
                                <View style={styles.numLayout}>
                                    <Text style={{color: 'white' ,fontSize: 11}}>{this.state.info.integral}</Text>
                                    <Text style={{color: 'rgba(256,256,256,0.56)' ,marginTop: 3,fontSize: 11}}>积分</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    _set() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({component: SetView});
        }
    }


    _mall() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({component: MineMallView});
        }
    }
}


const styles = StyleSheet.create({
    sceneStyle: {
        paddingBottom: 0
    },
    tabBarStyle: {
        height: 0,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
    },
    renderNavBar: {
        backgroundColor: '#47AD1D',

    },
    navBarView: {
        height: Platform.OS == 'ios' ? 150 : 160,
        marginTop: Platform.OS == 'ios' ? 20 : 0,
        width: width,
    },
    navBarSetLayout: {
        width: 50,
        height: 35,
        marginLeft: width - 50

    },
    navBarSet: {
        width: 23,
        height: 23,
        position: 'absolute',
        marginTop: 10,
        right: 15,
    },
    headerContent: {
        flexDirection: 'row',
        marginLeft: 12,
    },
    headerLogo: {
        width: 72,
        height: 72,
        marginTop: 16,
        borderRadius: 36,
    },
    numLayout: {
        width: (width - 90) * 0.3
    },

    tagImg: {
        width: 42,
        height: 42,
        marginTop: 8,
        alignSelf: 'center'
    },
    tagText: {
        color: 'rgba(0,0,0,0.75)',
        marginTop: 3,
        fontSize: 12,
        marginBottom: 10,
        alignSelf: 'center'
    },
    tagImgItem: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
        alignSelf: 'center'
    },
    arrowRight: {
        width: 33,
        height: 33,
        marginTop: 8,
        marginBottom: 8,
        alignSelf: 'center',
        right: 10,
        position: 'absolute',
    },
    tagItem: {
        color: 'rgba(0,0,0,0.75)',
        fontSize: 15,
        alignSelf: 'center'
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
        marginTop: 5,
    },
    gridDesc: {
        color: 'rgba(0,0,0,0.35)',
        fontSize: 12,
        marginTop: 10,
        marginBottom: 15,
        alignSelf: 'flex-start'
    },
});

export default MoneTab;
