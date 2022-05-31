import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useState} from 'react';
import {BASE_URL} from '../config';


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    const register = (data) => {
        setIsLoading(true);
            console.log(data);


    axios
        .post(`${BASE_URL}/auth/signup`, 
            data   
        )
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
        })
        .catch(e => {
            console.log(e.response.data);
            console.log(`register error ${e}`);
            setIsLoading(false);
        });
    };
    // const login = (data) => {
    //     setIsLoading(true);
    //     console.log(data);

    // axios
    //     .post(`${BASE_URL}/auth/signin`, 
    //         data
    //     )
    //     .then(res => {
    //         let userInfo = res.data;
    //         console.log(userInfo);
    //         setUserInfo(userInfo);
    //         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    //         setIsLoading(false);
    //     }).catch(e => {
    //         console.log(e.response.data);
    //         console.log(`login error ${e}`);
    //         setIsLoading(false);
    //     });
    // }
    const login = (data) => {
        setIsLoading(true);
            console.log(data);


    axios
        .post(`${BASE_URL}/auth/signin`, 
         data   
        )
        .then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
        })
        .catch(e => {
            console.log(e.response.data);
            console.log(`login error ${e}`);
            setIsLoading(false);
        });
    };

    return ( 
    <AuthContext.Provider 
        value={{
            isLoading,
            userInfo,
            register,
            login,
        }}
    >
        {children}
    </AuthContext.Provider>
    );
};