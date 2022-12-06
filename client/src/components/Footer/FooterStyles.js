import styled from 'styled-components';

export const Box = styled.div`
position: relative;
height: 20px;
background-color: #FFFFF;
bottom: 0px;
left: 0px;
right: 0px;
margin-bottom: 0px;
box-shadow: 2px 2px 20px lightblue;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	background: #FFFF;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #lightgrey;
margin-bottom: 5px;
font-size: 14px;
text-decoration: none;

&:hover {
	color: #538EF5;
	transition: 200ms ease-in;
}
`;