import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {Col,Container,Row,Table,Button} from "react-bootstrap"
const ManageBook = () => {
    

  const [books,setBooks]=useState([]);
  const[deleteDate,setDeleteData]=useState([]);
  const navigate=useNavigate();


  useEffect(()=>{
fetchData();
  },[deleteDate]) 


  const fetchData=async()=>{
    await axios
    .get("https://6643a2606c6a65658707de9e.mockapi.io/api/book/")
    .then((res)=>setBooks(res.data))
    .catch((error)=>console.log(error));
  };

  const handleEdit=(bid)=>{
    navigate(`/dashboard/${bid}`);
  }

  const handleDelete=async(bid)=>{
    await axios.delete(`https://6643a2606c6a65658707de9e.mockapi.io/api/book/${bid}`)
    .then((res)=>setDeleteData(res.data))
    .catch((error)=>console.log(error));


  }

  
    return (
        <>
           <section>
      <Container className="booklist_container">
        <Row className="row-cols-1 row-cols-md-3">
          <Col className="col-12 col-md-12">
          <h2>Manage Books</h2>
            <Table striped className="table-condensed">
                
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>ISBN</th>
                  <th>Publication Date</th>
                  {/* <th>Author Name</th> */}
                  <th>Date of Birth</th>
                  <th>Biography</th>
                  <th colSpan={2}>Actions</th>
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
                      {/* <td>{element.author.name}</td> */}
                      <td>{element.author.dob}</td>
                      <td>{element.author.biography}</td>
                      <td><Button variant="success" onClick={()=>{handleEdit(element.id)}}>Edit</Button></td>
                      <td><Button variant="danger" onClick={()=>{handleDelete(element.id)}}>Delete</Button></td>
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

export default ManageBook;