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
class ExamEndView extends Component {
    constructor(props) {
        super(props);
        this.state={
            tab:0,
        }
        this.map = new Map();
        this.map.set('isFinished',1);
    }


    render() {
        return (
            <View style={styles.container}>
                <ComListRefreshView url={this.state.tab ==0 ? UrlConstant.EXAM_PUBLIC_LIST : UrlConstant.EXAM_SIMULATE_LIST}
                                    callbackParentRow={this.listCellRow.bind(this)}
                                    map={this.map}
                />
            </View>
        );
    }

    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <View style={styles.rowContainer}>
                    <ComImage uri={rowData.cover}  width={120} height={80}/>
                    <View style={{margin: 10 ,width:width -130}} >
                        <Text style={styles.rowTitle} numberOfLines={1}>{rowData.name}</Text>
                        <Text style={styles.rowDesc} numberOfLines={1}>始: {rowData.begin_time}</Text>
                        <Text style={styles.rowDesc} numberOfLines={1}>终: {rowData.end_time}</Text>
                        <Text style={styles.rowDesc} numberOfLines={1}>考试时长: {rowData.test_time}</Text>
                    </View>
                </View>
                <Text style={{height:1}}/>
            </View>
        );
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
            marginRight:10
        },
        rowDesc: {
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            paddingTop: 5,
            paddingBottom: 0,
            marginRight:10
        },
    }
);

export default ExamEndView;
