import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'

const ONG = () => {
  return (
    <>
        <Navbar />
        <PageWrapper>
            <OngWrapper>
                <OngName>ONG Name</OngName>
                <OngImage> ONG IMAGE </OngImage>
                <OngDescriptionWrapper>
                    Description <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit,
					sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrum exercitationem ullam
					corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur. Quis aute iure reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
                </OngDescriptionWrapper>
                <OngDonationWrapper>
                    <a>Gostou da ONG e deseja ajudar ?</a>
                    <DonateButton>Doe Aqui !</DonateButton>
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
    background: #f5f5f5;
`
const OngWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    width: 65%;
    padding: 1rem;
    gap: 1rem;
`

const OngName = styled.div`
    font-size: 40px;
`

const OngImage = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 10px;
    min-height: 400px;
    width: 100%;
    border: 1px solid black;
    font-size: 50px;
`

const OngDescriptionWrapper = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    font-size: 50px;
    padding: 1rem;
`

const OngDonationWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    width: 100%;
    border: 1px solid black;
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