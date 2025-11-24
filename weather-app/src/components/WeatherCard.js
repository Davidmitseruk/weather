

export default function WeatherCard({weather}){
    const {name, main, weather: weatherInfo} = weather;
    const iconCode = weatherInfo[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return(
        <div>
            <h3>{name}</h3>
            <img src={iconURL} alt="icon"/>
            <p>{Math.round(main.temp)}°C</p>
            <p>humidity: {main.humidity}</p>
            <p>{weatherInfo[0].describtion}</p>
        </div>
    )
}