/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Storage from 'react-native-storage';
import TLFGuideView from './TLFGuideView';
import TLFLoginView from './TLFLoginView';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Navigator,
    StatusBar,
    Dimensions,
    Text,
    AsyncStorage
} from 'react-native';

var {width, height} = Dimensions.get('window');
const totalCount = 1000;
var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})

global.storage = storage;

/* <Image source={require('ic_launcher')} style={styles.launchImageStyle}/>*/
class TLFLaunchView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                const {navigator} = this.props;
                // 读取
                storage.load({
                    key: 'fristLaunchState',
                }).then(ret => {
                    if (ret.islaunchstate == 'true') {
                        if (navigator) {
                            navigator.replace({component: TLFLoginView});
                        }
                    } else {
                        if (navigator) {
                            navigator.replace({component: TLFGuideView});
                        }
                    }
                }).catch(err => {
                    storage.save({
                        key: 'fristLaunchState',
                        rawData: {
                            islaunchstate: 'true',
                        },
                        expires: null
                    });
                    if (navigator) {
                        navigator.replace({component: TLFGuideView});
                    }
                })

            },
            totalCount
        );
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }




    render() {
        return (

            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image source={require('../../img/launch.png')} style={styles.launchImageStyle}></Image>

                {/*<Text style={styles.text}>IMG 下的图片</Text>
                 <Image source={require('../../img/img_one.jpg')} style={styles.test}></Image>
                 <Image source={require('../../img/img_two.png')} style={styles.test}></Image>

                 <Text style={styles.text}>IOS 或 Android原生 下的图片</Text>
                 <Image source={{uri: 'one'}} style={styles.test}></Image>
                 <Image source={{uri: 'two'}} style={styles.test}></Image>
                 */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {},
        launchImageStyle: {
            width: width,
            height: height,
            resizeMode: 'stretch'
        },
        text: {
            marginTop: 80,
            marginBottom: 10
        },

        test: {
            width: 40,
            height: 40,
            marginBottom: 10
        }
    }
);

export default TLFLaunchView;
