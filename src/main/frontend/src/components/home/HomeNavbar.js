import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class HomeNavbar extends Component {

    constructor(props){        
        super(props);        
        this.state = {
            username:"",
            password:"",            
            message:""
        }
    }
    
    render() {
        return (
        <header>
          <div key="homepage">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand navbar-nav" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="nav-link" key="1" to="/about">
                    <span className="sr-only">Bala Development</span>
                </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>            
            <div key="home" className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul key="navbar" className="navbar-nav mr-auto">
                    <li key="about" className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="nav-link" key="1" to="/about">
                            <span className="sr-only">About Me</span>
                        </Link>
                    </li>
                    <li key="contact" className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="nav-link" key="2" to="/contact">
                            <span className="sr-only">Contact Me</span>
                        </Link>
                    </li>
                    <li key="learnings" className="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Learnings
                        </a>
                        <div key="java" className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link" key="3" to="/java">
                                <span className="sr-only">java</span>
                            </Link>
                        <div key="jni" className="dropdown-divider"></div>
                            <Link className="nav-link" key="4" to="/jni">
                                <span className="sr-only">JNI</span>
                            </Link>
                        <div key="spring" className="dropdown-divider"></div>
                            <Link className="nav-link" key="5" to="/spring">
                                <span className="sr-only">Spring</span>
                            </Link>
                        </div>
                    </li>
                </ul>
                {/*
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>                
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                */}
            </div>            
            </nav>
          </div>
          </header>
        );
      }
}