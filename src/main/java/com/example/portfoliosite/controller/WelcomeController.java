package com.example.portfoliosite.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class WelcomeController {

    @GetMapping("/api/welcome")
    public String welcome(){
        return "Welcome to java aws demo";
    }
}
