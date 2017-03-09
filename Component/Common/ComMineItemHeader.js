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
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var MineDownloadView = require("../Mine/MineDownloadView");
var MineMsgView = require("../Mine/MineMsgView");
var MineCollectView = require("../Mine/MineCollectView");
class ComMineItemHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            icon: '',
            index: -1
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBarView}>
                    <TouchableHighlight onPress={this._onPress.bind(this)}>
                        <View style={{backgroundColor: 'white' }}>
                            <Image source={this.props.icon} style={styles.tagImg}/>
                            <Text style={styles.tagText}>{this.props.title}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    _onPress() {
        const {navigator} = this.props;
        if (navigator) {
            switch (this.props.index) {
                case 0://我的收藏
                    navigator.push({component: MineCollectView});
                    break;
                case 1://我的离线
                    navigator.push({component: MineDownloadView});
                    break;
                case 2://我的消息
                    navigator.push({component: MineMsgView});
                    break;
            }
        }
    }
}


const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
        },
        navBarView: {
            backgroundColor:'white',
            width:width*0.33333,
        },
        tagImg: {
            width: 42,
            height: 42,
            marginTop: 8,
            alignSelf: 'center'
        },
        tagText: {
            color: 'rgba(0,0,0,0.75)',
            marginTop: 3,
            fontSize: 12,
            marginBottom: 10,
            alignSelf: 'center'
        },
    }
);

module.exports = ComMineItemHeader;