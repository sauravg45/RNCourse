import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
function Post({item}){
    return(
        <View style={style.container}>
            <View style={style.upperContainer}>
                    <Text>{item.username} | {item.userDesignation} </Text>
                    <View style={style.tag}><Text>{item.tag}</Text></View>
             </View>
            <View style={style.middleContainer}>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.description}>{item.description}</Text>
            </View>
            <View style={style.lowerContainer}>
                <View style={style.voteSection}>
                    <View style={style.upvote}>
                        <Ionicons name='arrowup' size={24} color="black"></Ionicons>
                        <Text>{item.upVotes}</Text>
                    </View>
                    <View style={style.downvote}>
                    <Ionicons name='arrowdown' size={24} color="black"></Ionicons>
                    <Text>{item.downVotes}</Text>
                    </View>
                </View>
                <View style={style.commentSection}>
                    
                    <EvilIcons name='comment' size={28} color="black"></EvilIcons>
                    <Text>{item.commentCount}</Text>
                </View>
            </View>
            
        </View>
    );

    
}

const style = StyleSheet.create({
    container:{
        padding:2,
        backgroundColor:'white',
        flexWrap:'wrap',
        margin:5
    },
    upperContainer:{
        padding:2,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        height:30,
        alignContent:'center',
        flexDirection:'row'
    },
    innerContainer:{
    },
    description:{
        fontSize:14,
        flexWrap:"wrap"
    },
    middleContainer:{
        borderBottomWidth:1,
        borderBottomColor:'gray',
    },
    title:{
        fontSize:17,
        flexWrap:'wrap',
        fontWeight:'bold'
    },
    lowerContainer:{
        padding:3,
        height:30,
        flexDirection:'row',
        justifyContent:""
    },
    voteSection:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:"space-evenly"
    },
    commentSection:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        borderLeftWidth : 2,
        borderLeftColor:'gray'
    },
    upvote:{
        flexDirection:'row',  
        alignItems:'center' 
    },
    downvote:{
        flexDirection:'row',
        alignItems:'center' 
    },
    tag:{
        borderWidth:1,
        backgroundColor:"#eaede8",
        height:20,
        borderRadius:10,
        padding:1,
        marginLeft:10
    }

})
export default Post