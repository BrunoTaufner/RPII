import React from 'react';
import { FaBars } from 'react-icons/fa';
import insta from './instagram.jpg'
import face from './facebook.png'
import linkedin from './linkedin.png'
import twitter from './twitter.jpg'
import {
	Title,
	Input
	} from '../styles/Styles';
const Contato = () => {
return (
	<div>
	<Title>Contato</Title>
	<Input></Input>
	<h1>  Entre em contato com a gente: <br/>qatodoacoes@qato.com.br<br/><br/><br/>Encontre-nos nas redes sociais:</h1>
	
	<a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={insta} alt = ""/>
        </a>
		<a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={face} alt = ""/>
        </a>
		<a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src={linkedin} alt = ""/>
        </a>
		<a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={twitter} alt = ""/>
        </a>
	</div>
);
};

export default Contato;

