import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  background: #FF;
  border-radius: 10px;
  height: 80px;
  box-shadow: 2px 2px 20px lightblue;
  display: flex;
  position: relative;
`;

export const Button = styled.button`
  background: #538EF5;
  color: white;

  position: absolute;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #538EF5;
  border-radius: 3px;
  
  top: 50%;
  transform: translate(0, -50%);
`;

export const NavLink = styled(Link)`
  color: #808080;
  text-decoration: none;
  margin: 1em;
  margin-right: 3em;
  margin-left: 5em;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  line-height: normal;
  display: inline-block;
  vertical-align: middle;
`;

export const Center = styled.div`
  position: absolute;
  top: 17%;
  left: 30%;
`;


export const NavMenu = styled.div`
	position: absolute;
	top: 50%;
	transform: translate(0%, -50%);
  right: 110%;
`;
