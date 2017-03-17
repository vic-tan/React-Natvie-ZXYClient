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
import ComNavBar from '../Common/ComNavBar';
import ComListRefreshView from '../Common/ComListRefreshView';
import ComImage from '../Common/ComImage';
var defaultImg = require('../../img/live_default.png');
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
class PathView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop: Platform.OS == 'ios' ? 68 : 48,flex: 1}}>
                    <ComListRefreshView url={UrlConstant.PATH_LIST}
                                        callbackParentRow={this.listCellRow.bind(this)}
                    />
                </View>
                <View style={{position: 'absolute',top:0 ,width:width}}>
                    <ComNavBar title='路径' navigator={this.props.navigator}/>
                </View>
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
                        <Text style={styles.rowDesc} numberOfLines={2}>{rowData.description}</Text>
                        <Text style={styles.rowDesc} numberOfLines={1}>开始时间: {rowData.publish_time}</Text>
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
            marginRight:10,
        },
        rowDesc: {
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            paddingTop: 15,
            marginRight:10,
            paddingBottom: 0,
        },
    }
);

export default PathView;
