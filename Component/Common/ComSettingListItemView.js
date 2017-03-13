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
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native';
var {width, height} = Dimensions.get('window');
class ComSettingListItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBarView}>
                    <View style={{ flex: 1,backgroundColor: 'white' ,flexDirection: 'row'}}>
                        <View style={{justifyContent: 'center',alignItems:'center' ,alignSelf:'center'}}>
                            <Text style={styles.gridTile}>{this.props.title}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }


}


const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
        },
        navBarView: {
            backgroundColor: 'white',
            height: 48,
            width: width,
        },

        gridTile: {
            color: 'rgba(0,0,0,0.85)',
            fontSize: 13,
            marginLeft: 10,
            alignSelf: 'flex-start'
        },
    }
);

export default ComSettingListItemView;