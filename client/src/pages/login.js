import React from "react";
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TopFormulario from '../components/TopFormulario/TopFormulario';

const Login = () => {
return (
	<div>

		<TopFormulario />
		<Input />
		<Button textoBotao={"Texto"}/>
	</div>
);
};

export default Login;
