import React from 'react';
import { Navigator } from 'react-native-navigation';
import { View, Text, Button } from 'react-native';
import Payment from '.pages/Payment';
import DiamantePay from './diamante/DiamantePay';

const Pay: React.FC = () => {
    const handleDiamAppPayment = () => {
        // Logic for handling Diam app payment
        console.log('Diam app payment selected');
    };

    const handleRazorpayPayment = () => {
        // Logic for handling Razorpay payment
        console.log('Razorpay payment selected');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Select Payment Method</h1>
            <div style={{ margin: '20px 0' }}>
                <button onClick={handleDiamAppPayment} onPress={() => {Navigator.navigation("DiamantePay")}} style={{ marginRight: '10px', borderRadius: '10px' }}>
                    Pay with Diam app
                </button>
                <button onClick={handleRazorpayPayment} onPress={() => {Navigator.navigation("Payment")}}>
                    Pay with Razorpay
                </button>
            </div>
        </div>
    );
};


// Styling can start from here....

//const styles = StyleSheet.create({})

export default Pay;