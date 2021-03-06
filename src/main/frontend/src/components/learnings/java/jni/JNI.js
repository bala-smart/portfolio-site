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
sampleJavaCodeCallNative:
`
package jni;
public class JNIDemo {
    static{
        System.load("D:\\Experiment\\jni\\JNIDemo\\x64\\Release\\JNIDemo.dll");        
    }

    private native int getSum(int a,int b);

    public static void main(String args[]){
        JNIDemo jniDemo = new JNIDemo();        
        System.out.println("Sum is : "+jniDemo.getSum(10,10));
    }
}
`,
sampleCPPCodeCallNative:
`
#include <jni.h>        // JNI header provided by JDK
#include <iostream>
#include <string.h>
#include "JNIDemo.h"   // Generated
using namespace std;


JNIEXPORT int JNICALL Java_jni_JNIDemo_getSum(JNIEnv* env, jobject thisObj,jint a, jint b) {
	printf("In C, the numbers are %d and %d\n", a, b);
	return a+b;
}
`,
sampleJavaCodeAccessMembers:
`
package jni;
public class JNIDemo {
    static{
        System.load("D:\\Experiment\\jni\\JNIDemo\\x64\\Release\\JNIDemo.dll");        
    }
	
    private int number = 100;
    private static int staticNumber = 10;	
    public static void main(String args[]){
        JNIDemo jniDemo = new JNIDemo();        
        jniDemo.modifyClassMembers();       
    }
}
`,
sampleCPPCodeAccessMembers:
`
#include <jni.h>        // JNI header provided by JDK
#include <iostream>
#include <string.h>
#include "JNIDemo.h"   // Generated
using namespace std;

JNIEXPORT void JNICALL Java_jni_JNIDemo_modifyClassMembers(JNIEnv *env, jobject thisObject) {
	jclass thisClass = env->GetObjectClass(thisObject);
	jfieldID fidNumber = env->GetFieldID(thisClass, "number", "I");
	jint number;
	if (fidNumber != NULL) {
		number = env->GetIntField(thisObject, fidNumber);		
		env->SetIntField(thisClass, fidNumber, number * 100);
	}	

	jclass thisClass = env->GetObjectClass(thisObject);
	jfieldID fidNumber = env->GetStaticFieldID(thisClass, "staticNumber", "I");
	jint number;
	if (fidNumber != NULL) {
		number = env->GetStaticIntField(thisClass, fidNumber);
		//printf("The number value is %d", number);
	}
	env->SetStaticIntField(thisClass, fidNumber, number * 100);
	
}
`,
sampleJavaCodeAccessMethods:
`
package jni;

public class JNIDemo {
    static{
        System.load("D:\\Experiment\\jni\\JNIDemo\\x64\\Release\\JNIDemo.dll");        
    }
   
    private native void nativeMethod();
    private void callback(){
        System.out.println("Called from Native");
    }

    private void callbackWithArgs(String message){
        System.out.println("Called from Native with Message :"+message);
    }

    private int callbackWithArgsReturnType(int a,int b){
        System.out.println("Called from Native with arguments a="+a + " :b="+b);
        return a+b;
    }

    public static void main(String args[]){
        JNIDemo jniDemo = new JNIDemo();
        jniDemo.nativeMethod();
    }
}
`,
sampleCPPCodeAccessMethods:
`
#include <jni.h>        // JNI header provided by JDK
#include <iostream>
#include <string.h>
#include "JNIDemo.h"   // Generated
using namespace std;

JNIEXPORT void JNICALL Java_jni_JNIDemo_nativeMethod(JNIEnv *env, jobject thisObject) {
	jclass thisClass = env->GetObjectClass(thisObject);

	jmethodID callbackMethod = env->GetMethodID(thisClass, "callback", "()V");
	if (callbackMethod != NULL) {
		env->CallVoidMethod(thisClass, callbackMethod);
	}

	jmethodID callbackMethodByArgs = env->GetMethodID(thisClass, "callbackWithArgs", "(Ljava/lang/String;)V");
	if (callbackMethodByArgs != NULL) {
		jstring message = env->NewStringUTF("Hello from C");
		env->CallVoidMethod(thisClass, callbackMethodByArgs, message);
	}

	jmethodID callbackMethodByArgsAndReturn = env->GetMethodID(thisClass, "callbackWithArgsReturnType", "(II)I");
	if (callbackMethodByArgsAndReturn != NULL) {
		jint sum = env->CallIntMethod(thisClass, callbackMethodByArgsAndReturn, 10, 10);
		printf("In C, Sum is %d", sum);
	}
}
`,
            theme :rainbow,
            javaLang : "java",
            cppLang : "c++",
        }
    }

     openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
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
                            <a className="nav-link" key="1" href="#basics">
                                <span className="sr-only">JNI Basics</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="2" href="#intro">
                                <span className="sr-only">A Simple Java/C++ Project for JNI</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="3" href="#createcpp">
                                <span className="sr-only">Creating Dynamic Link Library (DLL) for c++ projects</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="4" href="#compilejava">
                                <span className="sr-only">Compiling Java Code</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="5" href="#intro">
                                <span className="sr-only">Calling C++ Method from Java</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="6" href="#passarguments">
                                <span className="sr-only">Passing arguments to c++</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="7" href="#passarguments">
                                <span className="sr-only">Return value from c++ to Java</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="8" href="#accessmembers">
                                <span className="sr-only">Accessing/Modifying class members from c++</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="9" href="#accessmembers">
                                <span className="sr-only">Accessing/Modifying static class members from c++</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" key="10" href="#accessmethods">
                                <span className="sr-only">Callback Java Instance methods and Static Methods</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="basics">
                    <h3 className="font-wg-bold">JNI Basics</h3>
                    <ul className="list-style-none">
                        <li>
                            <p>JNI uses own data type to map Java data types, i will cover those mapping in following table</p>
                            <div className="mar-le-20">                                
                                <p>1.Java Primitive, Java Non-Primitive Type</p>
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Native Type</th>
                                        <th scope="col">Java Type</th>                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>jint</td>
                                            <td>int</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>jbyte</td>
                                            <td>byte</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>jshort</td>
                                            <td>short</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>jlong</td>
                                            <td>long</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>jfloat</td>
                                            <td>float</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>jdouble</td>
                                            <td>double</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>jchar</td>
                                            <td>char</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>jboolean</td>
                                            <td>boolean</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>jclass</td>
                                            <td>java.lang.Class</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>jstring</td>
                                            <td>java.lang.String</td>                                        
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>jintArray</td>
                                            <td>int[]</td>                                        
                                        </tr>                                                                                                                                                                                                                                                                                                                                                                        
                                    </tbody>
                                    </table>
                            </div>
                        </li>
                        <li>
                            <p>2.Processing Business Logic</p>                            
                            <div className="mar-le-20 bg-grey">                                                        
                                <p>1.Receive arguments from java</p>
                                <p>2.Convert to Native Type</p>
                                <p>3.Do business logic like reverse string,sum of array, etc</p>
                                <p>4.Free the native type - Need to clear the memory</p>
                                <p>5.Create JNI object</p>
                                <p>6.Return to Java</p>
                            </div>
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
                        <li id="createcpp">
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
                        <li id="compilejava">
                            <p>5.Run Java Native Interface Project</p>
                            <div className="mar-le-20">
                                <p>Run your java class this will call java class then java will call Native method</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="passarguments">
                    <h3 className="font-wg-bold">Passing arguments to c++ and returning to java</h3>
                    <ul className="list-style-none">
                        <li>
                            <p>1.Writing Java Class to pass arguments to c++</p>
                            <div className="mar-le-20">                                
                                <CopyBlock 
                                    text={this.state.sampleJavaCodeCallNative}
                                    language={this.state.javaLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                                <br/>
                            </div>
                        </li>
                        <li>
                            <p>2.Create Console c++ projects in Visual Studio</p>
                            <div className="mar-le-20">
                                <p>Add the following source file in your project</p>
                                <CopyBlock 
                                    text={this.state.sampleCPPCodeCallNative}
                                    language={this.state.cppLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="accessmembers">
                    <h3 className="font-wg-bold">Accessing/Modifying class members from c++</h3>
                    <ul className="list-style-none">
                        <li>
                            <p>1.Writing Java Class to pass arguments to c++</p>
                            <div className="mar-le-20">                                
                                <CopyBlock 
                                    text={this.state.sampleJavaCodeAccessMembers}
                                    language={this.state.javaLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                                <br/>
                            </div>
                        </li>
                        <li>
                            <p>2.Create Console c++ projects in Visual Studio</p>
                            <div className="mar-le-20">
                                <p>Add the following source file in your project</p>
                                <CopyBlock 
                                    text={this.state.sampleCPPCodeAccessMembers}
                                    language={this.state.cppLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                                <br/>
                                <div className="mar-le-20">
                                    <h3>How to access/modify Java class members</h3>
                                    <p>1.Get the reference of object class</p>
                                    <p>2.Get the field ID of the instance.I have covered field datatype in the following table</p>
                                        <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Native Field Type</th>
                                            <th scope="col">Java Field Type</th>                                        
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>I</td>
                                                <td>int</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>B</td>
                                                <td>byte</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>S</td>
                                                <td>short</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>J</td>
                                                <td>long</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>F</td>
                                                <td>float</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>D</td>
                                                <td>double</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>C</td>
                                                <td>char</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>Z</td>
                                                <td>boolean</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>String</td>
                                                <td>Ljava/lang/String; = L(. Replaced by / in java object)</td>                                        
                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>Object</td>
                                                <td>Ljava/lang/Object;</td>                                        
                                            </tr>
                                        </tbody>
                                        </table>                                        
                                    <p>3.Get the instance variable</p>
                                    <p>4.Update the instance variable</p>
                                    <p>5.Syntex for all the methods</p>
                                    <div className="mar-le-20 bg-grey">
                                        <p>jclass  env-)GetObjectClass(jobject obj);</p>
                                        <p>jfieldID  env-)Get(Static)FieldID(jobject obj, const char *name, const char *nativeType);</p>
                                        <p>NativeType env-)Get(Static)(Type)Field(jobject obj, jfieldID fieldID);</p>
                                        <p>void  env-)Set(Static)(Type)FieldID(jobject obj, jfieldID fieldID, NativeType value);</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="accessmethods">
                    <h3 className="font-wg-bold">Callback Java Instance Method and Static Methods</h3>
                    <ul className="list-style-none">
                        <li>
                            <p>1.Writing Java Class to pass arguments to c++</p>
                            <div className="mar-le-20">                                
                                <CopyBlock 
                                    text={this.state.sampleJavaCodeAccessMethods}
                                    language={this.state.javaLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                                <br/>
                            </div>
                        </li>
                        <li>
                            <p>2.Create Console c++ projects in Visual Studio</p>
                            <div className="mar-le-20">
                                <p>Add the following source file in your project</p>
                                <CopyBlock 
                                    text={this.state.sampleCPPCodeAccessMethods}
                                    language={this.state.cppLang}
                                    showLineNumbers={false}
                                    theme={this.state.theme}
                                />
                                <br/>
                                <div className="mar-le-20">
                                    <h3>How to access Java class methods</h3>
                                    <p>1.Get the reference of object class</p>
                                    <p>2.Get the method ID of the instance.</p>                           
                                    <p>3.Call java method</p>                                    
                                    <p>5.Syntex for all the methods</p>
                                    <div className="mar-le-20 bg-grey">
                                        <p>jclass  env-)GetObjectClass(jobject obj);</p>
                                        <p>jmethodID GetMethodID(jclass cls, const char *name, const char *nativeType);</p>
                                        <p>NativeType Call(Static)(type)Method(jobject obj, jmethodID methodID, ...);</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="center">
                    <a href="https://github.com/bala-smart/JNIDemo" target="_blank">You can get full source from my github</a>
                </div>
           </div>
        )
    };
}