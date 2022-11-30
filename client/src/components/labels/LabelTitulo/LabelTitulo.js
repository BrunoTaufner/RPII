import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabelTitulo.module.css';

const LabelTitulo = (props) => (
  <h1 className={styles.labelTitulo}>{props.texto}</h1>
);

LabelTitulo.propTypes = {};

LabelTitulo.defaultProps = {};

export default LabelTitulo;
