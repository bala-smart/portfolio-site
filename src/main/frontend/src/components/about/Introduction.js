import React from 'react';
export default class Introduction extends React.Component{
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
                <div className="hori-center">
                    <h1>Introduction</h1>
                </div>
                <h2>My Name is Balakumar S</h2>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <ul>
                                <li>I have experience in builing SAS based product and worked as Full stack developer (End to end product development).</li>
                                <li>I love the java programming and have designed & developed multiple products in my career.</li>
                                <li>I love talking about programming, Solving problems on product.</li>
                                <li>I'm residing in Trichy, India.</li>
                            </ul>
                        </div>
                        <div className="col bg-light borader-radius bg-grey">
                            <p>I am from Electronics stream, On 3rd year of engineering learned some programming, Then i understood all the industries are evolving due to computer science in one way.</p>
                            <p>Then understood, in the world every automation works running under programming.</p>
                            <p>So i'm decided to be a part of this evolution and so i choose do programming.</p>
                        </div>
                    </div>
                </div>
           </div>
        )
    };
}