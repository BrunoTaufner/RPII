import React from 'react';
import styles from './Label_Numero_Pergunta.module.css';

const LabelNumeroPergunta = (props) => (
  <h1 className={styles.labelNumeroPergunta} data-testid="LabelTipoCadastro">
    Pergunta {props.numeradorPergunta} / {props.denominadorPergunta}
  </h1>
);

LabelNumeroPergunta.propTypes = {};

LabelNumeroPergunta.defaultProps = {};

export default LabelNumeroPergunta;
