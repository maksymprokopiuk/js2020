import React from 'react'
import Login from './login'

import {Provider, connect} from 'react-redux'

import store from "../../components/store"
import  {setUser} from '../../components/store/action-creators'

//---------------------
let ConnectedLogin = connect(
    null,
    {setUser}
)(Login);



export default () => (
    <Provider store={store}>
        <ConnectedLogin/>
    </Provider>
)
