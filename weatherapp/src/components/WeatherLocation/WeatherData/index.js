import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { CLOUD, 
    CLOUDY,
    RAIN,
    SUN,
    SNOW,
    WINDY } from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={20} weatherState={SUN}/>
        <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData; 