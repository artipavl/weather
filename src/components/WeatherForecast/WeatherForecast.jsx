import { WeatherContainer, SecondBox, Diagrams} from './style';

export const WeatherForecast = () => {
  return (
    <div className="wrapper">
      <WeatherContainer>
        <SecondBox><Diagrams><h2>5 Day Weather Forecast</h2></Diagrams></SecondBox>
      </WeatherContainer>
    </div>
  );
};
