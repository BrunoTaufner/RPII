import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
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
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);	
  `;