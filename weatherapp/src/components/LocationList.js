import React from 'react'; 
import WeatherLocation from './WeatherLocation'

const LocationList = () => (
    <div>
        <WeatherLocation city={"Buenos Aires,ar"}/>
        <WeatherLocation city={"London,uk"}/>
        <WeatherLocation city={"Paris,fr"}/>
    </div>
);

export default LocationList;