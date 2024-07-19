import React from 'react';
import {Formik,Form,Field,ErrorMessage} from "formik";
import {Button,Container,Row,Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import * as Yup from "yup";
import axios from 'axios';

const AddBook = () => {
    

    const initialValues={
      book:{
        title:"",
        author:"",
        isbn:"",
        pubdate:"",
      },
      author:{
        name:"",
        dob:"",
        biography:"",
      }
    };

    const validationSchema=Yup.object().shape({
      book:Yup.object().shape({
        title:Yup.string().required("Field is empty"),
        author:Yup.string().required("Field is empty"),
        isbn:Yup.string().matches(/^[0-9]{1,10}$/,"ISBN must not be more than 10 digits").required("Field is empty"),
        pubdate:Yup.string().required("Fieldis empty")
      }),
      author:Yup.object().shape({
        name:Yup.string().required("Field is empty"),
        dob:Yup.string().required("Field is empty"),
        biography:Yup.string().required("Field is empty"),
      }),
    })

    const navigate=useNavigate();

    const handleSubmit=async(values)=>{
      await axios.post("https://6643a2606c6a65658707de9e.mockapi.io/api/book",values)
      .then((res)=>console.log(res))
      .catch((error)=>console.error(error));
      navigate("/dashboard");
    };


    return (
        <>
           <section>
      <Container>
        <h1>New Book</h1>
        <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 userlist_container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="myform">
              <Col>
                <div>
                  <h3>Book Details</h3>
                  <label>Book Name :</label>
                  <Field
                    type="text"
                    name="book.title"
                    placeholder="Title of the book"
                  />
                  <ErrorMessage
                    name="book.title"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Author name :</label>
                  <Field
                    type="text"
                    name="book.author"
                    placeholder="Author of book"
                  />
                  <ErrorMessage
                    name="book.author"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>ISBN :</label>
                  <Field type="text" name="book.isbn" placeholder="Book ISBN" />
                  <ErrorMessage
                    name="book.isbn"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Publication Date :</label>
                  <Field
                    type="date"
                    name="book.pubdate"
                    placeholder="Publication date"
                  />
                  <ErrorMessage
                    name="book.pubdate"
                    component="h6"
                    className="error_message"
                  />
                </div>
              </Col>
              <Col>
                <div>
                  <h3>Author Details</h3>
                  <label>Name of Author :</label>
                  <Field
                    type="text"
                    name="author.name"
                    placeholder="Author's name"
                  />
                  <ErrorMessage
                    name="author.name"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Date of Birth :</label>
                  <Field
                    type="date"
                    name="author.dob"
                    placeholder="Author's DOB"
                  />
                  <ErrorMessage
                    name="author.dob"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Biography :</label>
                  <Field
                    type="text"
                    name="author.biography"
                    placeholder="Short description about author"
                  />
                  <ErrorMessage
                    name="author.biography"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <Button type="submit">Add Book</Button>
              </Col>

             
            </Form>
          </Formik>
        </Row>
      </Container>
    </section>  
        </>
    );
};

export default AddBook;