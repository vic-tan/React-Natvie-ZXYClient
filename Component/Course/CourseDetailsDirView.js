/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
class CourseDetailsDirView extends Component {
    constructor(props) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state = {
            list: [],
            dataSource: ds.cloneWithRows(this.props.list),
        }


        this.map = new Map();
        this.map.set('course_id', this.props.course_id);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID, highlightRow) =>this.listCellRow(rowData, sectionID, rowID, highlightRow)}/>
                </View>
            </View>
        );
    }


    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <TouchableOpacity onPress={this._details.bind(this)}>
                    <View >
                        <View style={styles.rowContainer}>
                            <View style={{margin: 10 ,width:width}}>
                                <Text style={styles.rowTitle}>第{rowID + 1}章 {rowData.name}</Text>
                                {this._childListView(rowData)}
                            </View>
                        </View>
                        <Text style={{marginTop: 5,marginLeft: 10,marginRight: 10,height:1,width:width,backgroundColor:'#F3F3F3'}}/>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }

    _childListView(rowData){
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if(null!=rowData.itemlist && rowData.itemlist.length>1){
            return (
                <ListView
                    dataSource={ds2.cloneWithRows(rowData.itemlist)}
                    renderRow={(rowData, sectionID, rowID, highlightRow) =>this.listCellRow2(rowData, sectionID, rowID, highlightRow)}/>
            );
        }
    }

    listCellRow2(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <TouchableOpacity onPress={this._details.bind(this)}>
                    <View >
                        <View style={styles.rowContainer}>
                            <View style={{margin: 10 ,marginLeft: 30,width:width}}>
                                <Text style={styles.rowDesc}>第{rowID + 1}节 {rowData.title}</Text>
                            </View>
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

    }
);

export default CourseDetailsDirView;
