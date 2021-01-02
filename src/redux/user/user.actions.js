import {SET_USER} from '../types'

export const setCurrentUser = user => ({
    type: SET_USER,
    payload: user
})