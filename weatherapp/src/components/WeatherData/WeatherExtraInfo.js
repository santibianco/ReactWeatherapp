import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({wind, humidity}) => (
    <div>
        <span>{`${humidity}  % | `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidiy: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;