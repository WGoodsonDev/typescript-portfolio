import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import OtherPage from './components/OtherPage';
import AnotherPage from './components/AnotherPage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={
        <>
          <NavBar />
          <HomePage />
        </>
      }/>
      <Route path={'/other'} element={
        <>
          <NavBar />
          <OtherPage />
        </>
      } />
      <Route path={'/another'} element={
        <>
          <NavBar />
          <AnotherPage />
        </>
      } />
      
    </Routes>
  );
}

export default App;

/* <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Header>
          Fomantic-UI & Semantic-UI-React
        </Header>
      </Container> */