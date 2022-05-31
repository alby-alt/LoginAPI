import React, {useContext} from 'react';
import { 
    Text,
    View,
    StyleSheet,
    Button
 } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { AuthContext } from '../context/AuthContext';


 const Home = () => {
     const {userInfo, isLoading, logout} = useContext(AuthContext);
     return (
        <View style={styles.container}>
            {/* <Spinner  visible={isLoading} /> */}
            <Text style={styles.welcome}>WELCOME</Text>
            <Button title="Logout" color="red" onPress={console.log(logout)}/>
        </View>
     )
 }


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
 })
 
 export default Home;