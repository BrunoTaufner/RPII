import styled from 'styled-components';
export const Title = styled.h1`
font-size: 70px;
font-weight: 600;
background-image: linear-gradient(to left, #553c9a, #b393d3);
color: transparent;
background-clip: text;
-webkit-background-clip: text;
  text-align: center;
  @font-face {
    font-family: 'Helvetica';
    src: local(''), url(fonts/helvetica-rounded-bold.otf) format('otf');
  }`;

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