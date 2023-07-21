/* eslint-disable no-throw-literal */
import store from "./features/store"
import { getUser, loginUser as login } from "./features/user/userSlice"

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