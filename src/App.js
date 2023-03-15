import logo from "./logo.svg";
import "./App.css";
import Weather from "./Component/Weather";
import {FcSearch} from 'react-icons/fc'
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
   const [weather, setWeather] = useState("Delhi");
  const [Data, setNewData] = useState();

    const getData = async () => {
      let url = `https://api.weatherbit.io/v2.0/current?city=${weather}&key=30023c62205e482da29db90040f0315f&include=minutely`;
      try {
        let response = await fetch(url);
        let weatherData = await response.json();
        setNewData(weatherData.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(()=>{
      getData();
    },[weather])



  let checkWeather = (e) => {
   if(e.key =="Enter"){
    setWeather(e.target.value);
   }
   
  };

  return (
    <div className="App">
      <div className="center_div">
      <input
          type="text"
          defaultValue={weather}
          placeholder="Enter City Name"
          onKeyUp={checkWeather}
        />
        <FcSearch className="icon"/>
        {!Data || weather == "" ? (
          <p>Input Can't Be Empty</p>
        ) : (
          <Weather Data={Data} />
        )}
        <div className="custom-shape-divider-bottom-1678617304">
          <div className="custom-shape-divider-bottom-1678617430">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

};


export default App;
