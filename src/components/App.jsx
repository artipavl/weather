import { React, Component } from 'react';
import { Search } from './Search/Search';
import { Section } from './Section/Section';
import { WeatherForecast } from './WeatherForecast/WeatherForecast';
import { WeatherNow } from './WeatherNow/WeatherNow';
import { getImage } from './Api/Api';

export class App extends Component {
  state = {
    search: 'london',
    weather: {
      location: {
        name: 'London',
        region: 'City of London, Greater London',
        country: 'United Kingdom',
        lat: 51.52,
        lon: -0.11,
        tz_id: 'Europe/London',
        localtime_epoch: 1669649794,
        localtime: '2022-11-28 15:36',
      },
      current: {
        last_updated_epoch: 1669649400,
        last_updated: '2022-11-28 15:30',
        temp_c: 11,
        temp_f: 51.8,
        is_day: 0,
        condition: {
          text: 'Light rain',
          icon: '//cdn.weatherapi.com/weather/64x64/night/296.png',
          code: 1183,
        },
        wind_mph: 4.3,
        wind_kph: 6.8,
        wind_degree: 220,
        wind_dir: 'SW',
        pressure_mb: 1010,
        pressure_in: 29.83,
        precip_mm: 0,
        precip_in: 0,
        humidity: 82,
        cloud: 25,
        feelslike_c: 9.9,
        feelslike_f: 49.8,
        vis_km: 10,
        vis_miles: 6,
        uv: 1,
        gust_mph: 9.6,
        gust_kph: 15.5,
      },
    },
  };

  onSearch = search => {
    this.setState({ search });
  };

  onApi = async () => {
    const data = await getImage(this.state.search);
    this.setState({ weather: data });
    console.log(data);
  };

  render() {
    return (
      <>
        <header>
          <Search
            value={this.state.search}
            onSearch={this.onSearch}
            onApi={this.onApi}
          />
        </header>
        <Section>
          {this.state.weather && <WeatherNow weather={this.state.weather} />}
        </Section>
        <Section>
          <WeatherForecast />
        </Section>
      </>
    );
  }
}
