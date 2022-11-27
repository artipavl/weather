export const WeatherNow = () => {
    return (
        <section className="section">
            <div>
                <h2 className="place">Siliguri</h2>
                <p className="a-date">mon 3/5/21</p>
            </div>
            <input type="checkbox" className="like" />
            <div className="weather-temp">
                <p className="temperature">
                    <span className="t-num">30</span><span className="t-icons">&deg;</span><span className="t-cell">&#99;</span>
                </p>
                <img src="" alt="" />
            </div>
            <ul className="list amplitude">
                <li className="amplitude-item"><a href="" className="amplitude-link"> Highest<br/>34&deg;C</a></li>
                <li className="amplitude-item"><a href="" className="amplitude-link">Lowest<br/>26&deg;C</a></li>
            </ul>
        </section>
    )
}