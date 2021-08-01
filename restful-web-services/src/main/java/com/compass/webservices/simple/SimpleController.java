package com.compass.webservices.simple;


import com.compass.webservices.simple.HelloWorldBean;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class SimpleController {

    @GetMapping(path="/hello")
    public String helloWorld(){
        return "Hello world from backend" ;
    }

    @GetMapping(path="/hello-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello world");
    }

    @GetMapping(path="/hello-bean/{name}")
    public HelloWorldBean helloPathVariable(@PathVariable String name){
        return new HelloWorldBean("Hello "+name);
    }

}
