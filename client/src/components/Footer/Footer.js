import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<FooterLink href="#">Quem somos</FooterLink>
		</Column>
		<Column>
			
			<FooterLink href="#">Writing</FooterLink>
		</Column>
		<Column>
			
			<FooterLink href="#">Uttar Pradesh</FooterLink>
		</Column>
		<Column>
		
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
