import { React, Component } from 'react';
import { Search } from './Search/Search';
import { Section } from './Section/Section';
import { WeatherForecast } from './WeatherForecast/WeatherForecast';
import { WeatherNow } from './WeatherNow/WeatherNow';

export class App extends Component {
  state = {};

  render() {
    return (
      <>
        <header>
          <Search />
        </header>
        <Section>
          <WeatherNow />
        </Section>
        <Section>
          <WeatherForecast />
        </Section>
      </>
    );
  }
}
