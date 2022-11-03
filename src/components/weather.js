import React, {useState} from "react";
import "./weather.css";

function Weather() {

    const APIKEY = "35744fcbc64af99ab966567e92a887df";

    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    async function weatherData(e) {
        e.preventDefault();
        if(form.city == ""){
            alert("Add Values");
        } else {
            const data = await fetch(`api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            .then(res => console.log(res.json()))
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "city") {
            setForm({...form, city: value})
        }
        if(name == "country") {
            setForm({...form, country: value})
        }
        console.log(form.city, form.country);
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
        </div>
    );
}

export default Weather;