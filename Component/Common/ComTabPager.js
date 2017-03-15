/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MineCollectCourse from '../Mine/MineCollectCourse';
import MineCollectViewKnowledge from '../Mine/MineCollectViewKnowledge';
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

class ComTabPager extends Component {


    constructor(props) {
        super(props);
        this.state = {
            initialPage: 0,
        }
        this.childTabPagerItem = this.childTabPagerItem.bind(this);
    }

    render() {
        console.log('----renderrenderrenderrender-----')
        return (
            <ScrollableTabView locked={true} initialPage={this.props.initialPage}
                               tabBarBackgroundColor='#FFFFFF'
                               tabBarActiveTextColor='#47AD1D'
                               tabBarInactiveTextColor='rgba(0,0,0,0.75)'
                               tabBarTextStyle={{fontSize: 12,marginTop:10}}
                               tabBarUnderlineStyle={{backgroundColor: '#47AD1D',height:2}}
                               scrollWithoutAnimation={true}>
                {this.childTabPagerItem()}
            </ScrollableTabView>
        )
    }

    childTabPagerItem() {
        return this.props.callbackTab;
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    }
);

export default ComTabPager;
