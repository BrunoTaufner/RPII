import React from 'react';
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar";
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai';
import {Title,Input	} from '../styles/Styles';

const Contato = () => {
return (
	<>
			<Navbar />

	<div style={{margin: '0 40px'}}>
	<Title>Contato</Title>
	
	<h1>  Entre em contato com a gente: <br/>qatodoacoes@qato.com.br<br/><br/><br/>Encontre-nos nas redes sociais:</h1>
	<a href="https://instagram.com" target="_blank" rel="noreferrer" marginLeft>
		<AiFillInstagram size={85} color= "#553c9a"/>
        </a>
		<a href="https://facebook.com" target="_blank" rel="noreferrer">
		<AiFillFacebook size={85} color= "#553c9a" />
        </a>
		<a href="https://linkedin.com" target="_blank" rel="noreferrer">
		<AiFillLinkedin size={85} color= "#553c9a"/>
        </a>
		<a href="https://twitter.com" target="_blank" rel="noreferrer">
         <AiFillTwitterSquare size={85} color= "#553c9a"/>
        </a>
		<br/><br/><br/><br/>
		<h2>Nossa localização:</h2>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3919752665347!2d-46.50263848542413!3d-23.482386964564853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6040e389220d%3A0xa1fd2f073b87bdea!2sEACH%20(USP%20Leste)%20Escola%20de%20Artes%2C%20Ci%C3%AAncias%20e%20Humanidades%20da%20Universidade%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1670263023166!5m2!1spt-BR!2sbr" 
		width="600" 
		height="450" 
		style={{ border: 0 }} 
		allowfullscreen="" 
		frameBorder="0"
		aria-hidden="false"
		loading="lazy" 
		referrerpolicy="no-referrer-when-downgrade">
		</iframe>
		</div>
		<Footer></Footer>
		</>
);
};

export default Contato;

