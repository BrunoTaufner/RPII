import React from "react";
import img_animais from '../assets/img/ong-animais-abandonados.jpg'
import img_doe_sangue from '../assets/img/doe-sangue.jpeg'
import img_educacao from '../assets/img/ong.png'
import {Title, ColunaEsq, ColunaDir, TextoPost, TituloPost} from '../styles/Styles';

const Home = () => {
	return (
		<div>
			<Title>Principais causas da semana</Title>

			<ColunaEsq>
				<img src={img_animais} width="100%"></img>
			</ColunaEsq>

			<ColunaDir>
				<TituloPost>Adoção de animais</TituloPost>
				<br></br>
				<TextoPost>
					Lorem ipsum dolor sit amet, consectetur adipisci elit,
					sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrum exercitationem ullam
					corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur. Quis aute iure reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</TextoPost>
			</ColunaDir>
			
			<ColunaEsq>
				<img src={img_doe_sangue} width="100%"></img>
			</ColunaEsq>

			<ColunaDir>
				<TituloPost>Doação de sangue</TituloPost>
				<br></br>
				<TextoPost>
					Lorem ipsum dolor sit amet, consectetur adipisci elit,
					sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrum exercitationem ullam
					corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur. Quis aute iure reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</TextoPost>
			</ColunaDir>

			<ColunaEsq>
				<img src={img_educacao} width="100%"></img>
			</ColunaEsq>

			<ColunaDir>
				<TituloPost>Educação</TituloPost>
				<br></br>
				<TextoPost>
					Lorem ipsum dolor sit amet, consectetur adipisci elit,
					sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrum exercitationem ullam
					corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur. Quis aute iure reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</TextoPost>
			</ColunaDir>
			
		</div>
	);
};

export default Home;
