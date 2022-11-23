import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabelTexto.module.css';

const LabelTexto = (props) => (
  <h1 className={styles.labelTexto} data-testid="LabelTexto">
    {props.texto}
  </h1>
);

LabelTexto.propTypes = {};

LabelTexto.defaultProps = {};

export default LabelTexto;
