import ActionTypes from './action-types'

export function setUser(token) {
    return {
        type:ActionTypes.SET_USER,
        payload:token
    }
}
export function unsetUser() {
    return {
        type:ActionTypes.UNSET_USER
    }
}
