import React from 'react'
import styled from 'styled-components'

const ONGCard = () => {
  return (
    <>
        <ONGWrapper>
            <ONGImgWrapper>
                <OngImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFt9XvVJ3HAMnMkBelXmzPA_D0jTPKEDphw&usqp=CAU"></OngImg>
            </ONGImgWrapper>
            <ONGTitle>ONG Name</ONGTitle> 
            <ONGInformationsWrapper>
                Insert ONG short description and informations
            </ONGInformationsWrapper>
        </ONGWrapper>
    </>
  )
}

const ONGWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 250px;
    height: 300px;
    min-height: 300px;
    padding: 0.5rem;
    background: transparent;
`
const ONGTitle = styled.h1`
    color: black;
    font-size: 24px;
    margin-top: 0.5rem;
`

const ONGInformationsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    height: 90px;
    display:flex;
    color: grey;
    padding: 0.3rem;
    overflow:hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

const ONGImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid black;
    border-radius: 16px;
    overflow:hidden;
`

const OngImg = styled.img`
`

export default ONGCard;