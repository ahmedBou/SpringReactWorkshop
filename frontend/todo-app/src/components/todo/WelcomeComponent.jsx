import {Link} from "react-router-dom";
import {Component} from "react";
import HelloWorldService from "../../api/todo/HelloWorldService.js";
import axios from "axios";
import {logDOM} from "@testing-library/react";

class WelcomeComponent extends Component{
    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }


    render() {

        return(
            <>
                <h1>Welcome</h1>
                <div className="container">
                    welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to see if we can get any data from service provider
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success" >provider</button>
                </div>

            </>
        )

    }
    retrieveWelcomeMessage(){
       HelloWorldService.executeHelloWorldService()
           .then( response => console.log(response))
           //.catch()

    }
}
export default WelcomeComponent;