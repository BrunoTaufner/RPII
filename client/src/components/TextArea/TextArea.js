import React from 'react';
import styles from './TextArea.module.css';

const TextArea = () => (
  <div className={styles.divTextArea}>
    <textarea type="text" className={styles.textArea} data-testid="InputGrande" />
  </div>
);

TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;
