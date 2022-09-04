import React, { Component } from 'react';
import styles from './SignUp.module.css' ;
import logo from '../Img/Logo.png'

class SignUp extends Component {
    constructor(){
        super()
        this.state={
            text:'',
            email:'',
            pass:''
        }
    }


    textHandler = e =>{
        this.setState({
            text:e.target.value
        })
    }

    emailHandler = e =>{
        this.setState({
            email:e.target.value
        })

    }

    passwordHandler = e =>{
        this.setState({
            pass:e.target.value
        })
    }


    submitHandler = event => {
        event.preventDefault();
        console.log(this.state.text);
        console.log(this.state.email);
        console.log(this.state.pass);
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className={styles.form}>
                    <img className={styles.logo} src={logo} alt='Logo' />
                    <input onChange={this.textHandler} type='text' value={this.state.text} placeholder='Name' />
                    <input onChange={this.emailHandler} type='email' value={this.state.email} placeholder='Example@gmail.com'/>
                    <input onChange={this.passwordHandler} type='password' value={this.state.pass} placeholder='Password' />
                    <button type='submit'>Sign up</button>
                    <p>By signin you agree to the Terms & Conditions</p>
                </div>
            </form>
        );
    }
}

export default SignUp;