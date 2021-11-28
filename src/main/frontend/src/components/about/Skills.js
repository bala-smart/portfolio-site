import React from 'react';
export default class Skills extends React.Component{
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
            <div>                           
                <br></br>
                <div className="bg-light">
                <div className="hori-center">
                    <h1>Skills</h1>                    
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <h5>Backend</h5>
                            <ul>
                                <li>Java</li>
                                <li>c#</li>
                                <li>Node.js</li>
                                <li>Rest APIs</li>
                                <li>Express.js</li>
                                <li>cpp</li>
                                <li>c</li>
                                <li>Spring framework</li>
                                <li>Hibernate framework</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Frontend</h5>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>JavaScript</li>
                                <li>React.jS</li>
                                <li>Ember.jS</li>
                                <li>Bootsrap</li>
                            </ul>      
                        </div>
                        <div className="col">
                            <h5>Database</h5>
                            <ul>
                                <li>MSSQL</li>
                                <li>PostgreSQL</li>
                                <li>mySQL</li>
                                <li>MongoDB</li>                                
                            </ul>      
                        </div>
                        <div className="col">
                            <h5>Others</h5>
                            <ul>
                                <li>JNI - Java Native Interface</li>
                                <li>MERN Development</li>
                                <li>WebServer</li>
                                <li>Windows Server (Active Directory)</li>
                                <li>AWS</li>
                                <li>AzureAD</li>
                                <li>Servlets</li>
                            </ul>      
                        </div>
                    </div>
                </div>
                </div>                
           </div>
        )
    };
}