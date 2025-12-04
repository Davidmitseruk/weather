import React, {useContext, useEffect, useState} from "react";
import WeatherCard from "./components/WeatherCard";
import SearchHistory from "./components/SearchHistory";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

const API_KEY = '7ecd2181b20decdc15fcef0f75b723d4';



export default function App() {

const {theme} = useContext(ThemeContext);
const [city, setCity] = useState("");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const [history, setHistory] = useState(() => {
  const saved = localStorage.getItem("history");
  return saved? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("history", JSON.stringify(history))
}, [history]);

const fetchWeather = async (cityName) => {
  if(!cityName.trim()){
    setError("enter city!");
    return
  }
  setError("")
  setLoading(true)
  setWeather(null)
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ua`);
    if(!res.ok) throw new Error("City not found");
    const data = await res.json();
    setWeather(data);
    if(!history.includes(cityName)){
      setHistory((prev) => [...prev,cityName])
    }
  } catch (error) {
    setError(error.message)
  } finally {
    setLoading(false);
  }
}
const handleSubmit = (e) => {
  e.preventDefault();
  fetchWeather(city);
};

const handleSelectHistory = (selectedCity) => {
  setCity(selectedCity);
  fetchWeather(selectedCity);
};

return(
  <div >
      <ThemeToggle />

      <h2>Weather</h2>

      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button >Search</button>
      </form>

      {error && <div >{error}</div>}
      {loading && <div>loading...</div>}

      <SearchHistory history={history} onSelect={handleSelectHistory} />

      {weather && <WeatherCard weather={weather} />}
    </div>
)
}

