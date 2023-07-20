import { 
    Container, 
    AvatarCont, 
    Wrapper,
    TitleCont,
    Title, 
    LogoutIcon,
    SButton as Button
} from "../styles/profile.css"
import Avatar from "../components/Avatar.jsx"
import { requireAuth } from "../util"
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom"
import { getProfile } from "../api"
import { Suspense } from "react"
import { useDispatch } from "react-redux"
import { logoutUser } from "../features/user/userSlice"

export const loader = async ({request}) => {
    await requireAuth(request)
    return defer({user: getProfile()})
}

const Profile = () => {
    const loaderData = useLoaderData()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/login", {replace: true})
    }

    const renderProfile = (user) => (<>
        <AvatarCont>
            <Avatar 
                avatar={user.avatar} 
                username={user.username} 
                width={100} 
                height={100} 
                font={3.5} 
            />
        </AvatarCont>
        <Wrapper>
            <Button onClick={handleLogout}><LogoutIcon /> Log out</Button>
            <Title variant="h6" component="h2" className="title-header">
                Accont Detail
            </Title>
            <TitleCont>
                <Title variant="subtitle1" component="h3">
                    Username:
                </Title>
                <Title variant="subtitle1" component="h3">
                    {user.username}
                </Title>
            </TitleCont>
            <TitleCont>
                <Title variant="subtitle1" component="h3">
                    Email:
                </Title>
                <Title variant="subtitle1" component="h3">
                    {user.email}
                </Title>
            </TitleCont>
            
            <Title variant="h6" component="h2" className="title-header">
                Address
            </Title>
            <TitleCont>
                <Title variant="subtitle1" component="h3">
                    Village:
                </Title>
                <Title variant="subtitle1" component="h3">
                    N/A
                </Title>
            </TitleCont>
            <TitleCont>
                <Title variant="subtitle1" component="h3">
                    City:
                </Title>
                <Title variant="subtitle1" component="h3">
                    N/A
                </Title>
            </TitleCont>
            <TitleCont>
                <Title variant="subtitle1" component="h3">
                    State:
                </Title>
                <Title variant="subtitle1" component="h3">
                    N/A
                </Title>
            </TitleCont>
            <TitleCont>
                <Title variant="subtitle1" component="h3">
                    Country:
                </Title>
                <Title variant="subtitle1" component="h3">
                    N/A
                </Title>
            </TitleCont>
        </Wrapper>
    </>)

    return (
        <Container>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Await resolve={loaderData.user}>{renderProfile}</Await>
            </Suspense>
        </Container>
    )
}

export default Profile