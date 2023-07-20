import { 
    Container, 
    AvatarCont, 
    Wrapper,
    TitleCont,
    Title 
} from "../styles/profile.css"
import Avatar from "../components/Avatar.jsx"

const Profile = () => {
    return (
        <Container>
            <AvatarCont>
                <Avatar avatar={null} username="admin" />
            </AvatarCont>
            <Wrapper>
                <Title variant="h6" component="h2" className="title-header">
                    Accont Detail
                </Title>
                <TitleCont>
                    <Title variant="subtitle1" component="h3">
                        Username:
                    </Title>
                    <Title variant="subtitle1" component="h3">
                        admin
                    </Title>
                </TitleCont>
                <TitleCont>
                    <Title variant="subtitle1" component="h3">
                        Email:
                    </Title>
                    <Title variant="subtitle1" component="h3">
                        admin@gmail.com
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
        </Container>
    )
}

export default Profile