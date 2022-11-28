export const WeatherNow = ({
  weather: {
    location: { name, localtime },
    current: { temp_c, feelslike_c, humidity, condition },
  },
}) => {
  return (
    <section className="container">
      <div>
        <h2 className="place">{name}</h2>
        <p className="a-date">{localtime}</p>
      </div>
      <input type="checkbox" className="like" />
      <div className="weather-temp">
        <p className="temperature">
          <span className="t-num">{temp_c}</span>
          <span className="t-icons">&deg;</span>
          <span className="t-cell">&#99;</span>
        </p>
        <img src={condition.icon} alt={condition.text} className="weatherIcon" />
      </div>
      <ul className="list amplitude">
        <li className="amplitude-item">
          <a href="./" className="amplitude-link">
            {' '}
            Feelslike
            <br />
            {feelslike_c}&deg;C
          </a>
        </li>
        <li className="amplitude-item">
          <a href="./" className="amplitude-link">
            Humidity
            <br />
            {humidity}%
          </a>
        </li>
      </ul>
    </section>
  );
};
