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
class MineCollectViewKnowledge extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <ComListRefreshView url={UrlConstant.USER_MY_DOC_FAVORITE}
                                    callbackParentRow={this.listCellRow.bind(this)}
                                    navigator={this.props.navigator}/>
            </View>
        );
    }

    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <View style={styles.rowContainer}>
                    <Image style={styles.image} source={{uri:rowData.cover}}></Image>
                    <View style={{margin: 10}}>
                        <Text style={styles.rowTitle}>{rowData.name}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.rowDesc}>课时:  {rowData.course_hour}</Text>
                            <Text style={styles.rowDesc}>       学分:  {rowData.credit}</Text>
                        </View>
                        <Text style={styles.rowDesc}>来源:{rowData.type==='1' ? '自主注册' : '转发'}</Text>
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

        image:{
            width:120,
            height:80,
            margin:10,
            marginRight:0
        },

        rowTitle: {
            color: "#000000",
            fontSize: 15,
        },
        rowDesc: {
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            paddingTop: 15,
            paddingBottom: 0,
        },
    }
);

export default MineCollectViewKnowledge;
