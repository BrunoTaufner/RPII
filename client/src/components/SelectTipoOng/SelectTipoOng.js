import React from 'react';
import styles from './SelectTipoOng.module.css';

const SelectTipoOng = (props) => {

  function handleChange(event) {
    props.handleSelectChange(event.target.name, event.target.value);
  }
  return(
    <div className={styles.divSelectTipoOng}>
      <select name={props.name} id="tipo-ong-select" className={styles.selectTipoOng} onChange={handleChange}>
        <option value="">Selecione uma opção</option>
        <option value="associacao">Associação</option>
        <option value="fundacao">Fundação</option>
        <option value="organizacao">Organização</option>
        <option value="negocio-social">Negócio Social</option>
        <option value="entidade-beneficiente-de-assistencia">Entidade Beneficiente de Assistência</option>
      </select>
    </div>
  )

};

SelectTipoOng.propTypes = {};

SelectTipoOng.defaultProps = {};

export default SelectTipoOng;
