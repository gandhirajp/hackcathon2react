import './Login.css';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post(" https://carrentalfront.herokuapp.com/login ", values)

                window.localStorage.setItem("my_token", loginData.data.token)

                navigate("/")


            } catch (error) {
                console.log(error)
            }
            //  alert("login succes")    
        }
    });
    return (
        <>

            <div className='row'>

                <div className='col-sm-3'>
                </div>

                <div className='col-lg-6 '>
                    <div className='box mt-5 card'>
                        <form onSubmit={formik.handleSubmit} className='form' id='form'>

                            <h1 className='head text-center'>Login</h1>


                            <div className='col-lg-12 mb-3'>
                                <h4> <label>Email</label></h4>
                                <input type="email" className="form-control" name='email' placeholder='Enter your email' required
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            <div className='col-lg-12 mb-3'>
                                <h4> <label>Password</label></h4>
                                <input type="password" className="form-control" name='password' placeholder='Enter your password' required
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </div>
                            <div className='loginn mt-3 text-center ' >
                                <Link to="/">
                                    <button type="submit" className='btn btn-primary mt-3 mb-3 col-lg-6' >SignIn</button>
                                </Link> </div>

                        </form>
                    </div>
                </div>

                <div className='col-sm-3'>
                </div>

            </div>


        </>
    )
}

export default Login
