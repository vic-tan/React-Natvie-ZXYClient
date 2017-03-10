/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Dimensions,
    ActivityIndicator,
    Platform
} from 'react-native';
import {PullList} from 'react-native-pull';
var RefreshViewUitls = require("../Uitls/RefreshViewUitls");
var {width, height} = Dimensions.get('window');
class ComListRefreshView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
    }

    render() {
        return (
            <PullList
                dataSource={this.state.list}
                renderRow={this.renderRow.bind(this)}
                onPullRelease={this.onPullRelease.bind(this)}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0}
                enableEmptySections={true}
                renderFooter={this.renderFooter.bind(this)}
            />
        )
    }

    onPullRelease(resolve) {
        this.request(RefreshViewUitls.refreshStatePull(), () => {
            resolve();
        })
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

module.exports = ComListRefreshView;