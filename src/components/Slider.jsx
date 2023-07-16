import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import {
	Container,
	Arrow,
	Wrapper,
	Slide,
	ImageContainer,
	Image,
	InfoContainer,
	Title,
	Desc,
	Button
} from "../styles/slider";

const Slider = () => {
	const [slideIdx, setSlideIdx] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIdx((prevIdx) => (prevIdx > 0 ? prevIdx - 1 : 2));
		} else {
			setSlideIdx((prevIdx) => (prevIdx < 2 ? prevIdx + 1 : 0));
		}
	};

	return (
		<Container>
			<Arrow $direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper $slideIdx={slideIdx}>
				{sliderItems.map((item) => (
					<Slide $bg={item.bg} key={item.id}>
						<ImageContainer>
							<Image src={item.img} />
						</ImageContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow $direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
