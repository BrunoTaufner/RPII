import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar";
import React from "react";
import LabelTitulo from '../components/labels/LabelTitulo/LabelTitulo';
import LabelTexto from '../components/labels/LabelTexto/LabelTexto';
import LabelPergunta from '../components/labels/Label_Pergunta/Label_Pergunta';
import TopFormulario from '../components/TopFormulario/TopFormulario';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextArea from '../components/TextArea/TextArea';
import SelectTipoOng from '../components/SelectTipoOng/SelectTipoOng';

const Login = () => {

	let infosCadastroOng = {
		cnpj: "",
		nome: "",
		descricao: "",
		tipo: "",
		telefone: "",
		email: "",
		endereco_cep: "",
		endereco_num: "",
		endereco_complemento: "",
		senha: "",
	}

	let map = new Map(Object.entries(infosCadastroOng));

	const setInfoCadastroOng = (name, value) => {
		map.set(name, value);
		console.log(...map.entries());
	}

	const mostrarCadastro = () => {
		document.getElementById("div-login").style.display = "none";
		document.getElementById("div-tipo-usuario").style.display = "block";
	}
	const mostrarCadastroOng1 = () => {
		document.getElementById("div-tipo-usuario").style.display = "none";
		document.getElementById("div-cadastro-ong-1").style.display = "block";
	}
	const mostrarCadastroOng2 = () => {
		document.getElementById("div-cadastro-ong-1").style.display = "none";
		document.getElementById("div-cadastro-ong-2").style.display = "block";
	}
	const voltarCadastroOng1 = () => {
		document.getElementById("div-cadastro-ong-2").style.display = "none";
		document.getElementById("div-cadastro-ong-1").style.display = "block";
	}
	const mostrarCadastroOng3 = () => {
		document.getElementById("div-cadastro-ong-2").style.display = "none";
		document.getElementById("div-cadastro-ong-3").style.display = "block";
	}
	const voltarCadastroOng2 = () => {
		document.getElementById("div-cadastro-ong-3").style.display = "none";
		document.getElementById("div-cadastro-ong-2").style.display = "block";
	}
	const mostrarCadastroOng4 = () => {
		document.getElementById("div-cadastro-ong-3").style.display = "none";
		document.getElementById("div-cadastro-ong-4").style.display = "block";
	}
	const voltarCadastroOng3 = () => {
		document.getElementById("div-cadastro-ong-4").style.display = "none";
		document.getElementById("div-cadastro-ong-3").style.display = "block";
	}
	const mostrarCadastroOng5 = () => {
		document.getElementById("div-cadastro-ong-4").style.display = "none";
		document.getElementById("div-cadastro-ong-5").style.display = "block";
	}
	const voltarCadastroOng4 = () => {
		document.getElementById("div-cadastro-ong-5").style.display = "none";
		document.getElementById("div-cadastro-ong-4").style.display = "block";
	}
	const mostrarCadastroOng6 = () => {
		document.getElementById("div-cadastro-ong-5").style.display = "none";
		document.getElementById("div-cadastro-ong-6").style.display = "block";
	}
	const voltarCadastroOng5 = () => {
		document.getElementById("div-cadastro-ong-6").style.display = "none";
		document.getElementById("div-cadastro-ong-5").style.display = "block";
	}
	const mostrarCadastroOng7 = () => {
		document.getElementById("div-cadastro-ong-6").style.display = "none";
		document.getElementById("div-cadastro-ong-7").style.display = "block";
	}
	const voltarCadastroOng6 = () => {
		document.getElementById("div-cadastro-ong-7").style.display = "none";
		document.getElementById("div-cadastro-ong-6").style.display = "block";
	}
	const submitCadastroOng = () => {
		console.log("submit cadastro ong");
		document.getElementById("div-cadastro-ong-7").style.display = "none";
		document.getElementById("div-login").style.display = "block";
		// TODO
	}
	const mostrarCadastroNaoOng = () => {
		document.getElementById("div-tipo-usuario").style.display = "none";
		document.getElementById("div-cadastro-nao-ong").style.display = "block";
	}
	const mostrarCadastroPj1 = () => {
		document.getElementById("div-cadastro-nao-ong").style.display = "none";
		document.getElementById("div-cadastro-pj-1").style.display = "block";
	}
	const mostrarCadastroPj2 = () => {
		document.getElementById("div-cadastro-pj-1").style.display = "none";
		document.getElementById("div-cadastro-pj-2").style.display = "block";
	}
	const voltarCadastroPj1 = () => {
		document.getElementById("div-cadastro-pj-2").style.display = "none";
		document.getElementById("div-cadastro-pj-1").style.display = "block";
	}
	const mostrarCadastroPj3 = () => {
		document.getElementById("div-cadastro-pj-2").style.display = "none";
		document.getElementById("div-cadastro-pj-3").style.display = "block";
	}
	const voltarCadastroPj2 = () => {
		document.getElementById("div-cadastro-pj-3").style.display = "none";
		document.getElementById("div-cadastro-pj-2").style.display = "block";
	}
	const submitCadastroPj = () => {
		console.log("Submit Cadastro Pj");
		document.getElementById("div-cadastro-pj-3").style.display = "none";
		document.getElementById("div-login").style.display = "block";	
	}
	const mostrarCadastroPf1 = () => {
		document.getElementById("div-cadastro-nao-ong").style.display = "none";
		document.getElementById("div-cadastro-pf-1").style.display = "block";
	}
	const mostrarCadastroPf2 = () => {
		document.getElementById("div-cadastro-pf-1").style.display = "none";
		document.getElementById("div-cadastro-pf-2").style.display = "block";
	}
	const voltarCadastroPf1 = () => {
		document.getElementById("div-cadastro-pf-2").style.display = "none";
		document.getElementById("div-cadastro-pf-1").style.display = "block";
	}
	const mostrarCadastroPf3 = () => {
		document.getElementById("div-cadastro-pf-2").style.display = "none";
		document.getElementById("div-cadastro-pf-3").style.display = "block";
	}
	const voltarCadastroPf2 = () => {
		document.getElementById("div-cadastro-pf-3").style.display = "none";
		document.getElementById("div-cadastro-pf-2").style.display = "block";
	}
	const mostrarCadastroPf4 = () => {
		document.getElementById("div-cadastro-pf-3").style.display = "none";
		document.getElementById("div-cadastro-pf-4").style.display = "block";
	}
	const voltarCadastroPf3 = () => {
		document.getElementById("div-cadastro-pf-4").style.display = "none";
		document.getElementById("div-cadastro-pf-3").style.display = "block";
	}
	const submitCadastroPf = () => {
		console.log("Submit Cadastro Pf");
		document.getElementById("div-cadastro-pf-4").style.display = "none";
		document.getElementById("div-login").style.display = "block";	
	}
return (
	<>
		<Navbar />
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
			<a onClick={mostrarCadastro} href="#" style={{textDecoration: "none", cursor: 'pointer'}}>
				<LabelTexto texto={"Não possui cadastro?"}/>
			</a>
		</div>
		<div id="div-tipo-usuario" style={{display: "none"}}>
			<LabelTitulo texto={"Cadastre-se"}/>
			<LabelPergunta pergunta={"Você gostaria de cadastrar uma ONG?"}/>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Sim"} handleClick={mostrarCadastroOng1} />
				<Button textoBotao={"Não"} handleClick={mostrarCadastroNaoOng}/>
			</div>
		</div>
		{/* Fluxo Cadastro Ong */}
		<div id="div-cadastro-ong-1" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"ONG"} pergunta={"Qual é o CNPJ da ONG?"} numeradorPergunta={1} denominadorPergunta={7}/>
			<Input name="cnpj" handleInputChange={setInfoCadastroOng}/>
			<Button textoBotao={"Continuar"} handleClick={mostrarCadastroOng2}/>
		</div>
		<div id="div-cadastro-ong-2" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"ONG"} pergunta={"Qual é o nome da ONG que deseja cadastrar?"} numeradorPergunta={2} denominadorPergunta={7}/>
			<Input name="nome" handleInputChange={setInfoCadastroOng} />
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroOng1} />
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroOng3} />
			</div>
			</div>
		<div id="div-cadastro-ong-3" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"ONG"} pergunta={"Descreva a sua ONG brevemente"} numeradorPergunta={3} denominadorPergunta={7}/>
			<TextArea name="descricao" handleTextAreaChange={setInfoCadastroOng} />
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroOng2} />
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroOng4} />
			</div>
		</div>
		<div id="div-cadastro-ong-4" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"ONG"} pergunta={"Qual é a categoria da ONG?"} numeradorPergunta={4} denominadorPergunta={7}/>
			<SelectTipoOng name={"tipo"} handleSelectChange={setInfoCadastroOng}/>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroOng3} />
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroOng5} />
			</div>
		</div>
		<div id="div-cadastro-ong-5" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"ONG"} pergunta={"Qual é o telefone e o e-mail da ONG?"} numeradorPergunta={5} denominadorPergunta={7}/>
			<div id="input-telefone" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Telefone"} />
				<Input name="telefone" handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-email" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"E-mail"} />
				<Input name="email" type={"email"} handleInputChange={setInfoCadastroOng}/>
			</div>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroOng4} />	
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroOng6} />
			</div>
		</div>
		<div id="div-cadastro-ong-6" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"ONG"} pergunta={"Qual é o endereço da unidade da ONG que deseja cadastrar?"} numeradorPergunta={6} denominadorPergunta={7}/>
			<div id="input-cep" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"CEP"} />
				<Input name="endereco_cep" handleInputChange={setInfoCadastroOng} />
			</div>
			<div id="input-rua" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Rua"} />
				<Input />
			</div>
			<div id="input-numero" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Número"} />
				<Input name="endereco_num" handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-complemento" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Complemento"} />
				<Input name="endereco_complemento" handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-bairro" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Bairro"} />
				<Input />
			</div>
			<div id="input-estado" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Estado"} />
				<Input />
			</div>
			<div id="input-pais" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"País"} />
				<Input />
			</div>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroOng5} />
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroOng7} />
			</div>
		</div>
		<div id="div-cadastro-ong-7" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"ONG"} pergunta={"Qual vai ser a senha da sua conta?"} numeradorPergunta={7} denominadorPergunta={7}/>
			<div id="input-senha" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Senha"} />
				<Input name="senha" handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-confimacao-senha" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Confirmação da senha"} />
				<Input />
			</div>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroOng6} />
				<Button textoBotao={"Enviar"} handleClick={submitCadastroOng} />
			</div>
		</div>
		{/* Fluxo cadastro não ong */}
		<div id="div-cadastro-nao-ong" style={{display: "none"}}>
		<LabelTitulo texto={"Cadastre-se"}/>
			<LabelPergunta pergunta={"Você gostaria de cadastrar uma Pessoa Física ou Pessoa Jurídica?"}/>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Pessoa Física"} handleClick={mostrarCadastroPf1} />
				<Button textoBotao={"Pessoa Jurídica"} handleClick={mostrarCadastroPj1}/>
			</div>
		</div>
		{/* Fluxo cadastro PF */}
		<div id="div-cadastro-pf-1" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"Pessoa Física"} pergunta={"Qual é o seu CPF?"} numeradorPergunta={1} denominadorPergunta={4}/>
			<Input />
			<Button textoBotao={"Continuar"} handleClick={mostrarCadastroPf2}/>
		</div>
		<div id="div-cadastro-pf-2" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"Pessoa Física"} pergunta={"Qual é o seu nome completo?"} numeradorPergunta={2} denominadorPergunta={4}/>
			<Input />
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroPf1} />
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroPf3} />
			</div>
		</div>
		<div id="div-cadastro-pf-3" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"Pessoa Física"} pergunta={"Qual é a sua data de nascimento?"} numeradorPergunta={3} denominadorPergunta={4}/>
			<Input />
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroPf2} />
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroPf4} />
			</div>
		</div>
		<div id="div-cadastro-pf-4" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"Pessoa Física"} pergunta={"Qual vai ser o e-mail e a senha da sua conta?"} numeradorPergunta={4} denominadorPergunta={4}/>
			<div id="input-email" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"E-mail"} />
				<Input name="email" type={"email"} handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-email" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Confirmação de e-mail"} />
				<Input name="email" type={"email"} handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-senha" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Senha"} />
				<Input />
			</div>
			<div id="input-confimacao-senha" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Confirmação da senha"} />
				<Input />
			</div>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroPf3} />
				<Button textoBotao={"Enviar"} handleClick={submitCadastroPf} />
			</div>
		</div>
		{/* Fluxo cadastro PJ */}
		<div id="div-cadastro-pj-1" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"Pessoa Jurídica"} pergunta={"Qual é o seu CNPJ?"} numeradorPergunta={1} denominadorPergunta={3}/>
			<Input />
			<Button textoBotao={"Continuar"} handleClick={mostrarCadastroPj2}/>
		</div>
		<div id="div-cadastro-pj-2" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"Pessoa Jurídica"} pergunta={"Qual é a sua razão social?"} numeradorPergunta={2} denominadorPergunta={3}/>
			<Input />
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroPj1} />
				<Button textoBotao={"Continuar"} handleClick={mostrarCadastroPj3} />
			</div>
			</div>
		<div id="div-cadastro-pj-3" style={{display: "none"}}>
			<TopFormulario tipoCadastro={"Pessoa Jurídica"} pergunta={"Qual vai ser o e-mail e a senha da sua conta?"} numeradorPergunta={3} denominadorPergunta={3}/>
			<div id="input-email" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"E-mail"} />
				<Input name="email" type={"email"} handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-email" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Confirmação de e-mail"} />
				<Input name="email" type={"email"} handleInputChange={setInfoCadastroOng}/>
			</div>
			<div id="input-senha" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Senha"} />
				<Input />
			</div>
			<div id="input-confimacao-senha" style={{padding: "0 5% 0 5%", display: "flex", justifyContent: "space-between"}}>
				<LabelTitulo texto={"Confirmação da senha"} />
				<Input />
			</div>
			<div style={{display: "flex", justifyContent: "space-evenly"}}>
				<Button textoBotao={"Voltar"} handleClick={voltarCadastroPj2} />
				<Button textoBotao={"Enviar"} handleClick={submitCadastroPj} />
			</div>
		</div>	
		<Footer />
	</>
);
};

export default Login;
