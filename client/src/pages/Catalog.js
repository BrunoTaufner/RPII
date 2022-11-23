import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'
import ONGCard from '../components/ONGCard/ongcard'
import {GrAccessibility} from "react-icons/gr"

const Catalog = () => {
  return (
    <>
        <Navbar />
        <PageWrapper>
            <FilterWrapper>
                <FilterBox>
                    <GrAccessibility size="50px" />
                    <FilterName>FilterName</FilterName>
                </FilterBox >
                <FilterBox>
                    <GrAccessibility size="50px" />
                    <FilterName>FilterName</FilterName>
                </FilterBox >
                <FilterBox>
                    <GrAccessibility size="50px" />
                    <FilterName>FilterName</FilterName>
                </FilterBox >
                <FilterBox>
                    <GrAccessibility size="50px" />
                    <FilterName>FilterName</FilterName>
                </FilterBox >
            </FilterWrapper>
            <ContentWrapper>
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
                <ONGCard />
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
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    // background: #538EF5;
    border-radius: 16px;
    // box-shadow: 1em 1em 1em #1111112b;
    padding: 1rem;
    gap: 1rem;
`

const FilterWrapper = styled.div`
    display:flex;
    flex-direction: row;
    height: 100px;
    width:100%;
    padding: 1rem;
    gap: 1rem;
`

const FilterBox = styled.div`
    display:flex;
    flex-direction: column;
    height: 70px;
    width: 70px;
    background: #fff;
    padding: 0.5rem;
    justify-content:center;
    align-items:center;
    &:hover {
        border-bottom: 2px solid black;
        cursor: pointer;
        font-weight:bold;
    }
`

const FilterName = styled.a`
    font-size: 10px;
`

export default Catalog