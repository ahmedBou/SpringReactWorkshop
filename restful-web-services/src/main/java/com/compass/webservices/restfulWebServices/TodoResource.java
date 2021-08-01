package com.compass.webservices.restfulWebServices;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class TodoResource {

    private final TodoHardcodedService todoService;

    public TodoResource(TodoHardcodedService todoService) {
        this.todoService = todoService;

    }

    /*
        public TodoResource(TodoHardcodedService todoService) {
            this.todoService = todoService;
        }
    */
    @GetMapping(path="users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        //Thread.sleep(3000);
        return todoService.findAll();
    }

    @DeleteMapping(path = "users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        Todo todo = todoService.deleteById(id);
        if(todo != null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(path="users/{username}/todos/{id}")
    public Todo getTodos(@PathVariable String username, @PathVariable long id){
        //Thread.sleep(3000);
        System.out.println(todoService.findById(id));
        return todoService.findById(id);
    }

    @PutMapping(path = "users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id,
                                           @RequestBody Todo todo){
        Todo todoUpdated = todoService.saveTodo(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }
    @PostMapping(path = "users/{username}/todos")
    public ResponseEntity<Void> postTodo(@PathVariable String username, @RequestBody Todo todo){
        Todo createdTodo = todoService.saveTodo(todo);
        // Location
        // Get current resource url
        //{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }


}
