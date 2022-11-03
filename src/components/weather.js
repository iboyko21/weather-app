import React, {useState} from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {

    const APIKEY = "35744fcbc64af99ab966567e92a887df";

    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState([])

    async function weatherData(e) {
        e.preventDefault();
        if(form.city === ""){
            alert("Add Values");
        } else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}&units=imperial`)
            .then(res => res.json())
            .then(data => data);

            setWeather({
                data : data
            });
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city") {
            setForm({...form, city: value})
        }
        if(name === "country") {
            setForm({...form, country: value})
        }
    }

    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br/>

            <form>
                <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
                <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)}/>
                <button className="getweather" onClick={(e) => weatherData(e)}>
                    Submit
                </button>
            </form>

            {
                weather.data != undefined ? 
                <div>
                    <DisplayWeather data={weather.data}/>
                </div>
                : null
            }
        </div>
    );
}

export default Weather;