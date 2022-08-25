import {View, Text, StyleSheet, KeyboardAvoidingView, FlatList} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';
import Post from '../Components/post'
import {data} from '../DummyData'
function HomeScreen({navigation}){

    return(
        <View style={style.container}>
            <FlatList
             data={data}
             
             keyExtractor={(item)=> item.id}
             renderItem={Post}
            ></FlatList>
            
        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1
    }
}
)

export default HomeScreen