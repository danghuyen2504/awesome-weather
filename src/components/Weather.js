import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions.js';
import { ImageBackground, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Weather = ({  temp1, weather1, time1,
                    temp2, weather2, time2,
                    temp3, weather3, time3,
                    temp4, weather4, time4,
                    temp5, weather5, time5,
                    temp6, weather6, time6,
                    name
                }) =>
{
    return (
        <View style = {{flex: 1}}>
            <TouchableOpacity style= {{flex: 55}}>
                <ImageBackground    source = {require('../images/snow.jpg')}
                                    style = {{flex: 1}}
                >
                    <View style = {styles.header}>
                        <Text style = {[styles.text_shadow, {fontSize: 40}]}>it's freezing</Text>
                        <Text style = {[styles.text_shadow, {fontSize: 30}]}>Ha Noi</Text>
                        <Text style = {[styles.text_shadow, {fontSize: 100, fontWeight: 'bold'}]}>-100˚</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            <View style = {{flex: 45}}>
                <Text>Test test</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        alignSelf: 'center',
    },
    text_shadow: {
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
});

export default Weather;