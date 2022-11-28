import { WeatherSpan, WeatherColum, WeatherImg } from './style';

export const WeatherForecast = () => {
  return (
    <section className="container">
      {/* 1 */}
      <WeatherColum>
        <WeatherSpan>Понеділок</WeatherSpan>
        <WeatherSpan>Дата</WeatherSpan>
        <WeatherImg
          src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
          alt="img-weather"
        />{' '}
        <WeatherSpan>temperatura</WeatherSpan>
        <WeatherSpan>30</WeatherSpan>
        <WeatherSpan>Влажность </WeatherSpan>
        <WeatherSpan>20</WeatherSpan>
      </WeatherColum>
      {/* 2 */}
      <WeatherColum>
        <WeatherSpan>Вівторок</WeatherSpan>
        <WeatherSpan>Дата</WeatherSpan>
        <WeatherImg
          src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
          alt="img-weather"
        />{' '}
        <WeatherSpan>temperatura</WeatherSpan>
        <WeatherSpan>30</WeatherSpan>
        <WeatherSpan>Влажность </WeatherSpan>
        <WeatherSpan>20</WeatherSpan>
      </WeatherColum>
      {/* 3 */}
      <WeatherColum>
        <WeatherSpan>Середа</WeatherSpan>
        <WeatherSpan>Дата</WeatherSpan>
        <WeatherImg
          src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
          alt="img-weather"
        />{' '}
        <WeatherSpan>temperatura</WeatherSpan>
        <WeatherSpan>30</WeatherSpan>
        <WeatherSpan>Влажность </WeatherSpan>
        <WeatherSpan>20</WeatherSpan>
      </WeatherColum>
      {/* 4 */}
      <WeatherColum>
        <WeatherSpan>Четверг</WeatherSpan>
        <WeatherSpan>Дата</WeatherSpan>
        <WeatherImg
          src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
          alt="img-weather"
        />{' '}
        <WeatherSpan>temperatura</WeatherSpan>
        <WeatherSpan>30</WeatherSpan>
        <WeatherSpan>Влажность </WeatherSpan>
        <WeatherSpan>20</WeatherSpan>
      </WeatherColum>
      {/* 5 */}
      <WeatherColum>
        <WeatherSpan>П'ятниця</WeatherSpan>
        <WeatherSpan>Дата</WeatherSpan>
        <WeatherImg
          src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
          alt="img-weather"
        />{' '}
        <WeatherSpan>temperatura</WeatherSpan>
        <WeatherSpan>30</WeatherSpan>
        <WeatherSpan>Влажность </WeatherSpan>
        <WeatherSpan>20</WeatherSpan>
      </WeatherColum>
      {/* 6 */}
      <WeatherColum>
        <WeatherSpan>Суббота</WeatherSpan>
        <WeatherSpan>Дата</WeatherSpan>
        <WeatherImg
          src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
          alt="img-weather"
        />{' '}
        <WeatherSpan>temperatura</WeatherSpan>
        <WeatherSpan>30</WeatherSpan>
        <WeatherSpan>Влажность </WeatherSpan>
        <WeatherSpan>20</WeatherSpan>
      </WeatherColum>
      {/* 7 */}
      <WeatherColum>
        <WeatherSpan>Неділя</WeatherSpan>
        <WeatherSpan>Дата</WeatherSpan>
        <WeatherImg
          src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
          alt="img-weather"
        />{' '}
        <WeatherSpan>temperatura</WeatherSpan>
        <WeatherSpan>30</WeatherSpan>
        <WeatherSpan>Влажность </WeatherSpan>
        <WeatherSpan>20</WeatherSpan>
      </WeatherColum>
    </section>
  );
};
