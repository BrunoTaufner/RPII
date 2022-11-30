import React from "react";
import img_animais from '../assets/img/ong-animais-abandonados.jpg'
import img_doe_sangue from '../assets/img/doe-sangue.jpeg'
import img_educacao from '../assets/img/ong.png'
import {Title, ColunaEsq, ColunaDir, TextoPost, TituloPost, LinkPost, A} from '../styles/Styles';
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar";


const Home = () => {
	return (
		<>
			<Navbar />
			<Title>Principais causas da semana</Title>

			<ColunaEsq>
				<a href=""><img src={img_educacao} width="100%"></img></a>
			</ColunaEsq>
			<ColunaDir>
				<TituloPost>Educação</TituloPost>
				<TextoPost>
				Nosso objetivo é melhorar a qualidade da Educação Básica no Brasil.
				Sem fins lucrativos, não governamental e sem ligação com partidos políticos, somos financiados por recursos privados, não recebendo nenhum tipo de verba pública.
				Isso nos garante a independência necessária para desafiar o que precisa ser desafiado, mudar o que precisa ser mudado.
				</TextoPost>
				<A href=""><LinkPost>Saiba mais</LinkPost></A>
			</ColunaDir>


			<ColunaEsq>
				<a href=""><img src={img_animais} width="100%"></img></a>
			</ColunaEsq>
			<ColunaDir>
				<TituloPost>Adoção de animais</TituloPost>
				<TextoPost>
				Visamos tirar o maior número possível de animais das ruas, tratar de possíveis traumas e doenças e integrá-los a famílias que estejam dispostas a dar muito amor e carinho.
				Amigos e voluntários dispostos a encontrar sempre o melhor lar e famílias para dar uma vida digna aos animais.
				</TextoPost>
				<A href=""><LinkPost>Saiba mais</LinkPost></A>
			</ColunaDir>


			<ColunaEsq>
				<a href=""><img src={img_doe_sangue} width="100%"></img></a>
			</ColunaEsq>
			<ColunaDir>
				<TituloPost>Doação de sangue</TituloPost>
				<TextoPost>
				Com o desejo de conscientizar os cidadãos para o hábito de doar, a ONG Vidas Recicladas iniciou a campanha de doação de sangue “Precisamos do seu amor”.
				Através de um cadastro permanente de doadores a ONG Vidas Recicladas busca ajudar a suprir a demanda dos bancos de sangue e hemocentros da região através de ações mensais de incentivo a doação.
				</TextoPost>
				<A href=""><LinkPost>Saiba mais</LinkPost></A>
			</ColunaDir>
			<Footer />
		</>
	);
};

export default Home;
