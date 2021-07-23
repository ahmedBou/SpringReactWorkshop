import axios from "axios";

class HelloWorldService{
   executeHelloWorldService(){
       console.log("executed service")
       return axios.get("http://localhost:8080/hello-bean")
   }
    executeHelloBean(){
        console.log("executeHelloBean")
        return axios.get("http://localhost:8080/hello-bean")
    }
    executeHelloPathVariable(name){
       console.log("path variable"+ axios.get(`http://localhost:8080/hello-bean/${name}`))
       return axios.get(`http://localhost:8080/hello-bean/${name}`)
    }
}
export default new HelloWorldService();