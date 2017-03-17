/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import HomeCommonCellTopView from './HomeCommonCellTopView.js';
import HttpUitls from '../Uitls/HttpUitls';
import UrlConstant from '../Constant/UrlConstant';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    ListView,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');


class HomeBaseOptionalLayoutView extends Component {
    constructor(props) {
        super(props);
        this.list = [];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.list),
            bean: '',
            sid: '',
            url: '',
        };
    }

    componentDidMount() {
        this.request(this.props.sid, () => {
        });
    }


    request(sid, callback) {
        let map = new Map()
        map.set('sid', sid);
        HttpUitls.postFrom(this.props.url, map, (set) => this._callback(set, callback))
    }

    _callback(set, callback) {
        if (set != null) {
            if (set.code == '0000') {
                this.list = [];
                for (var i = 0; i < set.data.length; i++) {
                    this.list.push(set.data[i]);
                }
                this.setState({
                    list: this.state.list.cloneWithRows(this.list),
                });
            } else {

            }
        }
        callback();
    }

    render() {
        return (
            <View style={styles.container}>
                {this.showView()}
            </View>
        );
    }


    showView() {
        if (this.list.length > 0) {
            return (<View style={styles.container}>
                    <HomeCommonCellTopView style={{marginTop: 10}}
                                           rightTitle="查看更多"
                                           bean={this.props.bean}
                                           callbackMore={this.childMore.bind(this)}/>
                    <ScrollView style={styles.scrollViewStyle}
                                horizontal={true} // 横向
                                showsHorizontalScrollIndicator={false}
                    >
                        {this.renderScrollItem()}
                    </ScrollView>
                </View>
            )
        } else {
            return null;
        }
    }

    // 返回所有的图片
    renderScrollItem() {
        var scrollItemArr = [];
        // 数组
        for (var i = 0; i < this.list.length; i++) {
            var data = this.list[i];
            scrollItemArr.push(
                this.childRow(data, i)
            );
        }
        // 返回数组
        return scrollItemArr;
    }

    childRow(rowData, rowID) {
        return this.props.callbackParentOptionalRow(rowData, rowID);
    }

    childMore(bean) {
        return this.props.callbackMore(bean);
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
    }
);

export default HomeBaseOptionalLayoutView;