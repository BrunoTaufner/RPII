import React from 'react';
import styles from './Label_Tipo_Cadastro.module.css';

const LabelTipoCadastro = (props) => (
  <h1 className={styles.labelTipoCadastro} data-testid="LabelTipoCadastro">
    Formulário de cadastro para {props.tipoCadastro}
  </h1>
);

LabelTipoCadastro.propTypes = {};

LabelTipoCadastro.defaultProps = {};

export default LabelTipoCadastro;
