import React, { useContext } from 'react';
import { 
    Text,
    View
 } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { AuthContext } from '../context/AuthContext';


 const Stack = createNativeStackNavigator();

 const Navigation = () => {
 const {userInfo} = useContext(AuthContext);

     return (
       <NavigationContainer>
         <Stack.Navigator>
           {userInfo.accessToken ? (
            <Stack.Screen name="Home"
              component={Home} 
            />
            ) : (
            <>
            <Stack.Screen name="Login"
              component={Login}
              options={{headerShown: false}} 
            />
            <Stack.Screen name="Register"
              component={Register}
              options={{headerShown: false}} 
            />
            </>
            )} 
         </Stack.Navigator>
       </NavigationContainer>
     );
 };

 export default Navigation;