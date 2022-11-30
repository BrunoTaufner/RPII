import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai';
import {Title,Input	} from '../styles/Styles';

const Contato = () => {
return (
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
	</div>
);
};

export default Contato;

