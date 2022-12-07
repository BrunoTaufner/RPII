import React from "react";
import { Nav, NavLink, NavMenu, Button, Center }
	from "./NavbarElements";
import Logo from '../Logo/QatoLogo2.png'

const Navbar = () => {
return (
	<>
	<Nav>
		<Center>
			<NavMenu>
				<a href="/">
					<img src={Logo} alt="Logotipo"></img>
				</a>
			</NavMenu>	
			<NavLink to="/" activeStyle>
				Home
			</NavLink>
			<NavLink to="/catalog" activeStyle>
				Buscar ONG
			</NavLink>
			<NavLink to="/contato" activeStyle>
				Contato
			</NavLink>
			<NavLink to="/login" activeStyle>
				<Button primary> Login </Button>
			</NavLink>
		</Center>
	</Nav>
	</>
);
};

export default Navbar;
