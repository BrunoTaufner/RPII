import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectTipoOng.module.css';

const SelectTipoOng = () => (
  <div className={styles.divSelectTipoOng}>
    <select name="tiposOng" id="tipo-ong-select" className={styles.selectTipoOng}>
      <option value="">Selecione uma opção</option>
      <option value="associacao">Associação</option>
      <option value="fundacao">Fundação</option>
      <option value="organizacao">Organização</option>
      <option value="negocio-social">Negócio Social</option>
      <option value="entidade-beneficiente-de-assistencia">Entidade Beneficiente de Assistência</option>
    </select>
  </div>

);

SelectTipoOng.propTypes = {};

SelectTipoOng.defaultProps = {};

export default SelectTipoOng;
