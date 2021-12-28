import { useState } from 'react';
import { Header, Form } from './design.styled';
import { Footer } from './footer';
import {  useFormik } from "formik";
import axios from 'axios';
import toast from 'react-hot-toast';
import { baseUrl } from './env';
import * as yup from "yup";

const validationSchema = yup.object ({

    firstname: yup
    .string()
    .required("First name is required!"),
    lastname: yup
    .string()
    .required("Last name is required!"), 
    email: yup
    .string()
    .required("Email is required!"),
    phone:yup
    .string()
      .required("Phone number is required!"),
    message:yup
    .string()
    .required("Message is required!"),

})

export const ContactUs = () =>{
    const [spine, setSpin] = useState(false)
    const sendProduct = async(values)=>{
        try{
            const res = await axios.post(`${baseUrl}/contact`, values);

            toast.success(res?.data?.Message)
            setSpin(false)
            console.log(res?.data)
        }catch(err){
            console.log(err);
            toast.error(err?.Message ?? err?.response?.Message)
        }
    }

    const onSubmit = async(value) =>{
        setSpin(true)
        sendProduct(value)

     }

    const formik = useFormik({ 
        initialValues: { 
            firstname: "", 
            lastname: "", 
            email: "",
            phone:"",
            message:""
        }, 
        validateOnBlur: true,
        validationSchema:validationSchema,
        onSubmit:(value)=>onSubmit(value) 
        
    });

    return (
        <div>
            <Header>
                <h4  > Contact Us </h4>

            </Header>
            <section className='container' style={{marginLeft:'10%'}} >
                <Form className='row ' onSubmit={formik.handleSubmit} >
                <div className='col-6 form-group' >
                <label className='mb-3' > Customer First Name </label>
                <input type='type'
                 name='firstname'
                 onBlur={formik.handleBlur} 
                  onChange={formik.handleChange} value={formik.values.firstname} className='form-control' placeholder='Enter Customer name' />
                  <div>
                  <span className="text-danger">{formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname: ""}</span>
                  </div>
                </div>
                <div className='col-6 form-group' >
                <label className='mb-3' > Customer Last Name </label>
                <input type='text'
                 className='form-control'
                 name='lastname'
                 onBlur={formik.handleBlur} 
                 onChange={formik.handleChange}
                 value={formik.values.lastname}
                  placeholder='Enter Customer last name' />
                  <div>
                  <span className="text-danger">{formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname: ""}</span>
                  </div>
                </div>
                <div className='col-6 form-group' >
                <label className='mb-3' > Customer Email Address </label>
                <input type='text' name='email'
                    value={formik.values.email}
                    onBlur={formik.handleBlur} 
                  onChange={formik.handleChange}
                 className='form-control' placeholder='Enter Customer email Address' />
                    <div>
                  <span className="text-danger">{formik.touched.email && formik.errors.email ? formik.errors.email: ""}</span>
                  </div>
                </div>
                <div className='col-6 form-group' >
                <label className='mb-3' > Customer Phone Number </label>
                <input type='number' name='phone'
                value={formik.values.phone}
                onBlur={formik.handleBlur} 
                onChange={formik.handleChange}
                 className='form-control' placeholder='Enter Customer phone number' />
                    <div>
                  <span className="text-danger">{formik.touched.phone && formik.errors.phone ? formik.errors.phone: ""}</span>
                  </div>
                </div>
                <div className='col-12 form-group' >
                <label className='mb-3'  > Message </label>
                    <textarea cols='5'
                     rows='7' className='form-control'
                     name='message'
                     onBlur={formik.handleBlur} 
                     value={formik.values.message}
                     onChange={formik.handleChange}
                      placeholder='Enter Message' ></textarea>
                    <div>
                  <span className="text-danger">{formik.touched.message && formik.errors.message ? formik.errors.message: ""}</span>
                  </div>
                </div>
                <div className='col-4' >
                <button style={{width:'40%', padding:'4px 10px'}}  className='btn btn-success bg-success' > { spine ? <i className="fas fa-circle-notch fa-spin"></i> : 'Submit' } </button>
                </div>
                </Form>
            </section>

            <Footer />
        </div>
    )
}