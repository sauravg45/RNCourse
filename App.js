import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 import EnterOTPScreen from './src/EnterOtp/enterOtp'
 import SendOtpScreen from './src/SendOtp/sendOtp'
 import HomeScreen from './src/HomeScreen/homescreen'
import Post from './src/Components/post'

 const Stack = createStackNavigator();

export default function App() {
  return (
    <>
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen 
       name="SendOtp" 
       component={SendOtpScreen} 
       options={{title:'Welcome', headerBackTitle:""}}
       />
       <Stack.Screen 
       name="EnterOTP" 
       component={EnterOTPScreen} 
       options={{title:'Input OTP', headerBackTitle:""}}
       />
       <Stack.Screen 
       name="HomeScreen" 
       component={HomeScreen} 
       options={{title:'Home', headerBackTitle:""}}
       />
        <Stack.Screen 
       name="Post" 
       component={Post} 
       options={{title:'Post', headerBackTitle:""}}
       />
     </Stack.Navigator>
   </NavigationContainer>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
