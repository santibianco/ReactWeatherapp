import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <LocationList/>
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
