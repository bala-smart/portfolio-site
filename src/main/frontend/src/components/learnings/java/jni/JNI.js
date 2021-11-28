import React from 'react';
import {Helmet} from 'react-helmet'
import {Link} from "react-router-dom";
import { CodeBlock, CopyBlock, dracula, github, googlecode, rainbow } from "react-code-blocks";
export default class JNI extends React.Component{
    constructor(props){        
        super(props);        
        this.state = {
sampleJavaCode :            
`
package jni; // Package Name
public class JNIDemo {
    static{
        System.load("D:\\Experiment\\jni\\JNIDemo\\x64\\Release\\JNIDemo.dll"); // Load Native dll from anywhere from machine
        //System.loadLibrary("JNIDemo.dll"); // Load native dll from class path
    }	
    private native void sayHello(); // This will call Native code
    public static void main(String args[]){
        JNIDemo jniDemo = new JNIDemo();
        jniDemo.sayHello();    
    }
}
`,
sampleHeader :
`
/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class JNIDemo */

#ifndef _Included_JNIDemo
#define _Included_JNIDemo
#ifdef __cplusplus
extern "C" {
#endif
	/*
	 * Class:     JNIDemo
	 * Method:    sayHello
	 * Signature: ()V
	 */
	JNIEXPORT void JNICALL Java_jni_JNIDemo_sayHello(JNIEnv*, jobject);
#ifdef __cplusplus
}
#endif
#endif#pragma once
`,
sampleCPPCode : 
`
#include <jni.h>        // JNI header provided by JDK
#include <iostream>
#include <string.h>
#include "JNIDemo.h" 
using namespace std;

// Implementation of the native method sayHello()
JNIEXPORT void JNICALL Java_jni_JNIDemo_sayHello(JNIEnv* env, jobject thisObj) {
	printf("Hello World!\n");
	return;
}
`,
            theme :rainbow,
            javaLang : "java",
            cppLang : "c++",
        }
    }

    render(){
        return(
            <div className="content">
                <Helmet>
                    <title>Bala Development | Java Native Interface</title>
                    <meta name="description" content="This about the Java Native Interface Tutorials" />
                </Helmet>
                <div id="introduction">
                    <h3 className="font-wg-bold">Introduction to Java Native Interface:</h3>
                    <p className="mar-le-40">Java Native Interface is function interface that will call Native code from JVM. Using JNI, We can call methods of c,c++, assembly language.</p>
                    <p className="mar-le-40">We are not able to accomplish some functionality like communicating with Windows OS from Java alone. So JNI is introduced.</p>
                    <div className="text-center">
                        <img src="/images/jni.jpg" className="img-fluid" alt="JNI Introduction"></img>
                    </div>
                </div>

                <div id="abstract">
                    <h3 className="font-wg-bold">I have covered following section on this course:</h3>
                    <ul>
                        <li>
                            <Link className="nav-link" key="1" to="#intro">
                                <span className="sr-only">Steps to create Java Native Interface Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="2" to="#">
                                <span className="sr-only">A Simple Java/C++ Project for JNI</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="3" to="#">
                                <span className="sr-only">Creating Dynamic Link Library (DLL) for c++ projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="4" to="#">
                                <span className="sr-only">Compiling Java Code</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="5" to="#">
                                <span className="sr-only">Calling C++ Method from Java</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="6" to="#">
                                <span className="sr-only">Passing arguments to c++</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="7" to="#">
                                <span className="sr-only">Return value from c++ to Java</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="8" to="#">
                                <span className="sr-only">Accessing/Modifying class members from c++</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="9" to="#">
                                <span className="sr-only">Accessing/Modifying static class members from c++</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" key="10" to="#">
                                <span className="sr-only">Callback Java Instance methods and Static Methods</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div id="intro">
                    <h3 className="font-wg-bold">Steps to create Java Native Interface Projects</h3>
                    <ul className="list-style-none">
                        <li>
                            <p>1.Writing of Java Class to call c++ Code then run the java file</p>
                            <div className="mar-le-20">                                
                                <CopyBlock 
                                    text={this.state.sampleJavaCode}
                                    language={this.state.javaLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                                <br/>
                                <div className="new-line bg-grey">
                                    <p>private native void sayHello() = private/public/protected <span className="font-wg-bold">native</span> returntype methodname</p>                          
                                </div>
                            </div>
                        </li>
                        <li>
                            <p>2.Generate c/c++ Header file</p>                            
                            <div className="mar-le-20">                                                        
                                <p className="bg-grey">javac -h . jni/JNIDemo.java = javac -h . filename</p>
                            </div>
                        </li>
                        <li>
                            <p>3.Create Console c++ projects in Visual Studio</p>
                            <div className="mar-le-20">
                                <p>Add following header file in your project</p>
                                <CopyBlock 
                                    text={this.state.sampleHeader}
                                    language={this.state.cppLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                                <br/>
                                <div className="new-line bg-grey">
                                    <p>JNIEXPORT void JNICALL Java_jni_JNIDemo_sayHello(JNIEnv*, jobject) = JNIEXPORT returntype JNICALL Java_Package_Class_Method(JNIEnv*, jobject, aruguments)</p>
                                    <p>JNIEnv = Reference of JNI environment used to access all JNI methods</p>
                                    <p>jobject = Reference to this object (Java Object)</p>
                                </div>
                                <br/>
                                <p>Add the following source file in your project</p>
                                <CopyBlock 
                                    text={this.state.sampleCPPCode}
                                    language={this.state.cppLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                            </div>
                        </li>
                        <li>
                            <p>4.Compile c++ Project</p>
                            <div className="mar-le-20">
                                <p>Once c++ project compiled successfully this will generate dll file (Note down the dll file location)</p>
                            </div>
                        </li>
                        <li>
                            <p>5.Run Java Native Interface Project</p>
                            <div className="mar-le-20">
                                <p>Run your java class this will call java class then java will call Native method</p>
                            </div>
                        </li>
                    </ul>
                </div>

           </div>
        )
    };
}