import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';

function SendOtpScreen({navigation}){

    let textInput = useRef(null)


    const [phoneNumber, setPhoneNumer] = useState("");

    const [buttonColour, setButtonColour] = useState('gray');
    
    const onChangePhone = (number) =>{
        setPhoneNumer(number)
        if(number.length == 10){
            setButtonColour('#244DB7')
        }else{
            setButtonColour('gray')
        }
    }

    const onPressContinue = () => {
        if(phoneNumber.length==10){
            navigation.navigate('EnterOTP')
        }
    }
    const onFocusChange = () => {
        setFocusInput(true)
    }

    const onBlurChange = () => {
        setFocusInput(false)
    }

    const [focusInput, setFocusInput] = useState(true);

    useEffect(() => {
        textInput.focus()
    },[])

    return <View style={style.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={50}
        behavior={'padding'}
        style = {style.containerAvoidView}>
                    <Text style = {style.textTitle}>
            Please input your mobile number
        </Text>
        <View style={[style.containerInput, {borderBottomColor: focusInput? '#244DB7':'#ffffff'}]}>
            <View style = {style.openDialogView}>
                <Text>+91 | </Text>
            </View>
            <TextInput style = {style.phoneInputStyle} 
            ref= {(input) => textInput =input }
            keyboardType='numeric' 
            placeholder="999-999-9999"
            value={phoneNumber} 
            onChangeText={onChangePhone} 
            secureTextEntry={false} 
            onFocus={onFocusChange} 
            onBlur={onBlurChange}
            maxLength = {10}
            autoFocus={focusInput}
            >
            
            </TextInput>
        </View>    
        <View style={style.viewBottom}>
            <TouchableOpacity onPress={onPressContinue}>
                <View style={[style.btnContinue, {
                    backgroundColor: buttonColour
                }]}>
                <Text style={style.textContinue}>Continue</Text>
                </View>
                
            </TouchableOpacity>
        </View>
            </KeyboardAvoidingView>

    </View>
};

const style = StyleSheet.create({
    container: {
        flex:1
    },
    containerAvoidView : {
        flex : 1,
        alignItems : 'center',
        padding : 10
    },
    textTitle:{
        marginTop:50,
        marginBottom:50,
        fontSize:16
    },
    containerInput : {
        flexDirection : 'row',
        paddingHorizontal:12,
        borderRadius:10,
        backgroundColor:"white",
        alignItems:'center',
        borderBottomWidth: 1.5,
        borderBottomColor : '#244DB7'
    },
    openDialogView : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneInputStyle : {
        marginLeft:5,
        flex: 1,
        height: 50
    },
    viewBottom : {
        flex:1,
        justifyContent:'flex-end',
        marginBottom:50,
        alignItems:'center'
    },
    btnContinue:{
        width:150,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#244DB7'
    },
    textContinue:{
        color:'#ffffff', 
        alignItems:'center'
    }

})

export default SendOtpScreen