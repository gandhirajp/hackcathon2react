import "./Cart.css"
import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Cart = () => {
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            start: "",
            end: "",
            amo: "",
            quanty: "0"

        },
        onSubmit: async values => {
            try {
                await axios.post("https://model-react.herokuapp.com/cart", values)
                navigate("/")
                alert("saved");
            }
            catch (error) {
                console.log(error)
            }

        }

    })
    const [amount, setAmount] = useState('');
    const handleSubmit = (e) => {
        e.preventDefalt();
        if (amount === "") {
            alert("Plese enter Amount")
        }
        else {
            var options = {
                keey: "rzp_test_f9WknVgMZO3FyP",
                key_secret: "SsYKw6hthJbJg0qxQ4bKIlBU",
                amount: amount * 100,
                currency: "INR",
                name: "Smaiga",
                description: "Easy to pay",
                handler: function (response) {
                    alert(response.razorpay_payment_i);
                },
                prefill: {
                    name: "Gandhiraj",
                    email: "gandhiraj007p@gmail.com",
                    contact: "8825793748"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "# 3399cc"
                }

            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }


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
                            <input type="number" className='form-control mt-2' onChange={formik.handleChange} required
                                name='quanty' value={formik.values.quanty}></input>

                        </div>
                    </div>

                    <div className='row m-3 p-2  d-flex justify-content-center'>
                        <div className='col-lg-4  pad'>
                            <button  className='btn btn-primary form-control ' onClick={handleSubmit} >Pay</button>
                        </div>
                    </div>

                </form> 
               

            </div>
        </>
    )
}

export default Cart