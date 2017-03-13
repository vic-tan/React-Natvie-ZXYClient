/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import ListDataErrorConstant from '../Constant/ListDataErrorConstant'
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');

class ComErrorView extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container} c>
                {this._render()}
            </View>
        )
    }

    reRefresh() {
        this.props.callbackParent();
    }

    _render() {
        if (!this.props.parentViewState) {
            return null;
        }

        switch (this.props.childViewState) {
            case ListDataErrorConstant.CHILD_VIEW_STATE_HIDE://什么都不显示
                return (
                    <View />
                );
                break;
            case ListDataErrorConstant.CHILD_VIEW_STATE_LOADING://表示正在加载
                return (
                    <View style={styles.containerLayout}>
                        <ActivityIndicator size='large' style={styles.dctivityIndicator}/>
                        <Text style={styles.loading}>正在加载中..</Text>
                    </View>
                );
                break;
            case ListDataErrorConstant.CHILD_VIEW_STATE_NO_DATA://暂无数据
                return (
                    <TouchableOpacity style={styles.containerLayout} onPress={this.reRefresh.bind(this)}>
                        <View style={styles.containerLayout} >
                            <Image source={require('../../img/com_prompt_no_data_icon.png')} style={styles.image}/>
                        </View>
                    </TouchableOpacity>
                );
                break;
            case ListDataErrorConstant.CHILD_VIEW_STATE_NET_WORK_ERROR://网络异常
                return (
                    <TouchableOpacity style={styles.containerLayout} onPress={this.reRefresh.bind(this)}>
                        <View style={styles.containerLayout} >
                            <Image source={require('../../img/com_prompt_dail_icon.png')} style={styles.image}/>
                        </View>
                    </TouchableOpacity>
                );
                break;
            case ListDataErrorConstant.CHILD_VIEW_STATE_LOADING_ERROR://4.加载失败重试
                return (
                    <TouchableOpacity style={styles.containerLayout} onPress={this.reRefresh.bind(this)}>
                        <View style={styles.containerLayout}>
                            <Image source={require('../../img/com_prompt_service_err_icon.png')} style={styles.image}/>
                        </View>
                    </TouchableOpacity>
                );
                break;
        }

    }


    static parentViewStateShow() {
        return ListDataErrorConstant.PARENT_VIEW_STATE_SHOW;
    }

    static parentViewStateHide() {
        return ListDataErrorConstant.PARENT_VIEW_STATE_HIDE;
    }

    static childViewStateHide() {//什么都不显示
        return ListDataErrorConstant.CHILD_VIEW_STATE_HIDE;
    }

    static childViewStateLoading() {//表示正在加载
        return ListDataErrorConstant.CHILD_VIEW_STATE_LOADING;
    }

    static childViewStateNoData() {//暂无数据
        return ListDataErrorConstant.CHILD_VIEW_STATE_NO_DATA;
    }

    static childViewStateNetWordError() {//网络异常
        return ListDataErrorConstant.CHILD_VIEW_STATE_NET_WORK_ERROR;
    }

    static childViewStateLoadingError() {//加载失败重试
        return ListDataErrorConstant.CHILD_VIEW_STATE_LOADING_ERROR;
    }

}

const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        containerLayout: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loading: {
            marginTop: 10,
            fontSize: 14,
            color: 'rgba(0,0,0,0.6)',
            alignSelf: 'center',
        },
        image: {
            width: 180,
            height: 150,
            alignSelf: 'center',
        },
    }
);

export default ComErrorView;
