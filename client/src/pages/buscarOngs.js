import React from "react";
import {Input, Button, Barra, IconeLupa, CaixaResultados, Resultado} from '../styles/Styles';
import {BiSearchAlt} from 'react-icons/bi';

const resultados = [
	{id: 1, ong: 'Oi'},
	{id: 2, ong: 'Olá'},
	{id: 3, ong: 'Hi'},
	{id: 4, ong: 'Hello'}
]

const BuscarOng = () => {
return (
	<div>
		<Barra>
			<Input type="text"/>
			<IconeLupa><BiSearchAlt/></IconeLupa> 
			<Button></Button>
		</Barra>
		<CaixaResultados>
			<ul>
				{resultados.map(item=>(
					<li key={item.id}>{}</li>
				))}
			</ul>
		</CaixaResultados>
	</div>
);
};

export default BuscarOng;
