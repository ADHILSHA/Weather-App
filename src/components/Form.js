import React from "react";

/*class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getweather}>
                <input type="text" placeholder="Country" name="country"/>
                <input type="text" placeholder="City" name ="city"/>
                <button>Get Weather</button>
            </form>
        );
    }
};*/
const Form=props=>(
    <form onSubmit={props.getweather}>
                <input className="form-control" type="text" placeholder="Country" name="country"/>
                <input className="form-control" type="text" placeholder="City" name ="city"  />
                <button className="btn btn-primary">Get Weather</button>
    </form>
);
export default Form;