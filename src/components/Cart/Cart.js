import "./Cart.css"
import React from 'react'
import {  useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Cart = () => {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            start: "",
            end: "",
            quanty: "0"

        },
        onSubmit: async values => {
            try {
                 await axios.post("https://model-react.herokuapp.com/cart",values)
                // await axios.post("http://localhost:3001/cart",values)
                navigate("/")
                alert("saved");
            }
            catch (error) {
                console.log(error)
            }

        }

    })
   


    return (
        <>
            <div className="row fs-4 ">

                <form onSubmit={formik.handleSubmit}>
                    <div className='row m-3 p-2 d-flex justify-content-center '>

                        <div className='col-lg-4  pad'>
                            <lable >Start Date and Time</lable>
                            <input type="datetime-local" className='form-control mt-2' name='start'
                                onChange={formik.handleChange} value={formik.values.start} required
                            ></input>

                        </div>

                    </div>
                    <div className='row m-3 p-2 d-flex justify-content-center '>
                        <div className='col-lg-4 pad'>
                            <lable>End Date and Time</lable>
                            <input type="datetime-local" className='form-control mt-2' onChange={formik.handleChange} required
                                name='end' value={formik.values.end} ></input>

                        </div>
                    </div>
                    <div className='row m-3 p-2  d-flex justify-content-center'>
                        <div className='col-lg-4 pad'>
                            <lable className='text-center'>No of Cars</lable>
                            <input type="number" className='form-control mt-2'  onChange={formik.handleChange} required
                                name='quanty' value={formik.values.quanty}></input>

                        </div>
                    </div>
                   
                    <div className='row m-3 p-2  d-flex justify-content-center'>
                        <div className='col-lg-4  pad'>
                            <button type="submit" className='btn btn-primary form-control '  >Pay</button>
                        </div>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Cart