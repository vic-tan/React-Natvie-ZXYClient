/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import ComNavBar from '../Common/ComNavBar';
import UrlConstant from '../Constant/UrlConstant';
import ComListRefreshView from '../Common/ComListRefreshView';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    ActivityIndicator,
    ListView,
    Platform
} from 'react-native';

var {width, height} = Dimensions.get('window');
var ToastUtils = require('../Uitls/ToastUtils');
class MyMsgView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop: Platform.OS == 'ios' ? 68 : 48,flex: 1}}>
                    <ComListRefreshView url={UrlConstant.USER_MESSAGE_LIST}
                                        callbackParentRow={this.listCellRow.bind(this)}
                    />
                </View>
                <View style={{position: 'absolute',top:0 ,width:width}}>
                    <ComNavBar title='消息' navigator={this.props.navigator}/>
                </View>
            </View>
        );
    }

    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <Text style={{height:10}}/>
                <View style={styles.rowContainer}>
                    <Text style={styles.rowTitle} numberOfLines={1}>{rowData.title}</Text>
                    <Text style={styles.rowDesc} numberOfLines={2}>{rowData.content}</Text>
                    <View style={styles.timeView}>
                        <Text style={styles.rowTime} > </Text>
                        <Text style={styles.rowTime}>{rowData.send_time}</Text>
                    </View>
                </View>
                <Text style={{height:4}}/>
            </View>
        );
    }

    renderFooter() {
        return (
            <ComFooterRefreshView isFirstLoading={this.state.isFirstLoading} footerState={this.state.footerState}/>
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
            borderRadius: 5,
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

export default MyMsgView;
