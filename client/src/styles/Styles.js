import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  padding-bottom:0.5em;
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
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
	display: flex;
    position: relative;
	margin: 0;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -50%);	
  `;

export const ColunaEsq = styled.div `
  // border: 3px solid red;
  float: left;
  width: 30%;
  margin-left: 18%;
`;
export const ColunaDir = styled.div `
  float: left;
  width: 30%;
  padding-left:2%;
  padding-bottom:12em;
`;

export const TituloPost = styled.p `
  font-size:32px;
  font-weight: 600;
  color: #538EF5;
  margin-top:-15px;
  margin-bottom:0px;
  overflow-wrap: break-word;
  text-align: center;
// border: 3px solid blue;


`
export const TextoPost = styled.p `
  font-size:22px;
  // color: #;
  overflow-wrap: break-word;
  text-align: justify;
  margin-top:-10px;
// border: 3px solid blue;

`