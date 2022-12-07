import React from "react";
import { Nav, NavLink, NavMenu, Button, Center }
	from "./NavbarElements";
import Logo from '../Logo/QatoLogo2.png'

const Navbar = () => {
return (
	<>
	<Nav>
		<Center>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/sobre" activeStyle>
			Sobre nós
		</NavLink>
		<NavLink to="/catalog" activeStyle>
			Buscar ONG
		</NavLink>
		<NavLink to="/eventos" activeStyle>
			Eventos
		</NavLink>
		</Center>
	</Nav>
	</>
);
};

export default Navbar;
