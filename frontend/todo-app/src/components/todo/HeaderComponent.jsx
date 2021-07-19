import AuthenticationService from "./AuthenticationService";
import {Link} from "react-router-dom";
import {Component} from "react";
import { withRouter } from 'react-router';

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
export default withRouter(HeaderComponent);