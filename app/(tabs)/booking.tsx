import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

interface Item {
  id: number;
  label: string;
  imgSrc: string;
}

const Booking: React.FC = () => {
  const items: Item[] = [
    { id: 1, label: 'Button 1', imgSrc: 'https://via.placeholder.com/150' },
    { id: 2, label: 'Button 2', imgSrc: 'https://via.placeholder.com/150' },
    { id: 3, label: 'Button 3', imgSrc: 'https://via.placeholder.com/150' },
    { id: 4, label: 'Button 4', imgSrc: 'https://via.placeholder.com/150' },
  ];

  return (
    <View style={{ display: 'flex', flexWrap: 'wrap', paddingTop: 50 }}>
      {items.map(item => (
        <View key={item.id} style={{ margin: 10, textAlign: 'center' }}>
          <Image source={{ uri: item.imgSrc }} style={{ width: 150, height: 150 }} />
          <TouchableOpacity style={{ display: 'block', marginTop: 10 }}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default Booking;