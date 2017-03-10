/**
 * NetUitl 网络请求的实现
 * @author tanlifei
 * @date 2017-03-11
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';


class JsonUitls extends Component {

    /**
     *
     * json转字符串
     */
    static stringToJson(data){
        return JSON.parse(data);
    }

    /**
     *字符串转json
     */
    static jsonToString(data){
        return JSON.stringify(data);
    }
    /**
     *map转化为对象（map所有键都是字符串，可以将其转换为对象）
     */
    static strMapToObj(strMap){
        let obj= Object.create(null);
        for (let[k,v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }
    /**
     *map转换为json
     */
    static mapToJson(map) {
        return JSON.stringify(JsonUitls.strMapToObj(map));
    }

    /**
     *对象转换为Map
     */
    static   objToStrMap(obj){
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k,obj[k]);
        }
        return strMap;
    }
    /**s
     *json转换为map
     */
    static jsonToMap(jsonStr){
        return  JsonUitls.objToStrMap(JSON.parse(jsonStr));
    }


}

module.exports = JsonUitls;
/**
 * Created by tanlifei on 2017/3/7.
 */
