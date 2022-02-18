import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Register.css"

function Register() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        // let loginData = await axios.post(" https://model-react.herokuapp.com/register", values)
           let loginData = await axios.post("https://model-react.herokuapp.com/register", values)
        navigate("/login")

      } catch (error) {
        console.log(error)
      }
    }
  });
  return (
    <>

      <div className='row '>

        <div className='col-sm-3'>
        </div>

        <div className='col-sm-6 justify-content-center mt-3'>

          <div className='box mt-5 card box2 '>
            <h1 className='text-center mt-4'>Register</h1>
            <form onSubmit={formik.handleSubmit} className='registerr '>
              <div className='col-lg-12 text-left mt-3 '>
                <label>Name</label>
                <input type="text" className="form-control" name='name' placeholder='Enter your name' required
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div className='col-lg-12'>
                <label>Email</label>
                <input type="email" className="form-control" name='email' placeholder='Enter your email' required
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className='col-lg-12'>
                <label>Password</label>
                <input type="password" className="form-control" name='password' placeholder='Enter your password' required
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div className='submit text-center'>
               
                <button type="submit" className='btn btn-primary mt-3 mb-4 ' >Submit</button>
               
              </div>


            </form>
          </div>

        </div>

        <div className='col-sm-3'>
        </div>

      </div>

    </>
  )
}

export default Register
