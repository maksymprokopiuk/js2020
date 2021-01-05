import React from 'react'
import Main from './main'
import {Provider, connect} from 'react-redux'

import store from "../../components/store"
import  {unsetUser} from '../../components/store/action-creators'
//---------------------
const mapStateToProps = (state) => {
    return {
        isAuth:state.isAuth,
    }
}
//---------------------
let ConnectedMain = connect(
    mapStateToProps,
    {unsetUser}
)(Main);

export default () => (
    <Provider store={store}>
        <ConnectedMain/>
    </Provider>
)


