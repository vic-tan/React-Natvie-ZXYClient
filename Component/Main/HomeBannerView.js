/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Dimensions,
    Platform,
    Text
} from 'react-native';
var {width, height} = Dimensions.get('window');
class HomeBannerView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerList: [],
        };
    }


    render() {
        return (
            <View style={styles.containerPage}>
                <Swiper style={styles.wrapper} height={Platform.OS == 'ios' ? 180 : 210}
                        horizontal={true} autoplay
                        activeDot={this._activieDot()}
                        dot={this._dot()}
                        paginationStyle={{
                                    bottom: 9
                                 }}>
                    {this.renderAllImage()}
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

    // 返回所有的图片
    renderAllImage() {
        // 数组
        var allImage = [];
        // 遍历
        for (var i = 0; i < this.props.bannerList.length; i++) {
            // 取出单独的每一个对象
            var imgItem = this.props.bannerList[i];
            // 创建组件装入数组
            allImage.push(
                <Image key={i}
                       source={{uri:imgItem.image}}
                       style={styles.slide}/>
            );
        }
        // 返回数组
        return allImage;
    }

}

const styles = StyleSheet.create({
    containerPage: {
        width: width,
    },
    slide: {
        width: width,
        height: Platform.OS == 'ios' ? 180 : 210,
        justifyContent: 'center',
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
        backgroundColor: '#47AD1D',
        width: 6,
        height: 6,
        marginLeft: 3,
        marginRight: 3,
        borderRadius: 3,
    }

});
export default HomeBannerView;
