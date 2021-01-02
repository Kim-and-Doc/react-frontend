import {SET_USER} from '../types'
const INI_STATE ={
    isLoading: null,
    isAuthenticated: false,
    currentUser: null
}

const userReducer = (state = INI_STATE, {type, payload})=>{
    switch (type) {
        case SET_USER:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                currentUser: payload
            };
        default:
            return state;
    }
}
export default userReducer;