import React,{Component} from "react";
import "./todoApp.css"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { withRouter } from 'react-router';
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute";
class TodoApp extends Component{

    render() {
        return(

            <div className="todo">

                <Router>
                    <HeaderComponent />
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute Route path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute Route path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute Route path="/todos" component={ListTodosComponent} />
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>

                </Router>
                <FooterComponent/>
                {/*<LoginComponent />*/}
                {/*<WelcomeComponent/>*/}
            </div>

        )
    }
}

class ListTodosComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id:1, description: "Learn React", isCompleted: false, targetDate: new Date},
                {id:2, description: "Learn Java", isCompleted: false, targetDate: new Date},
                {id:3, description: "visit morocco", isCompleted: false, targetDate: new Date},

            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Todos list</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>completed</th>
                                <th>target date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.isCompleted.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    task(){

    }
}

class HeaderComponent extends Component{

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedIn)
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">Pattu</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/pattu">Home</Link></li>}
                        {isUserLoggedIn &&<li><Link className="nav-link" to="/todos">todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout"
                                   onClick={AuthenticationService.logout}> Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        )}
}
class FooterComponent extends Component{
    render() {
        return (
            <>
                <footer className="bg-light text-center text-lg-start">

                    <div className="text-center p-3">
                        © 2021 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/">Pattu.com</a>
                    </div>

                </footer>

            </>
        )}
}
class LogoutComponent extends Component{
    render() {
        return (
            <>
                <h1>you are logged out</h1>
                <div className="container">
                    Thank you for using our application
                </div>
            </>
        )}
}


class WelcomeComponent extends Component{
    render() {

        return(
            <>
                <h1>Welcome</h1>
                <div className="container">
                    welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>
            )
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

export default TodoApp;

