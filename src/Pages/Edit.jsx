import React,{useEffect,useState} from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { Col,Container,Row,Button } from 'react-bootstrap';
import * as Yup from "yup";

const Edit = () => {
  
    const navigate=useNavigate();
    const {id}=useParams();
    const [editbook,setEditBook]=useState({
      book:{
        title:"",
        author:"",
        isbn:"",
        pubdate:"",
      },
      author:{
        name:"",
        dob:"",
        biography:""
      }
    });

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async()=>{
      await axios
      .get(`https://6643a2606c6a65658707de9e.mockapi.io/api/book/${id}`)
      .then((res)=>setEditBook(res.data))
      .catch((error)=>console.log("error"));

    };

    useEffect(()=>{
      formik.setValues(editbook);
    },[editbook]);

    const validationschema=Yup.object({
      book:Yup.object({
        title:Yup.string().required("Field is empty"),
        author:Yup.string().required("Field is empty"),
        isbn:Yup.string().matches(/^[0-9]{1,10}$/,'ISBN must not be more than 10 digits').required("Field is empty"),
      pubdate: Yup.date().required("Field is empty"),

      }),
      author:Yup.object({
        name:Yup.string().required("Field is empty"),
        dob:Yup.date().required("Field is empty"),
        biography:Yup.string().required("Field is empty")
      })
    });

    const handleSubmit=async(values)=>{
      await axios
      .put( `https://6643a2606c6a65658707de9e.mockapi.io/api/book/${id}`,values)
      .then((res)=>console.log(res))
      .catch((error)=>console.log(error));
      navigate("/dashboard");
    }

    let formik = useFormik({
      initialValues: {
        book: {
          title: "",
          author: "",
          isbn: "",
          pubdate: "",
        },
        author: {
          name: "",
          dob: "",
          biography: "",
        },
      },
      validationSchema: validationschema,
      onSubmit: handleSubmit,
    });
    return (
        <>
          <section>
      <Container>
        <h1>Edit Book</h1>
        <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 userlist_container">
          <form onSubmit={formik.handleSubmit} className="myform">
            <Col>
              <div>
                <h3>Book Details</h3>
                <label>Book Name :</label>
                <input
                  type="text"
                  name="book.title"
                  value={formik.values.book.title}
                  onChange={formik.handleChange}
                  placeholder="Title of the book"
                />
                {formik.errors.book?.title ? (<div className="error_message">{formik.errors.book.title}</div>) : null }
              </div>
              <div>
                <label>Author name :</label>
                <input
                  type="text"
                  name="book.author"
                  placeholder="Author of book"
                  onChange={formik.handleChange}
                  value={formik.values.book.author}
                />
                {formik.errors.book?.author ? (<div className="error_message">{formik.errors.book.author}</div>) : null }
              </div>
              <div>
                <label>ISBN :</label>
                <input
                  type="text"
                  name="book.isbn"
                  placeholder="Book ISBN"
                  onChange={formik.handleChange}
                  value={formik.values.book.isbn}
                />
                {formik.errors.book?.isbn ? (<div className="error_message">{formik.errors.book.isbn}</div>) : null }
              </div>
              <div>
                <label>Publication Date :</label>
                <input
                  type="date"
                  name="book.pubdate"
                  placeholder="Publication date"
                  onChange={formik.handleChange}
                  value={formik.values.book.pubdate}
                />
                {formik.errors.book?.pubdate ? (<div className="error_message">{formik.errors.book.pubdate}</div>) : null }
              </div>
            </Col>
            <Col>
              <div>
                <h3>Author Details</h3>
                <label>Name of Author :</label>
                <input
                  type="text"
                  name="author.name"
                  placeholder="Author's name"
                  onChange={formik.handleChange}
                  value={formik.values.author.name}
                />
                {formik.errors.author?.name ? (<div className="error_message">{formik.errors.author.name}</div>) : null }
              </div>
              <div>
                <label>Date of Birth :</label>
                <input
                  type="date"
                  name="author.dob"
                  placeholder="Author's DOB"
                  onChange={formik.handleChange}
                  value={formik.values.author.dob}
                />
                {formik.errors.author?.dob ? (<div className="error_message">{formik.errors.author.dob}</div>) : null }
              </div>
              <div>
                <label>Biography :</label>
                <input
                  type="text"
                  name="author.biography"
                  placeholder="Short description about author"
                  onChange={formik.handleChange}
                  value={formik.values.author.biography}
                />
                {formik.errors.author?.biography ? (<div className="error_message">{formik.errors.author.biography}</div>) : null }
              </div>
              <Button type="submit" variant="success">
                Update
              </Button>
            </Col>
          </form>
        </Row>
      </Container>
    </section>   
        </>
    );
};

export default Edit;