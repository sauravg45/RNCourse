import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
import { TextInput , TouchableOpacity} from 'react-native-gesture-handler';
import React , {useState, useRef, useEffect} from 'react';

function EnterOtpScreen({navigation}){

let clockCall = null
const lengthInput = 6;
const [internalValue, setInternalValue] = useState('');
const defaultCountDown = 30
const [countDown, setCountDown] = useState(defaultCountDown)
const [enableResend,setEnableResend] = useState(false)



const onResendPress = () => {
    if(enableResend){
        setCountDown(defaultCountDown)
        setEnableResend(false)
        clearInterval(clockCall)
        clockCall = setInterval(() => {
            decrementClock(0)
        },1000 )
    }
   
}

const onChangeNumberPress = () => {
    setInternalValue("")
}

useEffect(() => {
    clockCall = setInterval(() => {
        decrementClock();
    },1000)
    return () => {
        clearInterval(clockCall)
    }
},[])

const decrementClock = () => {
    if(countDown===0){
        setEnableResend(true)
        setCountDown(0)
        clearInterval(clockCall)
    }else{
        setCountDown(countDown-1)
    }
    
}




let textInput = useRef(null);
const onChangeText = (val) => {
setInternalValue(val)
if(val.length === lengthInput ){
    navigation.navigate("HomeScreen")
}
}

    return (
        <View style={style.container}>
        <KeyboardAvoidingView 
        keyboardVerticaloffset={50}
        behaviour="padding"
        style = {style.containerAvoidView}
        >
            <Text style={style.titleStyle}>Input OTP sent via sms</Text>
            <View>
                <TextInput onChangeText={onChangeText} 
                value={internalValue}
                ref={(input)=> (textInput) = input}
                maxLength={lengthInput}
                style = {{width:0,height:0}}
                returnKeyType="done"
                keyboardType='Numeric'
                />
                <TouchableOpacity style={style.containerInput} onPress={()=>textInput.focus()}>
                {
                    Array(lengthInput).fill().map((data, index)=>(
                        <View key={index} style={[style.cellView, {
                            borderBottomColor: index === internalValue.length ? '#FB6C6A':'#234BD7'
                        }]}>
                        <Text style={style.cellText} >
                            {internalValue && internalValue.length>0 ? internalValue[index]:""}
                        </Text>
                    </View>
                    ))
                }
                </TouchableOpacity>
            </View>
            <View style={style.bottomView}>
            <TouchableOpacity onPress={onChangeNumberPress}>
            <View style={style.btnChangeNumber}>
                <Text style={style.textChange}>Change Number</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {onResendPress}>
            <View style={style.btnResend}>
                <Text style={[style.textResend,{color:enableResend?'#234DB7':'gray'}]}>Resend OTP({countDown})</Text>
            </View>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    containerAvoidView:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    titleStyle:{
        marginTop:50,
        marginBottom:50,
        fontSize:16
    },
    containerInput:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    cellView:{
        paddingVertical:11,
        width:40,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1.5

    },
    cellText:{
        textAlign:'center',
        fontSize:16,

    },
    btnChangeNumber:{
        width:150,
        height:50,
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    textChange:{
        color:'#234DB7',
        alignItems:'center',
        fontSize:15
    },
    btnResend:{
        width:150,
        height:50,
        borderRadius:10,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    textResend:{
        alignItems:'center',
        fontSize:16
    },
    bottomView:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
        marginBottom:50,
        alignItems:'flex-end'
    }

})

export default EnterOtpScreen