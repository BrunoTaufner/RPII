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
  .active{
    color: red;
  }
  :hover{
    background-color: #538EF5;
    color: white;
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
  }`;

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
  `;

export const Box = styled.div `
  margin-left:10%;
  `;

export const BoxText = styled.text `
margin-left:10%;
`;