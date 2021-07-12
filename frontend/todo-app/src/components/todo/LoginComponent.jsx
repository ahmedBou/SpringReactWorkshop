import AuthenticationService from "./AuthenticationService";
import {Component} from "react";


class LoginComponent extends Component{

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
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">"login failed"</div>}
                    {/*<ValidCredentials showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {this.state.showSuccessMessage && <div>"login successful"</div>}


                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>

                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>

            </>
        )
    }

    loginClicked(){
        console.log(this.state)
        console.log("clicked")
        console.log(this.state.username)
        console.log(this.state.password)

        if(this.state.username && this.state.password === "user"){
            //console.log("success")
            AuthenticationService.registerSuccessfulLogin(this.state.username , this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
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
export default LoginComponent;