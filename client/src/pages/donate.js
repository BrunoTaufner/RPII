import React,{ useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'

const Donate = (props) => {
    const [valor, setValor] = useState(0);
    const [pix, setPix] = useState([]);

    const { state } = useLocation();

    const [isDonating, setIsDonating] = useState(false)

    const handleChange = event => {
		console.log(event.target.value)
		setValor(event.target.value);
	}
    
    const gerarPix = () => {
        // console.log(valor)
		if (valor) {
			const Pix = require("../pix/Pix");
			const pix = new Pix(
			"tedst",
			"Qato",
			"nome",
			"São Paulo",
			">TXID<",
			Number(valor)
			);
			setPix(pix.getPayload())
            setIsDonating(true)

			console.log("payload:",Pix)
		}
	}

    const voltar = () => {
        setValor(0)
        setIsDonating(false)
    }


  return (
    <> 
        <Navbar />
        <PageWrapper>
            <ContentWrapper>
                <Title>Faça uma doação !</Title>
            <ONGImage image={state.image}/>
                <SubtitleDoacao> Você está doando para: {state.nome}</SubtitleDoacao>
                {isDonating ? 
                <PixWrapper>
                    <QRCode />
                    <PixKey>
                        Chave pix: {pix}
                    </PixKey>
                </PixWrapper> 
                : 
                <DonationInput placeholder='Ex: 250.00' onChange={event => handleChange(event)}></DonationInput> }
                <ButtonWrapper>
                    <DonateButton onClick={voltar}>
                        Voltar
                    </DonateButton>
                    {isDonating ? <></> : <DonateButton onClick={gerarPix}>
                        Donate
                    </DonateButton> }
                </ButtonWrapper>
            </ContentWrapper>
        </PageWrapper>
        <Footer />
    </>
  )
}

const PageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content:center;
    align-items:center;
`

const ContentWrapper = styled.div`
    border: 1px solid black;
    height: 100%;
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items:center;
    gap: 2rem;
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  @font-face {
    font-family: 'Helvetica';
    src: local(''), url(fonts/helvetica-rounded-bold.otf) format('otf');
  }
`;

const ONGImage = styled.div`
    background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  height: 200px;
  width: 200px;
`

const SubtitleDoacao = styled.h3`
    font-size: 30px;
    font-weight: 600;
    padding: 0.05em 0.5em;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-align: center;
`

const DonationInput = styled.input`
    font-size: 30px;
    padding: 0.05em 0.5em;
    background-clip: text;
    -webkit-background-clip: text;
    text-align: center;
`

const ButtonWrapper = styled.div`
  height: 50px;
  width: 400px;
  display:flex;
  justify-content:center;
  align-items:space-between;
  gap: 1rem;
`

const DonateButton = styled.div`
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 16px;
    background: #538EF5;
    transition: transform 250ms;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
`

const PixWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`

const QRCode = styled.div`
    background-image:url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/800px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 400px;
    height: 400px;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid black;
`

const PixKey = styled.div`
    font-weight: bold;
    font-size: 24px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
`


export default Donate