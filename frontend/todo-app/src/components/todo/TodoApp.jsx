import React,{Component} from "react";
import "./todoApp.css"
import {BrowserRouter as Router, Route} from "react-router-dom";

class TodoApp extends Component{

    render() {
        return(

            <div className="todo">
                <Router>
                    <>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                        <Route component={ErrorComponent}/>
                    </>

                </Router>

                {/*<LoginComponent />*/}
                {/*<WelcomeComponent/>*/}
            </div>

        )
    }
}

class WelcomeComponent extends Component{
    render() {
        return <div>welcome page</div>;
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support </div>

}

export class LoginComponent extends Component{

    constructor(props) {
        super(props);
        this.state= {
            username: 'pattu',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: true
        }

        //this.handleUsernameChange = this.handleUsernameChange.bind(this)
        //this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render() {
        return(
            <>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div>"login failed"</div>}
                {/*<ValidCredentials showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>"login successful"</div>}


                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>

                <button className="login" onClick={this.loginClicked}>Login</button>
            </>
        )
    }



    loginClicked(){
        console.log(this.state)
        console.log("clicked")
        console.log(this.state.username)
        console.log(this.state.password)

        if(this.state.username && this.state.password === "user"){
            console.log("success")
            this.props.history.push("/welcome")
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed:false})

        }else{
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed:true})
        }
    }
    handleChange(event){
        //console.log(event.target.value);
        this.setState({
                [event.target.name]: event.target.value,
            }
        )
    }
    /*
    handleUsernameChange(event){
        console.log(event.target.value);
        this.setState({
                username: event.target.value,
            }
        )

    }*/

    /*
    handlePasswordChange(event){
        console.log(event.target.value)
        this.setState({
            password: event.target.value,
        })
    }*/
}
/*
function ShowInvalidCredentials(props){

    if (props.hasLoginFailed){
    return <div>Invalid Credentials</div>

    }else{
        return null
    }
}

function ValidCredentials(props){
    if(props.showSuccessMessage){
        return <div>Login successfully</div>
    }else {
        return null
    }
}*/

export default TodoApp;
