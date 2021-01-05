import React, { Component } from 'react';
import axios from 'axios'
 class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            errorMsg:''
        }

    }
    sendData=async (e)=>{
        e.preventDefault()
        const user={
            'email':this.refs.email.value,
            'password':this.refs.password.value,
            'nick':this.refs.nick.value,
        }
        // axios.post('http://localhost:3000/users/login',user)
        // .then((res)=>{
        //     if
        //     this.props.history.push('/')
        // })
        // .catch((err)=>{
        //     this.setState({
        //         errorMsg:err.message
        //     })
        // })
        

        try {
            const response = await axios.post('http://localhost:3000/users/signup', user);
            const token = response.data.token;
            localStorage.token = token;
            return true;
        } catch (err) {
            throw err;
        }

    }
    render() { 
        const {errorMsg}= this.state
        return (
        <>
            <form >
                <label>
                    Email :
                    <input ref="email" type='email' />
                </label>
                <label>
                    Password :
                    <input ref="password"  type='password' />
                </label>
                <label>
                    Nick :
                    <input ref="nick"  type='text' />
                </label>
                <input type='submit' value='send' onClick={(e)=>this.sendData(e)}/>        
            </form>
            {
                errorMsg?errorMsg:''
            }
    </>
         );
    }
}

export default Signup;