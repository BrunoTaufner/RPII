import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'
import ONGCard from '../components/ONGCard/ongcard'
import {GrAccessibility} from "react-icons/gr"
import { useState } from 'react'

const baseURL = "http://127.0.0.1:5000"

const Catalog = () => {

    const [data, setData] = useState([])

    const [search, setSearch] = useState("")

    const [filteredData, setFilteredData] = useState([])

    async function getapi(url) {
        const response = await fetch(
            url,
        )
        var data = await response.json();
        setData(data)
        setFilteredData(data)
    }

    useEffect(() => {
        // Calling that async function
        getapi(`${baseURL}/ong`);
    }, []);


    const handleSearchInput = (event) => {  
        setSearch(event.target.value.toLowerCase())
        let newData = []
        for (var i = 0; i < data.length; i++) {
            const name = data[i].nome.toLowerCase();
            const descricao = data[i].descricao.toLowerCase();
            console.log(search)
            if (name.includes(search) || descricao.includes(search)) {
                newData.push(data[i]);
            }
        } 
        setFilteredData(newData)
    };

  return (
    <>
        <Navbar />
        <PageWrapper>
            <ContentWrapper>
                <SearchBarWrapper>
                    <SearchInput placeholder='Procure por uma ONG' onChange={event => handleSearchInput(event)} />
                </SearchBarWrapper>
                <ResultsWrapper>
                    {filteredData.map((elem, index) => {
                        return <ONGCard key={index} name={elem.nome} description={elem.descricao} image={elem.image}/>
                    })}
                </ResultsWrapper>

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
    flex-direction: column;
`

const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    // background: #538EF5;
    border-radius: 16px;
    // box-shadow: 1em 1em 1em #1111112b;
    padding: 1rem;
    gap: 1rem;
    height: 100vh;
`

const SearchBarWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`

const SearchInput = styled.input`
    width:600px;
    height: 25px;
    border-radius: 16px;
    padding: 1rem;
    border: solid 2px #538EF5;
    box-shadow: 0.5em 0.5em 0.5em #1111112b;
    
    font-size: 16px;

    input[type=text]:focus{
        outline: none;      /* Remove default outline and use border or box-shadow */
        box-shadow: 0 0 0 2px orange; /* Full freedom. (works also with border-radius) */
        border: solid 1px #538EF5;
      }
`

export default Catalog