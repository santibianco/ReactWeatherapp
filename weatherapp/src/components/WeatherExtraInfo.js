import React from 'react';

const WeatherExtraInfo = ({wind, humidity}) => (
    <div>
        <span>{`${humidity}  % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

export default WeatherExtraInfo;