import React from 'react';
import styles from './Input.module.css';

const Input = () => (
  <div className={styles.divInput}>
    <input className={styles.input} data-testid="Input" />
  </div>
);

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
