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
	Input,
} from "./profile.css";
import { useState } from "react";
import { Loader, Avatar } from "../../components";
import axios from "axios";
import {
	useGetProfileQuery,
	useLogoutMutation,
	useUpdateProfileMutation,
} from "../../features/apis";

const Profile = () => {
	const { data, isLoading } = useGetProfileQuery();
	const [logout, { isLoading: isLogoutLoding }] = useLogoutMutation();
	const [updateProfile, { isLoading: isUpdateProfileLoading }] =
		useUpdateProfileMutation();

	const [imagePreview, setImagePreview] = useState(null);

	let user;
	data && (user = data.user);

	const handleProfileImage = async e => {
		const file = e.target.files[0];
		setImagePreview(URL.createObjectURL(file));
		try {
			if (
				file &&
				(file.type === "image/png" ||
					file.type === "image/jpg" ||
					file.type === "image/jpeg")
			) {
				const formData = new FormData();
				formData.append("file", file);
				formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

				const res = await axios.post(
					`${process.env.REACT_APP_CLAUDINARY_BASE_URL}/image/upload`,
					formData
				);

				updateProfile({ avatar: res.data.secure_url });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return isLoading ? (
		<Loader />
	) : (
		<Container>
			<AvatarCont>
				<Avatar
					avatar={imagePreview || user.avatar}
					username={user.name}
					width={100}
					height={100}
					font={3.5}
				/>
				<UploadCont>
					<Label>
						<Input
							type="file"
							accept="image/png, image/jpeg"
							disabled={isUpdateProfileLoading}
							onChange={handleProfileImage}
						/>
						Edit
					</Label>
				</UploadCont>
			</AvatarCont>
			<Wrapper>
				<Title variant="h6" component="h2" className="title-header">
					Accont Detail{" "}
					<Button disabled={isLogoutLoding} onClick={logout}>
						<LogoutIcon /> Log out
					</Button>
				</Title>
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
		</Container>
	);
};

export default Profile;
