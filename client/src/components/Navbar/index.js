import React from "react";
import { Nav, NavLink, NavMenu, Button, Center }
	from "./NavbarElements";
import Logo from '../Logo/QatoLogo2.png'
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<img src={Logo} alt="Logotipo"></img>
		<Center>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/sobre" activeStyle>
			Sobre nós
		</NavLink>
		<NavLink to="/buscarong" activeStyle>
			Buscar ONG
		</NavLink>
		<NavLink to="/eventos" activeStyle>
			Eventos
		</NavLink>
		</Center>
		</NavMenu>
		<NavLink to="/login" activeStyle>
		<Button primary> Login </Button>
		</NavLink>
	</Nav>
	</>
);
};

export default Navbar;
