import React from 'react'
import {useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ONGCard = (props) => {

    props = props.props
    const navigate = useNavigate();

    const handleClick = (props) => {
        navigate('/ong', {replace: true, state:props})
    };

  return (
    <>
        <ONGWrapper onClick={event => handleClick(props)}>
            <ONGImgWrapper>
                <OngImg background={props.image} />
            </ONGImgWrapper>
            <ONGTitle>{props.nome}</ONGTitle> 
            <ONGInformationsWrapper>
                {props.descricao}
            </ONGInformationsWrapper>
        </ONGWrapper>
    </>
  )
}

const ONGWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 250px;
    height: 400px;
    min-height: 300px;
    padding: 0.5rem;
    border: solid 1px #538EF5;
    box-shadow: 1px 1px 1px 1px #538EF5;
    &:hover {
        cursor: pointer;
    }
`
const ONGTitle = styled.h1`
    color: #000;
    font-size: 24px;
    margin-top: 0.5rem;
`

const ONGInformationsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    height: 90px;
    display:flex;
    color: #000;
    padding: 0.3rem;
    overflow:hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

const ONGImgWrapper = styled.div`
    width: 100%;
    height: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    // border: 1px solid black;
    // border-radius: 16px;
    overflow:hidden;
    
`

const OngImg = styled.div`
    background-image: ${props => `url(${props.background})`};
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content:center;
    align-items:center;
`

export default ONGCard;