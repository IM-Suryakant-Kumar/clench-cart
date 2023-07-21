import { redirect } from "react-router-dom"
import { getUser } from "./features/user/userSlice"
import store from "./features/store"

export const requireAuth = async (request) => {
    const pathname = new URL(request.url).pathname
    await store.dispatch(getUser())
    const {user: { user }} = store.getState()
    
    if(!user) {
        throw redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
        )
    }

    // if(pathname === "/login" || pathname === "/signup") {
    //     throw redirect("/")
    // }
}