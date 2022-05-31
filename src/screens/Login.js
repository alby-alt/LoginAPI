import React, {useContext, useState} from 'react';
import { 
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    StyleSheet,

 } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import {AuthContext} from '../context/AuthContext';
 
 const dummy = {
        firstName:"Mark",
        lastName: "Alba",
        birthDate: "06/25/1996",
        roles: ['admin'],
        contact: "09368224780"
    };
 
 const Login = ({navigation}) => {


    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    const {login} = useContext(AuthContext);

    return (
         <View style={styles.container}>
             {/* <Spinner visible={isLoading} /> */}
            <View style={styles.wrapper}>
                <TextInput 
                    style={styles.input}
                    value={username}
                    placeholder="Enter Username"
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={styles.input} 
                    value={password}
                    placeholder="Enter Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <Button 
                    title="Login"
                    onPress={() => {
                        login({username, password});
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row', 
                        marginTop: 20,
                    }}
                >
                    <Text>Don't have an Account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={styles.link}> Register </Text>
                    </TouchableOpacity>
                </View>
            </View>
         </View>
     );
 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: '80%'
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    },
});

 export default Login;