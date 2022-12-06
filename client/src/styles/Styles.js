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
  // border: 2px solid blue;
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

// bla