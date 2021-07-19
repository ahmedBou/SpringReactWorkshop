package com.compass.webservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


public class HelloWorldBean {

    private String statement;

    public HelloWorldBean(String statement) {
        this.statement = statement;
    }

    public void setStatement(String statement) {
        this.statement = statement;
    }

    public String getStatement() {
        return statement;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "statement='" + statement + '\'' +
                '}';
    }
}
