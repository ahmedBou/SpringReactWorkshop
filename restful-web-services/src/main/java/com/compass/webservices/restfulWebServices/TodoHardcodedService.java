package com.compass.webservices.restfulWebServices;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static final  List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;
    static {
        todos.add(new Todo(++idCounter, "pattu", "partir se ballader", new Date(), false ));
        todos.add(new Todo(++idCounter, "pattu", "manger manger manger", new Date(), false ));
        todos.add(new Todo(++idCounter, "pattu", "nager a la plage", new Date(), false ));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo saveTodo(Todo todo){
        if(todo.getId()== -1 || todo.getId() == 0){
            todo.setId(idCounter++);
        }else{
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }

    public Todo deleteById(long id){
        Todo todo= findById(id);
        if(todo == null) return null;

        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(long id){
        for(Todo todo: todos){
            if(todo.getId() == id ){
                return todo;
            }
        }
        return null;
    }
}
