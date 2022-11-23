import React from 'react';
import styles from './TopFormulario.module.css';
import LabelTitulo from '../labels/LabelTitulo/LabelTitulo';
import Label_Tipo_Cadastro from '../labels/Label_Tipo_Cadastro/Label_Tipo_Cadastro';
import Label_Numero_Pergunta from '../labels/Label_Numero_Pergunta/Label_Numero_Pergunta';
import Label_Pergunta from '../labels/Label_Pergunta/Label_Pergunta';

const TopFormulario = () => (
  <div>
    <LabelTitulo texto={"Cadastre-se"}/>
    {/* TODO colocar uma variavel no tipo cadastro */}
    <Label_Tipo_Cadastro tipoCadastro={"tipoCadastro"}/>
    <Label_Numero_Pergunta numeradorPergunta={"1"} denominadorPergunta={"7"}/>
    <Label_Pergunta pergunta={"Qual é o CNPJ da ONG?"}/>
  </div>
);

TopFormulario.propTypes = {};

TopFormulario.defaultProps = {};

export default TopFormulario;
