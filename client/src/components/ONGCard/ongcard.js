import React from 'react'
import {useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ONGCard = (props) => {

    const navigate = useNavigate();

    const images = {
        1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFt9XvVJ3HAMnMkBelXmzPA_D0jTPKEDphw&usqp=CAU",
        2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoP7Kta_m5SSzW65ocAhRuOVwvImMJsivQw&usqp=CAU",
        3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex1LohvYxMA0bmBVgApdN6oWHIpE3csO0Qw&usqp=CAU",
        4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiD6d74HrZlF3DeuBCg3N3KfrFWrURcS3-DA&usqp=CAU",
        5: "https://www.ongsbrasil.com.br/logotipos/instituto-vidas-raras.jpg",
        6: "https://www.suapesquisa.com/uploads/site/logo_sos_mata_atlantica.jpg",
        7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFt9XvVJ3HAMnMkBelXmzPA_D0jTPKEDphw&usqp=CAU",
        8: "https://www.premiomelhores.org/wp-content/uploads/2022/11/refugio343.png",
        9: "https://www.ongsementesdoamanha.org.br/wp-content/uploads/2021/01/logo-sementes-do-amanha.png",
    }

    const handleClick = (props) => {
        const temp ={...props}; 
        temp.image = images[props.image]
        navigate('/ong', {replace: true, state:temp})
    };

  return (
    <>
        <ONGWrapper onClick={event => handleClick(props)}>
            <ONGImgWrapper>
                <OngImg background={images[props.image]} />
            </ONGImgWrapper>
            <ONGTitle>{props.name}</ONGTitle> 
            <ONGInformationsWrapper>
                {props.description}
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

    &:hover {
        cursor: pointer;
    }
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

const OngImg = styled.div`
    background-image: ${props => `url(${props.background})`};
    height: 150px;
    width: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content:center;
    align-items:center;
`

export default ONGCard;