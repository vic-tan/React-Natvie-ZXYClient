/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Popover from 'react-native-popover';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    Platform
} from 'react-native';

var {width, height} = Dimensions.get('window');
var nav_search = require('../../img/nav_search.png');
var nav_add = require('../../img/nav_add.png');
var nav_back = require('../../img/nav_back.png');


class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '全部',
            isVisible: false,
            buttonRect: {},
            textInputValue:'',
        }
    }


    showPopover() {
        this.refs['selectType'].measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true,
                buttonRect: {x: px, y: py, width: width, height: height}
            });
        });
    }

    closePopover() {
        this.setState({isVisible: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                {this.renderNavBar()}
                <Popover
                    isVisible={this.state.isVisible}
                    fromRect={this.state.buttonRect}
                    placement="bottom"
                    onClose={this.closePopover.bind(this)}>
                    {this._selectType()}
                </Popover>
            </View>
        );
    }

    _setType(title) {
        this.setState({
            title: title,
        });
        this.closePopover();
    }

    _selectType() {
        return (
            <View>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'全部')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>全部</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'课程')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>课程</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'活动')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>活动</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'问题')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>问题</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'话题')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>话题</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'专家')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>专家</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'知识')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>知识</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'新闻')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>新闻</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'路径')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>路径</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.selectTypeItemLine}/>
                <TouchableOpacity activeOpacity={0.2} onPress={this._setType.bind(this,'专题')}>
                    <View style={{backgroundColor: '#ffffff'}}>
                        <Text style={styles.selectTypeItme}>专题</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


    renderNavBar() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._back.bind(this)}>
                        <View style={{height: 48,width: 30}}>
                            <Image source={nav_back} style={styles.navBarBack}/>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <TextInput ref="searchContent" style={styles.navBarTextInput} placeholder='搜一搜'
                                   clearButtonMode='while-editing'
                                   placeholderTextColor="rgba(0,0,0,0.56)"
                                   value={this.state.textInputValue}
                                   onChangeText={(textInputValue)=>this.setState({textInputValue})}
                        />
                        <View ref='selectType' style={styles.searchView}>
                            <TouchableOpacity activeOpacity={0.5}
                                              onPress={this.showPopover.bind(this)}>
                                <Text style={styles.search}>{this.state.title}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._search.bind(this)}>
                        <Image source={nav_search} style={styles.navBarAdd}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    _search(){
        alert("搜索"+this.state.textInputValue);
    }
    _back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        renderNavBar: {
            backgroundColor: '#47AD1D',

        },
        navBarBack: {
            width: 30,
            height: 45,
            marginLeft: 5,
            paddingTop: 10,
            paddingLeft: 10,
        },
        navBarView: {
            height: 48,
            marginTop: Platform.OS === 'ios' ? 20 : 0,
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
        },
        button: {
            borderRadius: 4,
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: '#ccc',
            borderColor: '#333',
            borderWidth: 1,
        },
        navBartext: {
            marginLeft: 10,
            fontSize: 17,
            color: 'white'
        },
        navBarTextInput: {
            alignSelf: 'center',
            width: width * 0.76,
            marginLeft: 10,
            height: 37,
            fontSize: 14,
            paddingLeft: 38,
            backgroundColor: '#ffffff',
            borderRadius: 5,
        },
        search: {
            backgroundColor: '#ffffff',
            width: 30,
            fontSize: 14,
            color: '#000000',
        },
        selectTypeItme: {
            fontSize: 14,
            paddingLeft: 23,
            paddingRight: 23,
            paddingTop: 10,
            paddingBottom: 10,
        },
        selectTypeItemLine: {
            height: 1,
            backgroundColor: 'rgba(0,0,0,0.3)'
        },

        searchView: {
            backgroundColor: '#ffffff',
            width: 30,
            position: 'absolute',
            marginTop: 11,
            marginLeft: 15,
            paddingBottom: 10,
        },
        navBarAdd: {
            paddingLeft: 10,
            paddingRight: 8,
            width: 32,
            height: 32,
        },


    }
);

export default SearchView;
