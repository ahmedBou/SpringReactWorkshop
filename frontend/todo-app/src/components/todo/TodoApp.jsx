import React,{Component} from "react";
import "./todoApp.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import { withRouter } from 'react-router';
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodoComponents";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./LogoutComponent";

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





export default TodoApp;

