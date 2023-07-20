/* eslint-disable no-throw-literal */
import store from "./features/store"
import { getUser } from "./features/user/userSlice"

export const getProfile = async () => {
    await store.dispatch(getUser())
    const { user: { user, error} } = store.getState()
    if(user.error) {
        const { msg, status, statusText  } = error
        throw { message: msg, statusText: statusText, status: status }
    }

    return user
}