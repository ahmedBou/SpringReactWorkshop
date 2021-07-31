import axios from "axios";

class TodoDataService{

  todoDataBack(username){
      console.log("heeey")
      return axios.get(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username, id){
      return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username, id){
      console.log(username, id)
      return axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}

export default new TodoDataService();