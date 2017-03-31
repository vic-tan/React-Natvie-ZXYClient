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
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    Button,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
class CourseDetailsDowloadView extends Component {
    constructor(props) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(this.props.list),
            progress: 0,
            indeterminate: true,
        }
    }


    componentDidMount() {
        //this.animate();
    }

    animate() {
        let progress = 0;
        this.setState({progress: progress});
        setTimeout(
            () => {
                this.setState({indeterminate: false});
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({progress: progress});
            },
            1500
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                    <ComNavBar title='课程下载' navigator={this.props.navigator}/>
                    <ListView
                        removeClippedSubviews={false}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID, highlightRow) =>this.listCellRow(rowData, sectionID, rowID, highlightRow)}/>
                </View>
            </View>
        );
    }


    listCellRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <View style={styles.rowContainer}>
                    <View style={{margin: 10 ,width:width}}>
                        <Text style={styles.rowTitle} numberOfLines={1}>第{rowID + 1}章 {rowData.name}</Text>
                        {this._childListView(rowData)}
                    </View>
                </View>
                <Text
                    style={{marginTop: 5,marginLeft: 10,marginRight: 10,height:1,width:width,backgroundColor:'#F3F3F3'}}/>
            </View>

        );
    }

    _childListView(rowData) {
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if (null != rowData.itemlist) {
            return (
                <ListView
                    removeClippedSubviews={false}
                    dataSource={ds2.cloneWithRows(rowData.itemlist)}
                    renderRow={(rowData, sectionID, rowID, highlightRow) =>this.listCellRow2(rowData, sectionID, rowID, highlightRow)}/>
            );
        }
    }

    listCellRow2(rowData, sectionID, rowID, highlightRow) {
        return (
            <View >
                <View style={styles.rowContainer}>
                    <View style={{marginTop: 5,width:width,flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.rowDesc}
                              numberOfLines={1}>第{rowID + 1}节 {rowData.title}/5.0MB</Text>

                        <TouchableOpacity activeOpacity={0.5}
                                          onPress={this._download.bind(this)}>
                            <View style={styles.eixtBtn}>
                                <Text style={{color:'white',fontSize : 13}}>下载</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        );
    }

    _download() {
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

        progress: {
            marginRight: 20,
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
            width: width * 0.7,
            fontSize: 15,
            paddingTop: 5,
            paddingBottom: 0,
            marginRight: 10
        },
        eixtBtn: {
            height: 25,
            width: 60,
            backgroundColor: '#47AD1D',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginRight: 20,
            borderRadius: 5,
        },

    }
);

export default CourseDetailsDowloadView;
