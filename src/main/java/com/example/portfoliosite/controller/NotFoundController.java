package com.example.portfoliosite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NotFoundController {
    //@RequestMapping(value = "/{[path:[^\\.]*}")
    //@RequestMapping(value = "/**/{path:[^.]*}")
    @RequestMapping("/{path:[^\\.]+}/**")
    public String redirect() {
        return "forward:/index.html";
    }
}
