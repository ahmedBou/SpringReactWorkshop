import {Component} from "react";
import HelloWorldService from "../../api/todo/HelloWorldService";

class ListTodosComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            welcomeBean:'',
            todos: [
                {id:1, description: "Learn React", isCompleted: false, targetDate: new Date},
                {id:2, description: "Learn Java", isCompleted: false, targetDate: new Date},
                {id:3, description: "visit morocco", isCompleted: false, targetDate: new Date},

            ],



        }
        this.handleRetrieveBack= this.handleRetrieveBack.bind(this)

    }

    render() {
        return (
            <>
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
                <div>{this.state.welcomeBean}</div>
                <div className="container">
                    <button onClick={this.retrieveBack} className="btn btn-success" >provider</button>
                </div>
            </>

        );
    }
    retrieveBack(){
        console.log(HelloWorldService.executeHelloBean())
        HelloWorldService.executeHelloBean()
            .then(response => this.handleRetrieveBack(response))
    }

    handleRetrieveBack(response){
        console.log(response)
        this.setState({welcomeBean: response.data.message})
    }


}
export default ListTodosComponent;