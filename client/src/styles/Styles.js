import {FaBars} from 'react-icons/fa';
import {BiSearchAlt} from 'react-icons/bi';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  @font-face {
    font-family: 'Helvetica';
    src: local(''), url(fonts/helvetica-rounded-bold.otf) format('otf');
  }
`;

export const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    color: #538EF5;
    font-size: 1em;
    border: 1px solid transparent;
	  margin: 0;
    position: absolute;

    box-shadow: 0 0 0 0;
    outline: 0;

    left: 46%;
    top: 46.4%;
    width: 88.5%;
    
    
    transform: translate(-50%, -50%);	
  `;

export const Button = styled.button`
  background: transparent;
  border-color: transparent;
  
  
  padding: 5px;
  margin: 0;
  display: flex;
  position: absolute;
  top: 4.5%;
  right: 1%;
  align: right;
  
  height: 90%; 
  width: 7.9%;

`;

export const Barra = styled.div`
  color: #538EF5;
  background: transparent;
  border: 2px solid #538EF5;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  margin: 1rem;
  position: absolute;
  top: 17.5%;
  left: 37%; 
  width: 25%;
  height: 3%; 
`

export const IconeLupa = styled.div`
  font-size: 20px;
  color: #538EF5;
  
  padding: 5px;
  margin: 0;
  display: flex;
  position: absolute;
  top: 1%;
  right: 0.5%;
  align: right;
`
export const CaixaResultados = styled.div`
  color: black;
  background: transparent;
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  margin: 1rem;
  position: absolute;
  top: 25%;
  height: 100%;
  width: 96%;
`
export const Resultado = styled.div`
  color: black;
  background: transparent;
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  margin: 1rem;
  position: absolute;
  top: 0%;
  height: 20%;
  width: 30%;
`
export const ColunaEsq = styled.div `
  // border: 3px solid red;
  float: left;
  width: 30%;
  height:400px;
  margin-left: 20%;
  display: flex;
  align-items: center;
// background-color:#aaa;border: 2px solid red;
  `;
export const ColunaDir = styled.div `
  float: left;
  width: 30%;
  height:400px;
  margin-bottom:2em;
  // align-items: center;
// background-color:#aaa;
// border: 2px solid red;
`;

export const TituloPost = styled.p `
  font-size:32px;
  font-weight: 600;
  color: #538EF5;
  overflow-wrap: break-word;
  overflow:hidden;
  text-align: center;
  margin-bottom:0px;
  // border: 2px solid blue;
`;

export const TextoPost = styled.p `
  font-size:22px;
  color: #3e3e3e;
  padding-left:1em;
  margin-bottom:0px;
  overflow-wrap: break-word;
  text-align: justify;
  overflow:hidden;
  height:55%;
  border: 2px solid blue;
`;

export const LinkPost = styled.p `
  font-size:24px;
  font-weight: 600;
  color: #538EF5;
  overflow-wrap: break-word;
  overflow:hidden;
  text-align: center;
  margin-top:0px;
  // border: 2px solid blue;
`;

export const A = styled.a`
  text-decoration:none;
`;
