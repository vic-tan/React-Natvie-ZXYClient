/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var ComNavBar = require("../Common/ComNavBar");
var ComListRefreshView = require("../Common/ComListRefreshView");
class MineDownloadView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <ComNavBar title='我的离线' navigator={this.props.navigator}/>
                <ComListRefreshView url='user/messageList'
                                    callbackParentRow={this.listCellRow.bind(this)}
                                    navigator={this.props.navigator}/>
            </View>
        );
    }

    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <Text style={{height:10}}/>
                <View style={styles.rowContainer}>
                    <Text style={styles.rowTitle}>{rowData.title}</Text>
                    <Text style={styles.rowDesc}>{rowData.content}</Text>
                    <View style={styles.timeView}>
                        <Text style={styles.rowTime}> </Text>
                        <Text style={styles.rowTime}>{rowData.send_time}</Text>
                    </View>
                </View>
                <Text style={{height:4}}/>
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
            width: width * 0.95,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 10,
            alignSelf: 'center',
        },

        rowTitle: {
            width: width * 0.9,
            color: "#C62433",
            fontSize: 15,
            fontWeight: 'bold',
            padding: 9,
            paddingBottom: 0,
        },
        rowDesc: {
            width: width * 0.95,
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            padding: 9,
            paddingTop: 5,
            paddingBottom: 0,
        },
        timeView: {
            width: width * 0.9,
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        rowTime: {
            color: "rgba(0,0,0,0.5)",
            alignSelf: 'flex-end',
            justifyContent: 'flex-end',
            fontSize: 13,
            padding: 9,
            paddingTop: 5,
            paddingBottom: 5,
        },


    }
);


module.exports = MineDownloadView;
