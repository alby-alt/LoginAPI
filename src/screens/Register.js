import React, {useContext, useState} from 'react';
import { 
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    StyleSheet,

 } from 'react-native';


import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

    const dummy = {
        firstName:"Mark",
        lastName: "Alba",
        birthDate: "06/25/1996",
        roles: ['admin'],
        contact: "09368224780"
    }


 const Register = ({navigation}) => {

    const [username, setUsername] = useState(null);
    const [email_address, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const {isLoading, register} = useContext(AuthContext);

    return (
         <View style={styles.container}>
             {/* <Spinner visible={isLoading}/> */}
             <Spinner visible={isLoading}/>
            <View style={styles.wrapper}>
                <TextInput 
                    style={styles.input}
                    value={username}
                    placeholder="Enter Name"
                    onChangeText={text => setUsername(text)}
                />
                <TextInput 
                    style={styles.input}
                    value={email_address}
                    placeholder="Enter Email"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input} 
                    value={password}
                    placeholder="Enter Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <Button 
                    title="Register"
                    onPress={() => {
                        register({username, email_address, password});
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row', 
                        marginTop: 20,
                    }}
                >
                    <Text>Already have an Account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.link}> Login </Text>
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

 export default Register;