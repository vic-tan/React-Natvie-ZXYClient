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
import ComListRefreshView from '../Common/ComListRefreshView';
import ComImage from '../Common/ComImage';
import CourseDetails from './CourseDetails';
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import HttpUitls  from '../Uitls/HttpUitls';
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
var ToastUtils = require('../Uitls/ToastUtils');
class CouresNewView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rule_id: '',
        }
        let map = new Map();
        map.set('rule_id', this.props.rule_id);
    }


    render() {
        return (
            <View style={styles.container}>
                <ComListRefreshView url={UrlConstant.COURSE_NEWES_LIST}
                                    callbackParentRow={this.listCellRow.bind(this)}
                                    map={this.map}
                />
                <BusyIndicator />
            </View>
        );
    }

    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <TouchableOpacity onPress={this._details.bind(this,rowData)}>
                    <View >
                        <View style={styles.rowContainer}>
                            <ComImage uri={rowData.cover} width={120} height={80}/>
                            <View style={{margin: 10 ,width:width -130}}>
                                <Text style={styles.rowTitle} numberOfLines={1}>{rowData.name}</Text>
                                <Text style={styles.rowDesc} numberOfLines={2}>{rowData.description}</Text>
                            </View>
                        </View>
                        <Text
                            style={{height:1.5,width:width,backgroundColor:'#F3F3F3'}}/>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }


    _details(rowData) {
        loaderHandler.showLoader('加载中...');
        let map = new Map();
        map.set('course_id', rowData.id + '');
        storage.load({
            key: 'user',
        }).then(ret => {
            map.set('sid', ret.sid + '');
        }).catch(err => {

        });
        HttpUitls.postFrom(UrlConstant.COURSE_SCORM_CATEGORY_LIST, map, (set) => this._callback(set))
    }

    _callback(set) {
        loaderHandler.hideLoader();
        if (set != null) {
            if (set.code == '0000') {

                const {navigator} = this.props;
                if (navigator) {
                    navigator.push({
                        component: CourseDetails,
                        params: {
                            parentData: set.data,
                        }
                    });
                }
            } else {
                ToastUtils.toastShort(set.msg);
            }
        }
    }

}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3F3',
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
    }
);

export default CouresNewView;
