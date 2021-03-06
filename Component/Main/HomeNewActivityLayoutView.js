/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import UrlConstant from '../Constant/UrlConstant';
import HomeBaseOptionalLayoutView from './HomeBaseOptionalLayoutView.js';
import ComImage from '../Common/ComImage';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');


class HomeLiveLayoutView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bean: '',
            sid: '',
        };
    }


    render() {
        return (
            <HomeBaseOptionalLayoutView sid={this.props.sid}
                                        callbackParentOptionalRow={this.callbackParentOptionalRow.bind(this)}
                                        callbackMore={this.clickMore.bind(this)}
                                        bean={this.props.bean}
                                        url={UrlConstant.SYS_FIND_INDEX_RECOMMEND_HOT_ACTIVITY_LIST}
            />
        );
    }


    callbackParentOptionalRow(rowData, rowID) {
        return (
            <TouchableOpacity key={rowID} activeOpacity={0.8}>
                <View style={styles.itemViewStyle}>
                    <ComImage  uri={rowData.image_path}  width={120} height={80}/>
                    <Text style={styles.shopNameStyle} numberOfLines={1}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    clickMore(bean) {
        alert(bean.region_name+"的查看更多");
    }
}


const styles = StyleSheet.create({
        container: {
            width: width,
        },

        scrollViewStyle: {
            flexDirection: 'row',
            backgroundColor: 'white',
            width: width,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 5,

        },

        itemViewStyle: {
            margin: 5,
        },

        shopSaleStyle: {
            // 绝对定位
            position: 'absolute',
            left: 0,
            bottom: 30,
            backgroundColor: 'red',
            color: 'white',
            padding: 2
        },

        shopNameStyle: {
            width: 130,
            marginTop: 5
        }
    }
);

export default HomeLiveLayoutView;