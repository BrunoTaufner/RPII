import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  function handleChange(event) {
    props.handleInputChange(event.target.name, event.target.value);
  }
  return (
    <div className={styles.divInput}>
      <input className={styles.input} type={props.type} name={props.name} data-testid="Input" onChange={handleChange}/>
    </div>
  )
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
