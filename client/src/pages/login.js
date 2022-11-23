import React from "react";
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TopFormulario from '../components/TopFormulario/TopFormulario';
import LabelTitulo from '../components/labels/LabelTitulo/LabelTitulo';
import LabelTexto from '../components/labels/LabelTexto/LabelTexto';

const Login = () => {
	let mostrarCadastro = () => {
		document.getElementById("div-cadastro").style.display = "block";
		document.getElementById("div-login").style.display = "none";
	}
return (
	<div>
		<div id="div-login">
			<LabelTitulo texto={"Login"} />
			<div id="input-email" style={{display: "flex", justifyContent: "space-evenly"}}>
				<LabelTitulo texto={"E-mail"} />
				<Input />
			</div>
			<div id="input-senha" style={{display: "flex", justifyContent: "space-evenly"}}>
				<LabelTitulo texto={"Senha"} />
				<Input />
			</div>
			<Button textoBotao={"Entrar"} />
			<LabelTexto texto={"Não possui cadastro?"}/>
			<LabelTexto texto={"Para se cadastrar"}/>
			<a onClick={mostrarCadastro} style={{textDecoration: "none"}}>
				<LabelTexto texto={"CLIQUE AQUI"}/>
			</a>
		</div>
		<div id="div-cadastro" style={{display: "none"}}>
			<TopFormulario />
			<Input />
			<Button textoBotao={"Texto"} />
		</div>
	</div>
);
};

export default Login;