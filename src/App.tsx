import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Header>
          Fomantic-UI & Semantic-UI-React
        </Header>
      </Container>
    </>
  );
}

export default App;
