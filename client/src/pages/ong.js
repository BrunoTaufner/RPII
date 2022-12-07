import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'

const ONG = (props) => {
    const { state } = useLocation();

    const navigate = useNavigate();

    const handleDonation = (props) => {
        navigate('/donation', {replace: true, state:props})
    };

  return (
    <>
        <Navbar />
        <PageWrapper>
            <OngWrapper>
                <OngName>{state.nome}</OngName>
                <OngImageWrapper>
                    <OngImage background={state.image}/>
                </OngImageWrapper>
                <OngDescriptionWrapper>
                    <OngDescriptionTitle>
                        Descrição
                    </OngDescriptionTitle>
                    <OngDescriptionContent>
                    {state.descricao}
                    </OngDescriptionContent>

                </OngDescriptionWrapper>
                <OngDonationWrapper>
                    <a>Gostou da ONG e deseja ajudar ?</a>
                    <DonateButton onClick={event => handleDonation(state)}>Doe Aqui !</DonateButton>
                </OngDonationWrapper>
            </OngWrapper>
        </PageWrapper>
        <Footer />
        
    </>
  )
}

const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
    height: 100%;
    background: #fff;
    margin-top: 1rem;
`
const OngWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    width: 65%;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid grey;
    border-radius: 16px;
    box-shadow: 0.5em 0.5em 0.5em #1111112b;
`

const OngName = styled.div`
    font-size: 40px;
`

const OngImageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100%;
    min-height: 400px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 16px;
    font-size: 50px;
`

const OngImage = styled.div`
    background-image: ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-size: contain;
    // border: 1px solid black;
    height: 400px;
    width: 600px;
`

const OngDescriptionWrapper = styled.div`
    display:flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    // border: 1px solid black;
    font-size: 50px;
    padding: 1rem;
`

const OngDescriptionTitle = styled.h1`
    font-size: 24px;
`
const OngDescriptionContent = styled.div`
    font-size: 16px;
`

const OngDonationWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    width: 100%;
    // border: 1px solid black;
    font-size: 30px;
    justify-content:center;
    align-items:center;
    padding: 1rem;
`

const DonateButton = styled.button`
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 16px;
    background: #538EF5;
    transition: transform 250ms;

    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
`

export default ONG