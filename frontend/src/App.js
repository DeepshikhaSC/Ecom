import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <main className='my-2'>
        <Container>
           {/* <h3>Welcome to our Website</h3> */}
           {/* <HomePage/> */}
           <Outlet/>
        </Container>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default App