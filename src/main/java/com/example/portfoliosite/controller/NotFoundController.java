package com.example.portfoliosite.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class NotFoundController {
    @RequestMapping(value = "/{[path:[^\\.]*}")
    //@RequestMapping(value = "/**/{path:[^\\.]*}")
    //@RequestMapping(value = "/**/{path:[^\\.]*}")
    //@RequestMapping("/{path:[^\\.]+}/*")
    //@RequestMapping(value = {"/", "/about/*", "/contact/*","/learn/*"})
    //@RequestMapping(value = "/{path:[^\\.]*}")
    /*
     * Redirects all routes to FrontEnd except: '/', '/index.html', '/api', '/api/**'
     */
//    @RequestMapping(value = "{_:^(?!index\\.html|api).*$}")
    public String redirect() {
        return "forward:/index.html";
    }

//    @ExceptionHandler(value = {Exception.class})
//    public String notFoundErrorHandler() {
//        return "forward:/index.html";
//    }
}
