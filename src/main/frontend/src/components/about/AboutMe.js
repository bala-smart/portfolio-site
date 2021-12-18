import React from 'react';
import Education from './Education';
import Introduction from './Introduction';
import PersonelProjects from './PersonelProjects';
import Projects from './Projects';
import ResearchDev from './ResearchDev';
import Skills from './Skills';
import {Helmet} from 'react-helmet'
export default class AboutMe extends React.Component{
    constructor(props){        
        super(props);        
        this.state = {
            username:"",
            password:"",            
            message:""
        }
    }

    render(){
        return(
            <div className="content">                
                <Helmet>
                    <title>Software Developer | Balakumar S | Trichy</title>
                    <meta name="description" content="This is about the Balakumar S and his projects" />
                </Helmet>
                <Introduction />                           
                <Projects />
                <ResearchDev />
                <PersonelProjects />
                <Skills />
                <Education />
           </div>
        )
    };
}