import "./weather.css"

export default function WeatherCard({weather}){
    const {name, main, weather: weatherInfo} = weather;
    const iconCode = weatherInfo[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return(
        <div className="city">
            <h3 className="cityName">{name}</h3>
            <img src={iconURL} alt="icon"className="cityIcon"/>
            <p className="cityTemp">{Math.round(main.temp)}°C</p>
            <p className="cityHum">humidity: {main.humidity}</p>
            <p className="cityInfo">{weatherInfo[0].describtion}</p>
        </div>
    )
}