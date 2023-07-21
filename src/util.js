import { redirect } from "react-router-dom"
import { getUser } from "./features/user/userSlice"
import store from "./features/store"
import { loggedInUser } from "./api"

export const requireAuth = async (request) => {
    const pathname = new URL(request.url).pathname
    await store.dispatch(getUser())
    const user = await loggedInUser()
    
    if(!user) {
        throw redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
        )
    }

    return user
}