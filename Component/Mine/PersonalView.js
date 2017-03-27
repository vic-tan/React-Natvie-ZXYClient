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
import BusyIndicator from 'react-native-busy-indicator';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import HttpUitls  from '../Uitls/HttpUitls';
import  ImagePicker from 'react-native-image-picker'; //第三方相机
import {
    AppRegistry,
    StyleSheet,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Dimensions,
    Text
} from 'react-native';
var {width, height} = Dimensions.get('window');
var ToastUtils = require('../Uitls/ToastUtils');
var mine_icon_mall = require('../../img/mine_icon_mall.png');
var mine_arrow_right = require('../../img/mine_arrow_right.png');

var photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    },
}

class PersonalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            sid:'',
            head_photo: '',
        }
    }


    componentDidMount() {
        this._loadData();

    }

    _loadData() {
        storage.load({
            key: 'user',
        }).then(ret => {
            this.setState({
                user: ret.user,
                head_photo: ret.head_photo,
                sid: ret.sid,
            });
        }).catch(err => {

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                <ComNavBar title='个人资料' navigator={this.props.navigator}/>
                <View style={styles.content}>
                    <TouchableHighlight onPress={this._cameraAction.bind(this)} style={{width: width, height: 100}}>
                        <View
                            style={{width:width,flexDirection:'row',alignItems: 'center'}}>
                            <View style={{width: width, height: 100 ,backgroundColor: 'white' ,flexDirection: 'row' }}>
                                <Text style={styles.tagItem}>个人头像 </Text>
                                <Image source={{uri:this.state.head_photo}} style={styles.headerLogo}/>
                                <Image source={mine_arrow_right} style={styles.arrowRight}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View >
                <BusyIndicator />
            </View>
        );
    }

    _cameraAction() {
        console.log('response');
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('response' + response);
            if (response.didCancel) {
                return;
            }else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this._update(response.uri);

            }
        })
    }

    _update(file) {
        loaderHandler.showLoader('上传中...');
        let map = new Map();
        let imgArr = new Map()
        map.set('sid', this.state.sid);
        imgArr.set('head_photo', file);
        HttpUitls.updateImage(UrlConstant.USER_UPLOAD_HEAD_PHOTO, map,imgArr, (set,file) => this._callback(set,file))
    }

    _callback(set,file) {
        loaderHandler.hideLoader();
        if (set != null) {
            if (set.code == '0000') {
                this.setState({
                    head_photo: file.get('head_photo'),
                });
                storage.save({
                    key: 'user',
                    rawData: {
                        head_photo: file.get('head_photo'),
                    },
                    expires: null
                });
            } else {
                ToastUtils.toastShort(set.msg);
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    content: {
        width: width,
        marginTop: 10,
        marginBottom: 10
    },
    headerLogo: {
        width: 72,
        height: 72,
        marginTop: 16,
        borderRadius: 36,
    },
    tagItem: {
        color: 'rgba(0,0,0,0.75)',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center'
    },
    tagImgItem: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
        alignSelf: 'center'
    },
    arrowRight: {
        width: 33,
        height: 33,
        marginTop: 30,
        marginBottom: 8,
        alignSelf: 'center',
        right: 10,
        position: 'absolute',
    },

});

export default PersonalView;
