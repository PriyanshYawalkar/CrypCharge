import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

interface Item {
  id: number;
  label: string;
  imgSrc: string;
}

const Booking: React.FC = () => {
  const items: Item[] = [
    { id: 1, label: 'Button 1', imgSrc: '../assets/images/charger.png' },
    { id: 2, label: 'Button 2', imgSrc: '../assets/images/charger.png' },
    { id: 3, label: 'Button 3', imgSrc: '../assets/images/charger.png' },
    { id: 4, label: 'Button 4', imgSrc: '../assets/images/charger.png' },
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        paddingTop: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    mapContainer: {
        width: "100%",
        height: "95%",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    mapview: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    });

export default Booking;