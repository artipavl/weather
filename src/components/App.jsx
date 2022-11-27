import { React, Component } from 'react';
import { Search } from './Search/Search';
import { WeatherForecast } from './WeatherForecast/WeatherForecast';
import { WeatherNow } from './WeatherNow/WeatherNow';


export class App extends Component {
  state = {
    
  };


  render() {
    return (
      <>
        <Search />
        <WeatherNow />
        <WeatherForecast />
      </>
      
    );
  }
}
