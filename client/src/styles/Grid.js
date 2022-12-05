import React from 'react'
import {
	InputDoacao,
	BlueButton
	} from '../styles/Styles';

export default function Grid () {
  
  let prevButton = null;

  const wrapper = document.getElementById("wrapper");
  
  wrapper.addEventListener('click', (e) => {
  
    const isButton = e.target.nodeName === 'BLUEBUTTON'; 
    
    if (!isButton) {
      return;
    }
    
    e.target.classList.add('active'); // Add .active CSS Class
  
    if(prevButton !== null) {
      prevButton.classList.remove('active');  // Remove .active CSS Class
    }
    
    prevButton = e.target;
  
  });






  return (

    <div className="container" id="wrapper">
      <div className="item"><BlueButton>R$ 10</BlueButton></div>
      <div className="item"><BlueButton>R$ 20</BlueButton></div>
      <div className="item"><BlueButton>R$ 40</BlueButton></div>
      <div className="item"><BlueButton>R$ 60</BlueButton></div>
      <div className="item"><BlueButton>R$ 80</BlueButton></div>
      <div className="item"><InputDoacao placeholder="Outro valor" style={{display: "flex", justifyContent: "space-evenly"}}></InputDoacao></div>
    </div>
  )
}