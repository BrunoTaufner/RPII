import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
  <div className={styles.divButton}>
    <button className={styles.button} onClick={props.handleClick} data-testid="Button">
      {props.textoBotao}
    </button>
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
