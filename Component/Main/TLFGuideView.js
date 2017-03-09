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
    View,
    TouchableOpacity,
    Easing,
    StatusBar,
    Animated,
    Text
} from 'react-native';
import Swiper from 'react-native-swiper';
var TLFLoginView = require("./TLFLoginView");
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


class TLFGuideView extends Component {

    constructor(props) {
        super(props);
    }

    _onPress() {
        storage.save({//保存不是第一次打开应用
            key: 'fristLaunchState',
            rawData: {
                islaunchstate: 'true',
            },
            expires: null
        });
        const {navigator} = this.props;
        if (navigator) {
            navigator.replace({component: TLFLoginView});
        }
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true}/>
                <Swiper style={styles.wrapper} showsPagination={false} loop={false}>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../img/main_guide_view_one.png')}
                            style={styles.page}/>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../img/main_guide_view_two.png')}
                            style={styles.page}/>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../img/main_guide_view_three.png')}
                            style={styles.page}/>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../img/main_guide_view_four.png')}
                            style={styles.page}/>

                        <TouchableOpacity activeOpacity={0.5}
                                          onPress={this._onPress.bind(this)}
                                          style={styles.buttoTouchableHighlightnStyle}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>立即体验</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </Swiper>
            </View>

        );

    }
}

const
    styles = StyleSheet.create({
            wrapper: {},
            page: {
                width: width,
                height: height,
            },
            buttonStyle: {
                width: width * 0.3,
                height: 30,
                backgroundColor: '#ffffff',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
            },
            buttonTextStyle: {
                color: '#288AC9',
                fontSize: 16,
            },
            buttoTouchableHighlightnStyle: {
                width: width * 0.3,
                height: 30,
                marginLeft: width * 0.35,
                bottom: 25,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
            },
            slide: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },

        }
    );

module
    .exports = TLFGuideView;
