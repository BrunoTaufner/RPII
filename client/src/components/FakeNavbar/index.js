import React from "react";
import { Nav, NavLink, NavMenu, Button, Center }
	from "./NavbarElements";
import Logo from '../Logo/QatoLogo2.png'

const FakeNavbar = () => {
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
				<Button primary>Meu Perfil</Button>
			</NavLink>
		</Center>
	</Nav>
	</>
);
};

export default FakeNavbar;
