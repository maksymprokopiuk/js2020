import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

export default function authRequired(ProtectedComponent){
    class Authorized extends Component {
        componentWillMount(){
            if(!localStorage.token)
            this.props.history.push('/login')
        }
        componentWillUpdate(){
            if(!localStorage.token)
                this.props.history.push('/login')
        }
        render() { 
            return ( 
                <ProtectedComponent {...this.props}/>
             );
        }
    }
    

    return withRouter( Authorized)
}
