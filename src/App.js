import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import NavBar from './components/NavBar';
const ContainerHeader = styled.div`
  background: #f2f2f2;
  padding: 20px;
  border-bottom: 1px solid #2222;
`;
const ContainerNavbar = styled.div`
  background: #f2f2f2;
`;
function App() {
  return (
    <div className='container-fluid'>
      {/* HEADER */}
      <div className='row'>
        <ContainerHeader className='col-12'>
          <Header />
        </ContainerHeader>
        {/* NAVBAR */}
        <ContainerNavbar className='col-12'>
          <NavBar />
        </ContainerNavbar>
      </div>
    </div>
  );
}

export default App;
