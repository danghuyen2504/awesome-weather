import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import axios from 'axios';
import { API_KEY } from '../utils/WeatherAPIKey.js';
import Weather from './Weather';

export default class GetWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,

            temp1: '', weather1: '', time1: '',
            temp2: '', weather2: '', time2: '',
            temp3: '', weather3: '', time3: '',
            temp4: '', weather4: '', time4: '',
            temp5: '', weather5: '', time5: '',
            temp6: '', weather6: '', time6: '',

            name: '',

            current_weather: '',
            description: '',
            current_temp: '',
        };
    }

    componentWillMount() {
        this.getWeather('Hanoi', 'VN');
    }

    getWeather(city_name, country_code) {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city_name},${country_code}&appid=${API_KEY}&units=metric&cnt=7&lang=vi`)
        .then(function(response) {
            console.log('response', response.data);
            this.setState({
                temp1: Math.round(response.data.list[1].main.temp),
                temp2: Math.round(response.data.list[2].main.temp),
                temp3: Math.round(response.data.list[3].main.temp),
                temp4: Math.round(response.data.list[4].main.temp),
                temp5: Math.round(response.data.list[5].main.temp),
                temp6: Math.round(response.data.list[6].main.temp),

                weather1: response.data.list[1].weather[0].main,
                weather2: response.data.list[2].weather[0].main,
                weather3: response.data.list[3].weather[0].main,
                weather4: response.data.list[4].weather[0].main,
                weather5: response.data.list[5].weather[0].main,
                weather6: response.data.list[6].weather[0].main,

                time1: (response.data.list[1].dt_txt).slice(11, 16),
                time2: (response.data.list[2].dt_txt).slice(11, 16),
                time3: (response.data.list[3].dt_txt).slice(11, 16),
                time4: (response.data.list[4].dt_txt).slice(11, 16),
                time5: (response.data.list[5].dt_txt).slice(11, 16),
                time6: (response.data.list[6].dt_txt).slice(11, 16),

                name: response.data.city.name,

                isLoading: false,
            });
        })
        .catch(function (error) {
            // console.log('ERROR', error);
        });
    }

    render() {
        const { isLoading,
                temp1, weather1, time1,
                temp2, weather2, time2,
                temp3, weather3, time3,
                temp4, weather4, time4,
                temp5, weather5, time5,
                temp6, weather6, time6,
                name,
        } = this.state;
        return (
            <View style = {{flex: 1}}>
                {isLoading ?
                    (<ImageBackground   source = {require('../images/bg.png')}
                                        style = {{flex: 1}}>
                        <View style = {styles.progress}>
                            <Progress.Circle size = {50} thickness = {20} indeterminate={true} color = 'white'/>
                            <Text style = {styles.fetching}>
                                Fetching data...
                            </Text>
                        </View>
                    </ImageBackground>)
                    :
                    (<Weather   temp1={temp1} weather1={weather1} time1={time1}
                                temp2={temp2} weather2={weather2} time2={time2}
                                temp3={temp3} weather3={weather3} time3={time3}
                                temp4={temp4} weather4={weather4} time4={time4}
                                temp5={temp5} weather5={weather5} time5={time5}
                                temp6={temp6} weather6={weather6} time6={time6}
                                name={name}
                    />)
                }
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    progress: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fetching: {
        fontSize: 30,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
});