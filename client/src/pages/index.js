import React from "react";
import ong_animais from '../assets/img/ong-animais-abandonados.jpg'
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import {Title, Box, BoxText} from '../styles/Styles';
const Home = () => {
	return (
		<>
			<Navbar/>
			<Box>
				<Title>Principais causas da semana</Title>
				<img src={ong_animais} width="30%"></img>
				<BoxText>
					Lorem ipsum dolor sit amet, consectetur adipisci elit,
					sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrum exercitationem ullam
					corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur. Quis aute iure reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</BoxText>
			</Box>
			<Footer/>
		</>

	);
};

export default Home;
