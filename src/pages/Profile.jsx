import { 
    Container, 
    AvatarCont, 
    Wrapper,
    TitleCont,
    Title, 
    LogoutIcon,
    SButton as Button,
    UploadCont,
    Label,
    Input
} from "../styles/profile.css"
import Avatar from "../components/Avatar.jsx"
import { requireAuth } from "../util"
import { Await, defer, useLoaderData, useNavigate } from "react-router-dom"
import { Suspense, useState } from "react"
import { useDispatch } from "react-redux"
import { logoutUser, updateUser } from "../features/user/userSlice"
import Loader from "../components/Loader"
import axios from "axios"

export const loader = async ({request}) => {
    return defer({user: requireAuth(request)})
}

const Profile = () => {
    const [imagePreview, setImagePreview] = useState(null)
    const loaderData = useLoaderData()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/", {replace: true})
    }

    const renderProfile = (user) => {

        const handleProfileImage = async (e) => {
            const file = e.target.files[0]
            setImagePreview(URL.createObjectURL(file))
            try {
                if(file && (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg")) {
                    const formData = new FormData()
                    formData.append("file", file)
                    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)
                    
                    const res = await axios.post(`${process.env.REACT_APP_CLAUDINARY_BASE_URL}/image/upload`, formData)
                    
                    dispatch(updateUser({ avatar: res.data.secure_url }))
                }
            } catch (error) {
                console.log(error)
            }
        }

        return (
        <>
            <AvatarCont>
                <Avatar 
                    avatar={imagePreview || user.avatar} 
                    username={user.username} 
                    width={100} 
                    height={100} 
                    font={3.5} 
                />
                <UploadCont>
                    <Label>
                        <Input type='file' accept="image/png, image/jpeg" onChange={handleProfileImage} />
                        Edit
                    </Label>
                </UploadCont>
            </AvatarCont>
            <Wrapper>
                
                <Title variant="h6" component="h2" className="title-header">
                    Accont Detail <Button onClick={handleLogout}><LogoutIcon /> Log out</Button>
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
                        Name:
                    </Title>
                    <Title variant="subtitle1" component="h3">
                        {user.name || "N/A"}
                    </Title>
                </TitleCont>
                <TitleCont>
                    <Title variant="subtitle1" component="h3">
                        Gender:
                    </Title>
                    <Title variant="subtitle1" component="h3">
                        {user.gender || "N/A"}
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
                        {user.address?.village || "N/A"}
                    </Title>
                </TitleCont>
                <TitleCont>
                    <Title variant="subtitle1" component="h3">
                        City:
                    </Title>
                    <Title variant="subtitle1" component="h3">
                        {user.address?.city || "N/A"}
                    </Title>
                </TitleCont>
                <TitleCont>
                    <Title variant="subtitle1" component="h3">
                        State:
                    </Title>
                    <Title variant="subtitle1" component="h3">
                        {user.address?.state || "N/A"}
                    </Title>
                </TitleCont>
                <TitleCont>
                    <Title variant="subtitle1" component="h3">
                        Country:
                    </Title>
                    <Title variant="subtitle1" component="h3">
                        {user.address?.country || "N/A"}
                    </Title>
                </TitleCont>
            </Wrapper>
        </>
    )}

    return (
        <Container>
            <Suspense fallback={<Loader />}>
                <Await resolve={loaderData.user}>{renderProfile}</Await>
            </Suspense>
        </Container>
    )
}

export default Profile