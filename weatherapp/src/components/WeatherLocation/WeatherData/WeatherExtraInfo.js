import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({wind, humidity}) => (
    <div className='weatherExtraInfoCont'>
        <span className='extraInfoText'>{`Humedad: ${humidity}  % `}</span>
        <span className='extraInfoText'>{`Viento: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;