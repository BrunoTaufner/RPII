import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.Nav} data-testid="Nav">
    <div class={styles.barra}>
      <div class={styles.innerheader}>
          <ul>
            <li>Home</li>
            <li>Doações</li>
            <li>Buscar</li>
            <li>Quem Somos</li>
            <li>Causas</li>
            <li>ONGs</li>
            <li>Perfil</li>
          </ul>
        </div>
      </div>  
    </div>

  
);


Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
