import { StyleSheet, View as RNView, Text, Image, Button } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
//import Wallet from '@/pages/Wallet';
import { useNavigation } from '@react-navigation/native';
// Removed incorrect import statement
import Wallet from "../../pages/Wallet";
import Login from "../../pages/Login";


export default function Profile() {
    const navigation = useNavigation();

    return (
        <ParallaxScrollView
            headerImage={<Image source={require('../../assets/images/car.png')} style={styles.headerImage} />}
            headerBackgroundColor={{ dark: '#000', light: '#fff' }}
        >
            <Text style={styles.txt}>Profile</Text>
            <Image style={styles.img} source={require('../../assets/images/car.png')} />
            <Text style={styles.txt}>Welcome to your profile!</Text>
            <Text style={styles.txt}>John Smith</Text>
            <Text style={styles.txt}>XX XX XX XXXX</Text>

            <Button title="Check Wallet" onPress={() => navigation.navigate('Wallet')} color="violet" />

            <Button title="Logout" onPress={() => navigation.navigate('Login')} color="red" />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Optional: Set background color to black for better contrast
        paddingTop: 50,
    },
    img: {
        paddingTop: 100,
        width: 100,
        height: 100
    },
    txt: {
        paddingTop: 20,
        fontSize: 20,
        color: '#fff', // Set text color to white
    },
    headerImage: {
        alignSelf: 'center',
        marginBottom: 20,
    },

});