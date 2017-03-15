/**
 * Created by tanlifei on 2017/2/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    StatusBar,
    View,
    TextInput,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
class AskSpecialistView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            style={{height:300}}
                >
                    <Text style={styles.pageItemContainer} >dadfasdfasd</Text>
                    {/*{this.renderScrollItem()}*/}
                </ScrollView>
                {/*<View style={styles.indicatorViewStyle}>
                 {this.renderIndicator()}
                 </View>*/}
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    containerPage: {
        width: 180,
        height: 180,
    },
    slide: {
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default AskSpecialistView;
