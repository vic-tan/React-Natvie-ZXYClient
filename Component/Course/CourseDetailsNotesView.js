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
class CourseDetailsNotesView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop: 55,flex: 1}}>
                    <ComListRefreshView url={UrlConstant.COURSE_HOTEST_LIST}
                                        callbackParentRow={this.listCellRow.bind(this)}
                    />
                </View>
                <View style={{position: 'absolute',top:0 ,width:width}}>
                    <TouchableOpacity activeOpacity={1}
                                      onPress={this._add.bind(this)}>
                        <View style={styles.addBtn}>
                            <Text style={{color:'gray',fontSize : 15}}>添加笔记</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


    _add() {
        alert("添加笔记");

    }

    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <TouchableOpacity onPress={this._details.bind(this)}>
                    <View >
                        <View style={styles.rowContainer}>
                            <ComImage uri={rowData.cover} width={120} height={80}/>
                            <View style={{margin: 10 ,width:width -130}}>
                                <Text style={styles.rowTitle} numberOfLines={1}>{rowData.name}</Text>
                                <Text style={styles.rowDesc} numberOfLines={2}>{rowData.description}</Text>
                            </View>
                            <Text style={{height:1}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }

    _details() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({component: CourseDetails});
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

export default CourseDetailsNotesView;
