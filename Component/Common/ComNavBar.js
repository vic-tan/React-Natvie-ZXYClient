/**
 * Created by tanlifei on 2017/3/3.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
var nav_back = require('../../img/nav_back.png');
class ComNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor='#47AD1D'/>
                {this.renderNavBar()}
            </View>
        );
    }
    renderNavBar() {
        return (
            <View style={styles.renderNavBar}>
                <View style={styles.navBarView}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._back.bind(this)}>

                        <Image source={nav_back} style={styles.navBarBack}/>
                    </TouchableOpacity>
                    <View style={styles.navBartextLoyout}>
                        <Text style={styles.navBartext}>{this.props.title}</Text>
                    </View>
                </View>

            </View>
        );
    }

    _back() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        renderNavBar: {
            backgroundColor: '#47AD1D',
        },
        navBarView: {
            height: 48,
            marginTop: Platform.OS == 'ios' ? 20 : 0,
            width: width,
            flexDirection: 'row',
            alignItems: 'center',
        },
        navBarBack: {
            marginLeft: 10,
            width: 35,
            height: 35,
            paddingLeft: 15,
            paddingRight: 15,
        },
        navBartextLoyout: {
            width: width,
            position: 'absolute',
            top: 12.5,
            alignItems: 'center',

        },
        navBartext: {
            fontSize: 17,
            color: 'white',
            alignSelf: 'center',
        },
    }
);

export default ComNavBar;