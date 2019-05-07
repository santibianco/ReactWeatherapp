import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { CLOUD, 
    CLOUDY,
    RAIN,
    SUN,
    SNOW,
    WINDY } from './../../constants/weathers';
import './style.css';

const data ={
    temperature: 20,
    weatherState: CLOUDY,
    humidity: 80,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    render = () => (
        <div className='weatherLocationCont'>
            <Location city={"Buenos Aires"} />
            <WeatherData data={data}/>
        </div>
    );

}

export default WeatherLocation;
