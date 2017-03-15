/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var nav_back = require('../../img/live_default.png');
class ComImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: '',
            defaultSource: '',
            width: 0,
            height: 0,
            borderRadius: 0,
            resizeMode: 'center',
            loadStatus: true,
            succeedStatus: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderImage()}
            </View>
        );

    }


    renderImage() {
        console.log('----------->renderImage---' + this.props.loadStatus + '-----' + !this.props.succeedStatus)
        if (this.props.uri === '') {
            return ( <Image source={nav_back}
                            style={styles.image}/>)
        } else {
            if (this.props.loadStatus && !this.props.succeedStatus) {
                return ( <Image source={nav_back}
                                onLoadStart={()=>this._onLoadStart()}
                                onLoad={()=>this._onLoad()}
                                style={styles.image}/>)
            } else {
                return (<Image source={{uri:this.props.uri}}
                               style={styles.image}/>)
            }
        }
    }

    //加载开始时调用。
    _onLoadStart() {
        console.log('----------->_onLoadStart---')
        this.setState({
            loadStatus: true
        });
    }

    //加载成功完成时调用此回调函数
    _onLoad() {
        console.log('----------->_onLoad---')
        this.setState({
            succeedStatus: true
        });
    }
}

const styles = StyleSheet.create({
        image: {
            width: 120,
            height: 80,
            margin: 10,
            marginRight: 0
        },

    }
);

export default ComImage;