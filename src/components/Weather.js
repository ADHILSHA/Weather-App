import React from "react";

/*USING CLASS

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.country && <p>Country: {this.props.country}</p>}
                {this.props.city && <p>City: {this.props.city}</p>}
                {this.props.temperature && <p> Temperature: {this.props.temperature}</p> }
                {this.props.humidity &&  <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Description: {this.props.description}</p> }
                {this.props.error && <p>{this.props.error}</p> }                
                
            </div>
        )
    }
};*/
const Weather =props=>(
            <div className="result">
                {props.country && <p>Country: {props.country}</p>}
                {props.city && <p>City: {props.city}</p>}
                {props.temperature && <p> Temperature: {props.temperature}</p> }
                {props.humidity &&  <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Description: {props.description}</p> }
                {props.error && <p>{props.error}</p> }                
                
            </div>
        )
    

export default Weather;