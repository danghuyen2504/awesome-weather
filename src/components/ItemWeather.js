import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';
import { weatherConditions } from '../utils/WeatherConditions.js';

const ItemWeather = ({ time, temp, weather }) => {
    return (
        <View style = {styles.item}>
            <View style = {styles.view_time}>
                <Text style = {styles.text_detail}>{time}</Text>
            </View>
            <View style = {styles.view_temperature}>
                <Text style = {styles.text_detail}>{temp}˚C</Text>
            </View>
            <View style = {styles.view_icon}>
                <MaterialCommunityIcons size = {30}
                                        name = {weatherConditions[weather].icon}
                                        style = {styles.text_detail}
                />
            </View>
        </View>
    );
};

const styles = StleSheet.create({
    item: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    view_time: {
        flex: 6,
        paddingVertical: 15,
        paddingLeft: 10,
    },
    view_temperature: {
        flex: 2,
        paddingVertical: 15,
        alignItems: 'flex-end',
    },
    view_icon: {
        flex: 2,
        paddingVertical: 8,
        alignItems: 'center',
    },
    text_detail: {
        fontWeight: 'bold',
        color: 'gray',
    },
});

export default ItemWeather;