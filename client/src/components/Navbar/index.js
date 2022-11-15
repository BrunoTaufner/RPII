import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import Logo from '../Logo/QatoLogo2.png'

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<img src={Logo} alt="Logotipo"></img>

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
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
