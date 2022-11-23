import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label_Pergunta.module.css';

const LabelPergunta = (props) => (
  <h1 className={styles.labelPergunta} data-testid="LabelPergunta">
    {props.pergunta}
  </h1>
);

LabelPergunta.propTypes = {};

LabelPergunta.defaultProps = {};

export default LabelPergunta;
