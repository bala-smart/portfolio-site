package com.example.portfoliosite.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {
    @Autowired
    @PostMapping("/api/login")
    public void authenticate(){
        System.out.println("Test");
    }
}
