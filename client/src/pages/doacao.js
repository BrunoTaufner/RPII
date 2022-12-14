
import React, { useState } from 'react';
import Footer from "../components/Footer/Footer";
import Navbar from '../components/Navbar';
import styles from '../styles/doacao.css'
import axios from "axios";


import {
	Title,
	TextDoacao,
	SubtitleDoacao,
	SubmitButton,
	InputDoacao,
	BlueButton
	} from '../styles/Styles';
import { useLocation } from 'react-router-dom';

const Doacao = () => {


	const { state } = useLocation();
	console.log(state)

	var button = document.getElementsByClassName("BlueButton");
	
	var addSelectClass = function(){
		removeSelectClass();
		this.classList.add('selected');	
	}

	var removeSelectClass = function(){
		for (var i =0; i < button.length; i++) {
			button[i].classList.remove('selected')
		}
	}
	
	for (var i =0; i < button.length; i++) {
		button[i].addEventListener("click",addSelectClass);
	}

	const [name, setName] = useState([]);
	const [desc, setDesc] = useState([]);
	const [Pix, setPix] = useState([]);

	var valor = null

	var id = 1
	const email = null
	const nome = null


	const handleChange = event => {
		console.log(event.target.value)
		valor = event.target.value;
	}

	axios({
		method: "get",
		url: "http://18.205.161.218:5000/ong/"+id,
		responseType: "json",
	  }).then(function (response) {
		console.log(response.data.nome)
		setName(response.data.nome)
		setDesc(response.data.descricao)
		this.nome = response.data.nome
		this.email = response.data.email
	  });
  
	const gerarPix = () => {
		console.log("Valor:",typeof valor)
		if (valor) {
			document.getElementById("gerarPix").style.display = "block";
			const Pix = require("../pix/Pix");
			const pix = new Pix(
			"tedst",
			"Qato",
			"nome",
			"São Paulo",
			">TXID<",
			Number(valor)
			);
			setPix(pix.getPayload())

			console.log("payload:",Pix)
		}

	}



return (
	<>
		<Navbar />
		<Title>Faça uma doação</Title>
		<div className={styles.container}></div>
		<SubtitleDoacao> Doe para a {name}</SubtitleDoacao>
		

		<TextDoacao>{desc}</TextDoacao>
		<div style={{display: "flex", justifyContent: "space-evenly"}}>
		<div className="container" id="wrapper">

		<div class = "button selected" className="item"><BlueButton onClick={() => valor = 10}>R$ 10</BlueButton></div>
		<div class = "button" className="item"><BlueButton onClick={() => valor = 20}>R$ 20</BlueButton></div>
		<div className="item"><BlueButton onClick={() => valor = 40}>R$ 40</BlueButton></div>
		<div className="item"><BlueButton onClick={() => valor = 60}>R$ 60</BlueButton></div>
		<div className="item"><BlueButton onClick={() => valor = 80}>R$ 80</BlueButton></div>
		<div className="item"><InputDoacao value={valor} onChange={handleChange} placeholder="Outro valor" style={{display: "flex", justifyContent: "space-evenly"}}></InputDoacao></div>
   
		</div>
		</div>
		
		<SubmitButton onClick={gerarPix}>Gerar PIX</SubmitButton>

		<div id="gerarPix" style={{display: "none"}}>
				<div style={{display: "flex", alignItems: "center"}}>  
					<div style={{display: "flex", justifyContent: "space-evenly", padding:"20px"}}>
					<SubtitleDoacao>Pix para doação:</SubtitleDoacao>
				
					<h3 style={{padding: "20px"}}>{Pix}</h3>
				</div>
			</div>
		</div>


		<Footer />
		
	</>
);
};

export default Doacao;
