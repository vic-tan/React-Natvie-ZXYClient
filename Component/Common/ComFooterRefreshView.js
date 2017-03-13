/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import ListRefreshStateConstant from '../Constant/ListRefreshStateConstant'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
class ComFooterRefreshView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstLoading: '',
            footerState: '',//0:表示无， 1加载中 2,已没有更多了
        };
    }

    render() {
        return (
            <View style={styles.container} c>
                {this._render()}
            </View>
        )
    }

    _render() {
        if (this.props.isFirstLoading && this.props.footerState === 0) {
            return null;
        }
        switch (this.props.footerState) {
            case ListRefreshStateConstant.REFRESH_FOOTER_STATE_LOADING://显示加载中
                return (
                    <View style={styles.containerload}>
                        <ActivityIndicator size='small' style={styles.dctivityIndicator}/>
                        <Text style={styles.loading}>加载中...</Text>
                    </View>
                );
                break;
            case ListRefreshStateConstant.REFRESH_FOOTER_STATE_NO_DATA://显示完成
                return (
                    <View style={styles.containerLayout}>
                        <View style={styles.containerload}>
                            <Text style={styles.loading}>——我是有底线的——</Text>
                        </View>
                    </View>
                );
                break;
            case ListRefreshStateConstant.REFRESH_FOOTER_STATE_ERROR://加载失败了
                return (
                    <View style={styles.containerLayout}>
                        <View style={styles.containerload}>
                            <Text style={styles.loading}>加载数据失败,请重试</Text>
                        </View>
                    </View>
                );
                break;
        }
    }


}

const styles = StyleSheet.create({
        container: {
            width: width,
        },
        containerload: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            paddingBottom: 10,
            paddingTop: 5,
            flexDirection: 'row',
            width: width,

        },

        dctivityIndicator: {
            marginRight: 10,
            alignSelf: 'center',

        },
        loading: {
            fontSize: 13,
            color: 'rgba(0,0,0,0.5)',
            alignSelf: 'center',
        },
    }
);

export default ComFooterRefreshView;