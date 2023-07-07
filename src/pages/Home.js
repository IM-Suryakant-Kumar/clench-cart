import React from "react";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Slider from "../components/Slider";

const Home = () => {
	return (
		<div>
			<Anouncement />
			<Navbar />
            <Slider />
		</div>
	);
};

export default Home;
