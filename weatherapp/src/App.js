import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'London,uk',
  'Paris,fr',
  'Madrid,es'
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList 
            onSelectedLocation = {this.handleSelectedLocation}
            cities={cities}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
