import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Carousel from '../Carousel/Carousel';


const Header = () => (
  <div className={styles.Header} data-testid="Header">
    Header Component
    <Logo></Logo>
    <Carousel></Carousel>
   
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
