import {Link} from "react-router-dom";
import {Component} from "react";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

class WelcomeComponent extends Component{
    constructor(props) {
        super(props);
        //this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)


        this.state={
            welcomeMessage: ''
        }
        //this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.retrieveHelloPath = this.retrieveHelloPath.bind(this)
        this.handleHelloPathVariable= this.handleHelloPathVariable.bind(this)
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
                    <button onClick={this.retrieveHelloPath} className="btn btn-success" >provider</button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )

    }
    /*
    retrieveWelcomeMessage(){
       HelloWorldService.executeHelloWorldService()
           //.then( response => this.handleSuccessfulResponse(response))
           //.catch()
           .then(response =>this.handleSuccessfulResponse(response))
    }*/

    retrieveHelloPath(){
        console.log(this.props.match.params.name)
        HelloWorldService.executeHelloPathVariable(this.props.match.params.name)
            .then(response => this.handleHelloPathVariable(response))
    }

    /*
    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.statement})
    }*/

    handleHelloPathVariable(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.statement})
    }




}
export default WelcomeComponent;