import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "6672f3b298ebdcfb1f2b920f59e0209b";
class App extends React.Component{
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getweather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();
    console.log(data);
    if(city && country){
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""    
      })
    }
    else{
      this.setState(
        {
          temperature:undefined,
          city:undefined,
          country:undefined,
          humidity:undefined,
          description:undefined,
          error:"Please Enter the value"
        }
      )
    }
    
  }
  render(){
    return(
      <div id="maincontainer">
        <Titles/>
        <Form getweather={this.getweather}/>
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
};
export default App;