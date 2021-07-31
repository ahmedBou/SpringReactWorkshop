import {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component{


    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            welcomeBean:'',
            message:'',
            todos: [
                //{id:1, description: "Learn React", isCompleted: false, targetDate: new Date},
                //{id:2, description: "Learn Java", isCompleted: false, targetDate: new Date},
                //{id:3, description: "visit morocco", isCompleted: false, targetDate: new Date},

            ],
        }
        //this.componentDidMount = this.componentDidMount.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.refreshTodos();
    }
    refreshTodos(){
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.todoDataBack(username)
            .then(response => {
                console.log(response.data.done)
                this.setState({todos: response.data})
            })
    }

    deleteTodo(id){
        let username = AuthenticationService.getLoggedInUser()

        console.log(id + " "+username);
        TodoDataService.deleteTodo(username, id)
            .then(response=> {
                this.setState({message: `Deleted todo ${id} successful`});
                this.refreshTodos()
            })
    }
    updateTodo(id){
        console.log('update '+ id)
        this.props.history.push(`/todos/${id}`)
    }
    render() {
        console.log("render")
        return (
            <>
                <h1>Todos list</h1>
                 {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>description</th>
                            <th>completed</th>
                            <th>target date</th>
                            <th>Update</th>
                            <th>delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button onClick={()=> this.updateTodo(todo.id)} className="btn btn-success">Update</button></td>
                                    <td><button onClick={()=> this.deleteTodo(todo.id)} className="btn btn-warning">Delete</button></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div>{this.state.welcomeBean}</div>

            </>

        );
    }

    /*
    retrieveBack(){
        console.log(HelloWorldService.executeHelloBean())
        HelloWorldService.executeHelloBean()
            .then(response => this.handleRetrieveBack(response))
    }

    handleRetrieveBack(response){
        console.log(response)
        this.setState({welcomeBean: response.data.message})
    }
    */

}
export default ListTodosComponent;