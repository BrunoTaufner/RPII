import React from 'react'
import styled from 'styled-components'

const ONGCard = () => {
  return (
    <>
        <ONGWrapper>
            <ONGTitle>ONG Name</ONGTitle> 
            <ONGDescriptionWrapper>
                <ONGInformationsWrapper>
                    Insert ONG description and informations
                </ONGInformationsWrapper>
                <ONGImg>
                    Insert ONG image here
                </ONGImg>
            </ONGDescriptionWrapper>
        </ONGWrapper>
    </>
  )
}

const ONGWrapper = styled.div`
    display:flex;
    flex-direction:column;
    border: 1px solid black;
    border-radius: 16px;
    box-shadow: 1em 1em 1em #1111112b;
    width: 100%;
    height: 300px;
    min-height: 300px;
    background: #fff;
    padding: 1rem;
`
const ONGTitle = styled.h1`
    color: black;
`

const ONGDescriptionWrapper = styled.div`
    display:flex;
    flex-direction:row;
    height: 100%;
`

const ONGInformationsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width: 70%;
    border: 1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ONGImg = styled.div`
    width: 30%;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid black;
`

export default ONGCard;