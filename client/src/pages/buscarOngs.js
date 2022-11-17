import React from "react";
import {Input, Button, Barra, IconeLupa} from '../styles/Styles';
import {BiSearchAlt} from 'react-icons/bi';

const BuscarOng = () => {
return (
	<Barra>
		<Input type="text"/>
		<IconeLupa><BiSearchAlt/></IconeLupa> 
		<Button></Button>
	</Barra>
);
};

export default BuscarOng;
