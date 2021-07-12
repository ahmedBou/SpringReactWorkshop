import {Link} from "react-router-dom";
import {Component} from "react";

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
export default WelcomeComponent;