/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import HomeNavListView from './HomeNavListView.js';
import Swiper from 'react-native-swiper';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
var nav_back = require('../../img/nav_back.png');


const pageSize = 8;
class HomeNavView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [],
            activePage: 0,
        };
    }

    render() {
        let swiperHeight = this.props.navList.length > 4 ? 200 : 100;
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} height={swiperHeight}
                        loop={false} horizontal={true} autoplay={false}
                        activeDot={this._activieDot()}
                        dot={this._dot()}
                        paginationStyle={{
                          bottom: 7
                        }}>
                    {this.renderScrollItem()}
                </Swiper>
            </View>
        );
    }

    _dot() {
        return (<View
            style={styles._dot}/>);
    }

    _activieDot() {
        return (<View
            style={styles._activieDot}/>);
    }

    childSetChangeTab(selectedTab) {
        return this.props.childSetChangeTab(selectedTab);
    }

    // 返回所有的图片
    renderScrollItem() {
        // 数组
        var scrollItemArr = [];
        // alert(this.props.navList.length)
        var pageCount = Math.ceil(this.props.navList.length / pageSize);
        var totalCount = this.props.navList.length;
        var lastCount = totalCount % pageSize;
        var temp = [];
        for (var i = 0; i < pageCount; i++) {
            var tabcout = (i === pageCount - 1) ? ((i * pageSize) + lastCount ) : ((i + 1) * pageSize);
            for (var j = i * pageSize; j < tabcout; j++) {
                temp.push(this.props.navList[j]);
            }
            scrollItemArr.push(
                <HomeNavListView key={i} dataArr={temp} navigator={this.props.navigator}
                                 childSetChangeTab={(selectedTab)=>this.childSetChangeTab(selectedTab)}/>
            );
            temp = [];
        }
        // 返回数组
        return scrollItemArr;
    }
}

const styles = StyleSheet.create({
        container: {
            backgroundColor: '#ffffff',
            width: width,
        },

        pageItemContainer: {
            width: width,
            alignItems: 'center',
        },
        _dot: {
            backgroundColor: '#CCCCCC',
            width: 6,
            height: 6,
            marginLeft: 3,
            marginRight: 3,
            borderRadius: 3,
        },
        _activieDot: {
            backgroundColor: '#808080',
            width: 6,
            height: 6,
            marginLeft: 3,
            marginRight: 3,
            borderRadius: 3,
        }
    }
);

export default HomeNavView;