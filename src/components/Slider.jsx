import { useState } from "react";
import { sliderItems } from "../data";
import {
    Container,
    Arrow,
    ArrowLeftIcon,
    ArrowRightIcon,
    Slide,
    Wrapper,
    ImageContainer,
    InfoContainer,
    Image,
    Title,
    Desc,
    SButton as Button
} from "../styles/slider.css";

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
        <Container elevation={2}>
            <Arrow dir="left" onClick={() => handleClick("left")}><ArrowLeftIcon /></Arrow>
                <Wrapper slideidx={slideIdx}>
                    {sliderItems.map(item => (
                        <Slide bg={item.bg} key={item.id}>
                            <ImageContainer><Image src={item.img} /></ImageContainer>
                            <InfoContainer>
                                <Title variant="subtitle1" component="h2">
                                    {item.title}
                                </Title>
                                <Desc variant="body2">{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
            <Arrow dir="right" onClick={() => handleClick("right")}><ArrowRightIcon /></Arrow>
        </Container>
	);
};

export default Slider;
