import React from 'react';
import { RAZORPAY_ID_PAY, RAZORPAY_SECRET_KEY } from '@env';

import { View, Text, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const Payment = () => {
    const onPay = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: RAZORPAY_ID_PAY,
            amount: '5000',
            name: 'foo',
            prefill: {
                email: '
                contact: '9999999999',
                name: 'foo',
            },
            theme: { color: '#F37254' },
        };
        RazorpayCheckout.open(options)
            .then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch((error) => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
            });
    };
