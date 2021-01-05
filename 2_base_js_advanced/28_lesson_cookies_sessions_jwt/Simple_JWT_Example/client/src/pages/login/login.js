import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import axios from 'axios'
 class Login extends Component {
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
        }

        

        try {
            const response = await axios.post('http://localhost:3000/users/login', user);
            this.props.setUser(response.data.token)
            this.props.history.push('/')
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

                <input type='submit' value='send' onClick={(e)=>this.sendData(e)}/>        
            </form>
            {
                errorMsg?errorMsg:''
            }
    </>
         );
    }
}

export default withRouter(Login);