import { WeatherSpan, WeatherColum, WeatherImg } from './style';

export const WeatherForecast = ({ foreCast }) => {
  return (
    <section className="container">
      {foreCast.map((fore,index) => (
        <WeatherColum key={index}>
          <WeatherSpan>{fore.date}</WeatherSpan>
          <WeatherSpan>{fore.day.condition.text}</WeatherSpan>
          <WeatherImg src={fore.day.condition.icon} alt="img-weather" />
          <WeatherSpan>Температура</WeatherSpan>
          <WeatherSpan>{fore.day.maxtemp_c} °</WeatherSpan>
          <WeatherSpan>Ймовірність випадання дощу</WeatherSpan>
          <WeatherSpan>{fore.day.daily_chance_of_rain}%</WeatherSpan>
        </WeatherColum>
      ))}
    </section>
  );  
};
