import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import '../Components/Login.css';

export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state={
            username:"",
            password:"",
            loggedIn
        }
        
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

onChange(e) {
    this.setState({
            [e.target.name]: e.target.value
    })
}

submitForm(e) {
    e.preventDefault()
    const{username, password} = this.state
    //login magic
    if(username === "A" && password === "B") {
      localStorage.setItem("token", "jkcanjhbjkbsdkjkcajnd")        
      this.setState({
                loggedIn: true
              })

            }

}


  render() {
    if (this.state.loggedIn){
      return <Redirect to="/admin"/>
    }
    return (
      <div class="login">
        <form onSubmit={this.submitForm}>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/> &nbsp;
            <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/> &nbsp;
            <input type="Login" value="Login" />  
        </form>
      </div>
    )
  }
}
