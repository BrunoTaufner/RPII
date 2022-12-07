import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import styled from 'styled-components'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer/Footer'

const baseURL = "http://18.205.161.218:5000"

const dados = [
  [
    "Doação", 
    "Data"
  ],
  ["06/12/2000",1300.0],
  ["05/12/2022", 5000.0],
  ["01/12/2022", 2000.0],
  ["25/11/2022", 1200.0],
  ["18/11/2022", 7000.0],
  ["10/11/2022", 350.0],
  ["16/09/2022", 10000.0],
  ["11/09/2022", 7000.0]
]

const options = {
  chart: {
    title: "Total de doações arrecadados por dia",
    subtitle: "em reais (BRL)",
 }}

const Dashboard = () => {

  const [data, setData] = useState([])

  const [work, setWork] = useState({})

  async function getapi(url) {
      const response = await fetch(
          url,
      )
      var data = await response.json();
      setData(data)
      setWork(data[0])
  }  

  useEffect(() => {
    // Calling that async function
    getapi(`${baseURL}/ong`);
  }, []);

  


  return (
    <>
        <Navbar />
        <PageWrapper>
          <DashboardSidebar>
            <ONGImageWrapper>
              <ONGImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFt9XvVJ3HAMnMkBelXmzPA_D0jTPKEDphw&usqp=CAU"/>
            </ONGImageWrapper>
            <ONGName>ONG Transparente</ONGName>
            <SidebarContentWrapper>
              <SidebarContentTitle>Ano de Análise</SidebarContentTitle>
              <SidebarContent><b>2022</b></SidebarContent>
              <SidebarContent>2021</SidebarContent>
              <SidebarContent>2020</SidebarContent>
            </SidebarContentWrapper>
          </DashboardSidebar>
          <DashboardWrapper>
            <DashRowWrapper>
              <DashCard width="500px" height= "200px">
                <DashCardTitle>Total de Doações</DashCardTitle>
                <DashCardContent> 252 </DashCardContent>
              </DashCard>
              <DashCard width="500px" height= "200px">
                <DashCardTitle>Maior Doação</DashCardTitle>
                <DashCardContent>R$ 10000,00</DashCardContent>
              </DashCard>
              <DashCard width="500px" height= "200px">
                <DashCardTitle>Total Arrecadado</DashCardTitle>
                <DashCardContent>R$ 25000,00</DashCardContent>
              </DashCard>
            </DashRowWrapper>
            <DashRowWrapper>
              <DashCard width="70%" height= "500px">
              <Chart
                chartType="Line"
                data={dados}
                options={options}
                width="100%"
                height="100%"
                legendToggle
              />
              </DashCard>
              <DashCard width="50%" height= "500px">
                <HardCodedTableWrapper> 
                  <TableRowWrapper>
                    <TableRowColumnName>Data</TableRowColumnName>
                    <TableRowColumnName>Doador</TableRowColumnName>
                    <TableRowColumnName>Valor (R$)</TableRowColumnName>
                    <TableRowColumnName>Tipo</TableRowColumnName>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>06/12/2022</TableRowItem>
                    <TableRowItem>Gustavo Akashi</TableRowItem>
                    <TableRowItem>100,00</TableRowItem>
                    <TableRowItem>Única</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>06/12/2022</TableRowItem>
                    <TableRowItem>Vinicus Bispo</TableRowItem>
                    <TableRowItem>1300,00</TableRowItem>
                    <TableRowItem>Recorrente</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>05/12/2022</TableRowItem>
                    <TableRowItem>Natália Souza</TableRowItem>
                    <TableRowItem>5000,00</TableRowItem>
                    <TableRowItem>Única</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>01/12/2022</TableRowItem>
                    <TableRowItem>Gustavo Oliveira</TableRowItem>
                    <TableRowItem>2000,00</TableRowItem>
                    <TableRowItem>Única</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>25/11/2022</TableRowItem>
                    <TableRowItem>Fernanda</TableRowItem>
                    <TableRowItem>1200,00</TableRowItem>
                    <TableRowItem>Única</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>18/11/2022</TableRowItem>
                    <TableRowItem>Gustavo Reis</TableRowItem>
                    <TableRowItem>7000,00</TableRowItem>
                    <TableRowItem>Recorrente</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>10/11/2022</TableRowItem>
                    <TableRowItem>Gustavo Akashi</TableRowItem>
                    <TableRowItem>350,00</TableRowItem>
                    <TableRowItem>Única</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>16/09/2022</TableRowItem>
                    <TableRowItem>Bruno Taufner</TableRowItem>
                    <TableRowItem>10.000,00</TableRowItem>
                    <TableRowItem>Única</TableRowItem>
                  </TableRowWrapper>
                  <TableRowWrapper>
                    <TableRowItem>11/09/2022</TableRowItem>
                    <TableRowItem>Gustavo Akashi</TableRowItem>
                    <TableRowItem>5000,00</TableRowItem>
                    <TableRowItem>Recorrente</TableRowItem>
                  </TableRowWrapper>
                </HardCodedTableWrapper>
              </DashCard>
            </DashRowWrapper>
          </DashboardWrapper>
        </PageWrapper>
        <Footer />
    </>
  )
}

const PageWrapper = styled.div`
    display:flex;
    flex-direction:row;
    height: 100%;
    padding: 1rem;
    height: 100vh;
    align-items:center;
    gap: 1rem;
`

const DashboardWrapper = styled.div`
  border: 1px solid #538EF5;
  width: 100%;
  height: 100%;
  display:flex;
  gap: 1rem;
  flex-direction: column;
  padding 1rem;
`

const DashboardSidebar = styled.div`
  border: 1px solid #538EF5;
  background: #538EF5;
  width: 20%;
  height: 100%;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  align-items:center;
  gap: 1rem;

`

const DashCard = styled.div`
  border: 1px solid black;
  height: ${props => props.height};
  width: ${props => props.width};
  display:flex;
  flex-direction: column;
  padding 1rem;
  display:flex;
  justify-content:center;
  align-items:center;
`
const DashCardTitle = styled.div`
  font-size: 24px;
`

const DashCardContent = styled.div`
  height: 100%;
  width: 100%;
  font-size: 40px;
  display:flex;
  color: #538EF5;
  justify-content:center;
  align-items:center;
`

const DashRowWrapper = styled.div`
  padding: 1rem;
  display:flex;
  flex-direction: row;
  gap: 1rem;
  justify-content:space-between;
`

const HardCodedTableWrapper = styled.div`
  border: 1px solid #538EF5;
  width: 100%;
  height: 100%;
`

const TableRowWrapper = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  flex-direction:row;
`

const TableRowItem = styled.div`
  border: 1px solid black;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 25%;
  height: 100%;
`

const TableRowColumnName = styled.div`
  border: 1px solid black;
  background: #f5f5f5;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 25%;
  height: 100%;
  display:flex;
  font-weight: bold;
`

const ONGImageWrapper = styled.div`
  height: 200px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 1rem;
`

const ONGImage = styled.div`
  background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex1LohvYxMA0bmBVgApdN6oWHIpE3csO0Qw&usqp=CAU');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  height: 200px;
  width: 200px;
`

const ONGName = styled.div`
  font-size: 24px;
  font-weight:bold;
  color: white;
  width: 200px;
`

const SidebarContentWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  heigth: 400px;
  width: 100%;
`

const SidebarContent = styled.div`
  display:flex;
  font-size: 16px;
  color: white;
`

const SidebarContentTitle = styled.div`
  display:flex;
  font-weigth: bold;
  font-size: 20px;
  color: white;
`

export default Dashboard