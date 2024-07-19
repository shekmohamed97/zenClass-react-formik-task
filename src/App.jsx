import React from 'react';
import "./App.css";
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import SideBar from './components/SideBar';
import DashBoard from './Pages/DashBoard';
import AddBook from './Pages/AddBook';
import ManageBook from './Pages/ManageBook';
import Edit from './Pages/Edit';

const App = () => {
  return (
    <>

    <BrowserRouter>
    <Container fluid>
      
      <h2 className='title'> Books And Author's Name</h2>
       <br  className='title_br'/>
       <Row>
        <Col className='col-md-2'>
        <div>
          <SideBar/>
        </div>
        </Col>
        <Col className='col-md-10'>
          <Routes >
               
            <Route  path='/' element={<DashBoard/>} />
            <Route path='/dashboard' element={<DashBoard/>} />
            <Route path='/add' element={<AddBook/>}/>
            <Route  path='/edit' element={<ManageBook/>}/>
            <Route path='/editbook/:id' element={<Edit/>}/>
          
          </Routes>

        </Col>
       </Row>
       <div>
        <Footer/>
       </div>
    </Container>
    </BrowserRouter>
    </>
  );
};

export default App;