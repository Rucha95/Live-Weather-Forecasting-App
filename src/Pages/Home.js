import React, { useEffect } from 'react';
import { useState } from "react";
import Card from '../Cards/Card';

function Home() {
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [data, setData] = useState("");

  
  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=7cff0d63385677bd39f05b10ab798611').then(res => {
      res.json().then(result => {
        let wforecast = result.list;
        setHourly(wforecast)
        wforecast = ([...new Map(wforecast.map((item) => [item["dt_txt"].substring(0,10),item])).values(),]).slice(0,5);
        setDaily(wforecast)
        
      })
    })
    .catch(err => {
      console.log("Error fetching data",err);
    })
  }, [])

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  function Day(d) {
    var date = new Date (d*1000);
    return days[date.getDay()];
  }

  let chosendate = "";
  function getDailyTemp(a){
    chosendate = a;
    setData(a);
  }
  return (
   
     
      <>
      {/* <center>
      <p id="inputContainer">City:  <input type="text" id="cityInput"></input> </p>
      <button>Click Me</button>
      <h2 id="cityName">---Boston---</h2>
      
      </center> */}
      <div>
        {daily.map(d => {
          return(
            <span onClick={() => getDailyTemp(d.dt_txt.split(" ")[0])}>
              <Card 
              img={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
      title={Day(d.dt)}  max={parseInt(d.main.temp_max) - (273.15).toFixed() + "°C"}  min={parseInt(d.main.temp_min) - (273.15).toFixed()+ "°C"}
      />
      
            </span>
          )
        })}
      
      </div>
      <div>
{
  hourly.map(h => {
    if(h.dt_txt.split(" ")[0] === data){
      let path = h.weather[0].icon;
      return(
        <>
    <div class="new1">
        <li>
          <img src={`http://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`}/>
          <h3> {parseInt(h.main.temp) - (273.15).toFixed()+ "°C"} </h3> <br/>
          <p>
            {(h.dt_txt.split(" ")[1]).substring(0, 5)}
          </p> 
        </li>
        </div>
        </>
      )
    }
  })
}
      </div>
        
 
       
        </>
      
  
  )
}

export default Home
