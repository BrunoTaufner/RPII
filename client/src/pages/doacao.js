import React, { useState } from 'react';
import Footer from "../components/Footer/Footer";
import Navbar from '../components/Navbar';
import styles from '../styles/doacao.css'
import Grid from '../styles/Grid'
import axios from "axios";

import {
	Title,
	TextDoacao,
	SubtitleDoacao,
	SubmitButton
	} from '../styles/Styles';

const Doacao = () => {

	const Pix = require("../pix/Pix");
	const pix = new Pix(
	">CHAVE PIX<",
	">DESCRIÇÃO DO PAGAMENTO<",
	">NOME DO BENEFICIADO<",
	">CIDADE<",
	">TXID<",
	5.5
	);
	const payload = pix.getPayload();


	const [name, setName] = useState([]);
	const [desc, setDesc] = useState([]);
	const id = 1

	axios({
		method: "get",
		url: "http://20.168.54.19:5000/ong/"+id,
		responseType: "json",
	  }).then(function (response) {
		console.log(response.data.nome)
		setName(response.data.nome)
		setDesc(response.data.descricao)
	  });
  
	const gerarPix = () => {
		document.getElementById("gerarPix").style.display = "block";

		

	}

return (
	<>
		<Navbar/>
		<Title>Faça uma doação</Title>
		<div className={styles.container}></div>

		
		<SubtitleDoacao> Doe para a {name}</SubtitleDoacao>
		

		<TextDoacao>{desc}</TextDoacao>
		<div style={{display: "flex", justifyContent: "space-evenly"}}>
		<Grid className={styles.container}/>
		</div>
		
		<SubmitButton onClick={gerarPix}>Gerar PIX</SubmitButton>

		<div id="gerarPix" style={{display: "none"}}>
			<div style={{display: "flex", justifyContent: "space-evenly", margin: "20px"}}>

				<h1>TESTE</h1>

			</div>
		</div>


		<Footer />
		
	</>
);
};

export default Doacao;
