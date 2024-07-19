import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Col,Container,Row,Table} from "react-bootstrap"

const DashBoard = () => {
     const [books,setBooks]=useState([]);
     useEffect(()=>{
      fetchdata();
     },[]);

     //fetch data using axios

     const fetchdata=async()=>{
      await axios
      .get("https://6643a2606c6a65658707de9e.mockapi.io/api/book/")
      .then((res)=>setBooks(res.data))
      .catch((error)=>console.log(error));
     }


    return (
        <>
          <section>
      <Container className="booklist_container">
        <Row className="row-cols-1 row-cols-md-3">
          <Col className="col-12 col-md-12">
          <h2>Books Details</h2>
            <Table striped className="table-condensed">
                
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>ISBN</th>
                  <th>Publication Date</th>
                </tr>
              </thead>
              <tbody>
                {books.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.book.title}</td>
                      <td>{element.book.author}</td>
                      <td>{element.book.isbn}</td>
                      <td>{element.book.pubdate}</td>
                    </tr>
                  );
                })}
                
              </tbody>
            </Table>
            <h2>Authors Details</h2>
            <Table striped className="table-condensed">
            
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Biography</th>
                </tr>
              </thead>
              <tbody>
                {books.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.author.name}</td>
                      <td>{element.author.dob}</td>
                      <td>{element.author.biography}</td>
                    </tr>
                  );
                })}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>   
        </>
    );
};

export default DashBoard;