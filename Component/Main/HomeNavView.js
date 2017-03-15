/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import HomeNavListView from './HomeNavListView.js';
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
class HomeNavView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [],
            activePage: 0,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd = {this.onScrollAnimationEnd.bind(this)}>
                    {this.renderScrollItem()}
                </ScrollView>
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }

    onScrollAnimationEnd(e){
        // 求出当前的页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        // 更新状态机
        this.setState({
            activePage: currentPage,
        });
    }

    // 返回所有的图片
    renderScrollItem() {
        console.log('---->render' + this.props.navList.length);
        // 数组
        var scrollItemArr = [];
        // alert(this.props.navList.length)
        for (var i = 0; i < Math.abs(this.props.navList.length/8); i++) {
            // 取出单独的每一个对象
            // var imgItem = this.banner_list[i];
            // 创建组件装入数组
            scrollItemArr.push(
                <HomeNavListView key={i}  dataArr={this.props.navList}/>
            );
        }
        // 返回数组
        return scrollItemArr;
    }

    renderIndicator() {
        var indicatorArr = [], style;
        // alert(this.props.navList.length)
        for (var i = 0; i < Math.abs(this.props.navList.length/8); i++) {
            // 取出单独的每一个对象
            // var imgItem = this.banner_list[i];
            // 创建组件装入数组
            style = ( i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 20},style]}>&bull;</Text>
            );
        }
        // 返回数组
        return indicatorArr;
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
        indicatorViewStyle: {
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }

    }
);

export default HomeNavView;