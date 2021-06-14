import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            password:null
        }
    }
    Login()
    {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q="+ this.state.name).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
                if (resp.length>0){
                    console.warn(this.props.history.push('list'))
                }
                else{
                    alert("please check username and password")
                }
            })
        })
    }
    render() {
        return (
            <div>
                <input 
                placeholder="enter name"
                type="text" name="user" onChange={(event)=>this.setState({name:event.target.value})}/> <br/>
                <input 
                placeholder="enter password"
                type="text" name="password" onChange={(event)=>this.setState({password: event.target.value})}/><br/>
                <button onClick={()=>{this.Login()}}>Login</button>
            </div>
        );
    }
}

export default Login;