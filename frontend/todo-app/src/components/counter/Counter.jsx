import React, {Component} from "react";
import "./Counter.css";
import PropTypes from "prop-types";


class Counter extends Component{
    // define the initial state in a constructor
    // state => counter 0
    constructor(){
        super();
        this.state = {
            counter: 0,

        }
        this.increment = this.increment.bind(this);
        //console.log("this.decrement =", this.increment);
        this.decrement =  this.decrement.bind(this);
        //console.log("this.decrement =", this.decrement);
        this.reset = this.reset.bind(this)
    }
    render() {
        return (
            <div className="ButtonCounter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment}  decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>

                <span className="count">{this.state.counter}</span>
                <div >
                    <button className="resetButton" onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
    reset(){
        console.log("reset clicked");
        this.setState((prevState) => {
                return {counter: 0}
            }
        )
    }
    increment(by){
        console.log("increment from parent", by);
        console.log(this.state.counter);
        // this.state.counter++; bad practice

        this.setState((prevState) => {
                return {counter: prevState.counter  + by}
            }
        )
    }

    decrement(by){
        this.setState((prevState) => {
                return {counter: prevState.counter  - by}
            }
        )
    }

}

class CounterButton extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0,

        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    render() {
        return (

            <div className="Counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>

            </div>

        )
    }



    increment(){
        //console.log("inc");
        // this.state.counter++; bad practice
        console.log(this.state.counter);
        console.log(this.props.by);
        console.log("this.state.counter - this.props.by =", this.state.counter + this.props.by);

        this.setState((prevState)=>{
                return{counter: this.state.counter + this.props.by}
            }
        )
        this.props.incrementMethod(this.props.by);
    }

    decrement(){
        console.log(this.state.counter);
        console.log(this.props.by);
        console.log("this.state.counter - this.props.by =", this.state.counter - this.props.by);
        // this.state.counter++; bad practice

        this.setState((prevState)=>{
                return{counter: this.state.counter - this.props.by}
            }
        )
        this.props.decrementMethod(this.props.by);

    }
}



CounterButton.defaultProps = {
    by: 1
}
CounterButton.propTypes = {
    by: PropTypes.number
}


//export default CounterButton;
export default Counter;
