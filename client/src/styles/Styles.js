import styled from 'styled-components';

 export const BlueButton = styled.button`
  color: #538EF5;
  font-size: 35px;
  margin: auto;
  padding: 0.25em 1em;
  border: 2px solid #538EF5;
  border-radius: 3px;
  justify-content: center;
  display: flex;
  :hover{
    background-color: #538EF5;
    color: white;
  }
  .active:active {
    color: red;
  }
  .focus:focus {
    color: red;
  }
  container .button.selected {
    color: red;
  }
`;

export const SubmitButton = styled.button`
color: #538EF5;
font-size: 35px;
margin: auto;
margin-top: 50px;
padding: 0.25em ;
border: 2px solid #538EF5;
border-radius: 3px;
display: flex;
justifyContent: "space-evenly";
:hover{
  background-color: #538EF5;
  color: white;
}
`;

export const InputDoacao = styled.input.attrs(props => ({
  type: "text",
}))`
color: #538EF5;
font-size: 35px;
padding: 0.25em 1em;
border: 2px solid #538EF5;
width: 160px;
border-radius: 3px;
`;

export const SubtitleDoacao = styled.h3`
font-size: 30px;
font-weight: 600;
padding: 0.25em 1em;
background-image: linear-gradient(to left, #553c9a, #b393d3);
color: transparent;
background-clip: text;
-webkit-background-clip: text;
text-align: center;
 `;

export const TextDoacao = styled.div`
   && {
     color: #538EF5;
   }
   margin: auto;
   width: 50%;
   padding: 10px;
   padding-bottom: 0px;
 `

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
    type: "text",
  }))`
  color: #538EF5;
  font-size: 3em;
  margin: 1em;
  border: 2px solid #538EF5;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 40px;

  // we can define static props
  type: "text",
  // or we can define dynamic ones
  size: props.size || "1em",
}))`
    
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