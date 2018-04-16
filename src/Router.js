import { StackNavigator } from 'react-navigation';
import GetWeather from './components/GetWeather';
import { initializeApp } from 'firebase';

export const WeatherStack = StackNavigator(
    {
        HomeScreen: {
            screen: GetWeather,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        initialRouteName: 'HomeScreen'
    }
);