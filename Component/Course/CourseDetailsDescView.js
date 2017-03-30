/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import UrlConstant from '../Constant/UrlConstant';
import HttpUitls  from '../Uitls/HttpUitls';
import ComErrorView from '../Common/ComErrorView';
import RefreshViewUitls from '../Uitls/RefreshViewUitls';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
class CourseDetailsDescView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course_id: '',
            isFirstLoading: RefreshViewUitls.footerStateIsfirstLoading(),//true ,第一次加载，false,加载更多
            parentViewState: ComErrorView.parentViewStateShow(),
            childViewState: ComErrorView.childViewStateLoading(),
            data:[],
        }
    }


    render() {
        return (
            <View style={styles.container}>
                {this.showView()}
            </View>
        );
    }

    againRefresh() {
        this.onStartRequest();
    }

    onStartRequest() {
        this.request((set) => {
            if (set == null) {
                this.setPrompt(ComErrorView.parentViewStateShow(), ComErrorView.childViewStateNetWordError());
            } else if (set.code !== '0000') {
                this.setPrompt(ComErrorView.parentViewStateShow(), ComErrorView.childViewStateLoadingError());
            } else if (null==set.data) {
                this.setPrompt(ComErrorView.parentViewStateShow(), ComErrorView.childViewStateNoData());
            } else {
                this.setState({
                    data: set.data,
                });
                this.setPrompt(ComErrorView.parentViewStateHide(), ComErrorView.childViewStateHide());
            }
        })
    }

    componentDidMount() {
        this.onStartRequest();
    }

    /**
     * @param isPullRelease  0.表示默认第一次加载 1、为下拉，2、 加载更多
     * @param callback
     */
    request(callback) {
        let map = new Map()
        map.set('course_id', this.props.course_id);
        storage.load({
            key: 'user',
        }).then(ret => {
            map.set('sid',ret.sid+'');
        }).catch(err => {

        });
        HttpUitls.postFrom(UrlConstant.COURSE_COURSE_BRIEF, map, callback)
    }


    setPrompt(parentViewState, childViewState) {
        this.setState({
            parentViewState: parentViewState,
            childViewState: childViewState,
        });
    }

    showView() {
        if (this.state.parentViewState) {
            return (
                <ComErrorView parentViewState={this.state.parentViewState}
                              childViewState={this.state.childViewState}
                              callbackParent={this.againRefresh.bind(this)}/>)
        } else {
            return (
                <View style={{width:width,marginTop: 10,marginLeft: 10,marginRight: 10}}>
                    <Text style={styles.rowTitle}>{this.state.data.course_name}</Text>
                    <View style={{width:width,marginRight: 10,marginTop: 10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>课时:{this.state.data.course_hour}</Text>
                        <Text>学分:{this.state.data.credit}</Text>
                        <Text style={{marginRight: 30}}>学习人数:{this.state.data.study_person_num}</Text>
                    </View>
                    <Text style={styles.rowDesc}>目录:{this.state.data.category_name}</Text>
                    <Text style={styles.rowDesc}>完成规则:{this.state.data.finish_rule}</Text>
                    <Text style={styles.rowDesc}>发布人:{this.state.data.release_user_name}</Text>
                </View>
            )
        }

    }


}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
        },

        rowContainer: {
            width: width,
            flexDirection: 'row',
            backgroundColor: '#ffffff',
        },

        image: {
            width: 120,
            height: 80,
            margin: 10,
            marginRight: 0
        },

        rowTitle: {
            color: "#000000",
            fontSize: 15,
            marginRight: 10
        },
        rowDesc: {
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            paddingTop: 5,
            paddingBottom: 0,
            marginRight: 10
        },
        addBtn: {
            height: 40,
            width: width * 0.96,
            backgroundColor: '#B5B5B5',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 12,
            borderRadius: 2,
        },
    }
);

export default CourseDetailsDescView;
