import React from 'react';
import LabelTitulo from '../labels/LabelTitulo/LabelTitulo';
import LabelTipoCadastro from '../labels/Label_Tipo_Cadastro/Label_Tipo_Cadastro';
import LabelNumeroPergunta from '../labels/Label_Numero_Pergunta/Label_Numero_Pergunta';
import LabelPergunta from '../labels/Label_Pergunta/Label_Pergunta';

const TopFormulario = (props) => (
  <div>
    <LabelTitulo texto={"Cadastre-se"}/>
    {/* TODO colocar uma variavel no tipo cadastro */}
    <LabelTipoCadastro tipoCadastro={props.tipoCadastro}/>
    <LabelNumeroPergunta numeradorPergunta={props.numeradorPergunta} denominadorPergunta={props.denominadorPergunta}/>
    <LabelPergunta pergunta={props.pergunta}/>
  </div>
);

TopFormulario.propTypes = {};

TopFormulario.defaultProps = {};

export default TopFormulario;
