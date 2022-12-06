import React from 'react';
import styles from './TextArea.module.css';

const TextArea = (props) => {
  function handleChange(event) {
    props.handleTextAreaChange(event.target.name, event.target.value);
  }
  return (
    <div className={styles.divTextArea}>
      <textarea type="text" name={props.name} className={styles.textArea} data-testid="InputGrande" onChange={handleChange} />
    </div>
  )
};

TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;
