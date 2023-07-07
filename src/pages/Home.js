import React from "react";
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
	return (
		<div>
			<Anouncement />
			<Navbar />
            <Slider />
            <Categories />
		</div>
	);
};

export default Home;
