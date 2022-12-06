import React from 'react'
import {
	InputDoacao,
	BlueButton
	} from '../styles/Styles';

 
export default function Grid () {
 
  var valor = 0

  return (

    <div className="container" id="wrapper">
      <div className="item"><BlueButton onClick={() => valor = 10 }>R$ 10</BlueButton></div>
      <div className="item"><BlueButton>R$ 20</BlueButton></div>
      <div className="item"><BlueButton>R$ 40</BlueButton></div>
      <div className="item"><BlueButton>R$ 60</BlueButton></div>
      <div className="item"><BlueButton>R$ 80</BlueButton></div>
      <div className="item"><InputDoacao placeholder="Outro valor" style={{display: "flex", justifyContent: "space-evenly"}}></InputDoacao></div>
      
    </div>
  )
}