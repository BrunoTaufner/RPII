import React from 'react'
import styled from 'styled-components'
import ONGCard from '../components/ONGCard/ongcard'

const Catalog = () => {
  return (
    <>
        <Header>This is header</Header>
        <PageWrapper>
            <ContentWrapper>
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
            </ContentWrapper>
        </PageWrapper>

    </>

  )
}


const Header = styled.div`
    background: black;
    height: 200px;
    color: white;
    font-size: 2rem;
    display:flex;
    align-content: center;
    justify-content:center;
`

const PageWrapper = styled.div`
    display:flex;
    background: #19C7B3;
    height: 100vh;
    justify-content: center;
    align-items:center;
    padding: 1rem;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    background: #057097;
    border: 1px solid #1111112b;
    border-radius: 16px;
    box-shadow: 1em 1em 1em #1111112b;
    margin: 100px 40px 100px 40px;
    padding: 1rem;
    gap: 1rem;
    overflow: auto;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 10px;
    }
    
    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
    background: #f5f5f5;
    border-radius: 10px;
    }
`

export default Catalog