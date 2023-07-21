/* eslint-disable no-throw-literal */
import store from "./features/store"
import { 
    getUser, 
    loginUser as login, 
    registerUser
} from "./features/user/userSlice"

export const register = async (data) => {
    if(data.password !== data.confPassword) {
        throw {
            msg: "Password do not match",
            staus: 500,
            statusText: "Bad Request"
        }
    }
    await store.dispatch(registerUser({username: data.username, email: data.email, password: data.password}))

    const {user: { error }} = store.getState()
    if(error) {
        throw {
            msg: error.msg,
            status: error.status,
            statusText: error.statusText
        }
    }

    return null
} 

export const loginUser = async (data) => {
    await store.dispatch(login(data))
    const { user: { user, error } } = store.getState()

    if(error) {
        const { msg, status, statusText } = error
        throw { msg, status, statusText }
    }

    return user
}

export const loggedInUser = async () => {
    !store.getState().user.user && await store.dispatch(getUser())
    // console.log(store.getState().user.user)
    return store.getState().user.user
}