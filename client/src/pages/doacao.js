import React from 'react';
import { FaBars } from 'react-icons/fa';
import Footer from "../components/Footer/Footer";
import Navbar from '../components/Navbar';

import {
	Title,
	Input
	} from '../styles/Styles';
const Doacao = () => {
return (
	<>
		<Navbar/>
		<Title>Faça uma doação</Title>
		<Input></Input>
		<Footer />
	</>
);
};

export default Doacao;
