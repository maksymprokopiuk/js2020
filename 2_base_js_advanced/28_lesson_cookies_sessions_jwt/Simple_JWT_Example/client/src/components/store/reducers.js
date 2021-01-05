import ActionTypes from './action-types'

const usersReducer=(state,action)=>{
    switch (action.type) {
        case ActionTypes.SET_USER:
            localStorage.setItem('token',action.payload)
            return {
                isAuth:true
            }
            case ActionTypes.UNSET_USER:
                    localStorage.removeItem('token')
                    return {
                        isAuth:false
                    }            
        default:
           return state;
    }
}
export default usersReducer