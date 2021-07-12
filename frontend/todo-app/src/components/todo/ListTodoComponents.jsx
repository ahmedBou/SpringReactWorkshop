import {Component} from "react";

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
export default ListTodosComponent;