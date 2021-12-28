import {  useState } from 'react';
import { Header, Form } from './design.styled';
import { Footer } from './footer';
import {  useFormik } from "formik";
import axios from 'axios';
import { CustomSelect } from './select';
import toast from 'react-hot-toast';
import { baseUrl } from './env';

export const Admin = ()=>{

    const optionsNumb = [
       
        { value: 'phone', label: 'phone' },
        { value: 'laptop', label: 'laptop' },
        { value: 'desktop', label: 'desktop' },
        { value: 'accessories', label: 'accessories' }
      ]

      const color = [
       
        { value: 'Red', label: 'Red' },
        { value: 'Black', label: 'Black' },
        { value: 'Gold', label: 'Gold' },
        { value: 'White', label: 'White' },
        { value: 'Blue', label: 'Blue' }
      ]

    const [imge, setImge] = useState(null);

    const sendProduct = async(values)=>{
        try{
            const res = await axios.post(`${baseUrl}/create`, values);

            toast.success(res?.data?.message ?? 'Product added to cart')
            console.log(res?.data)
        }catch(err){
            console.log(err);
            toast.error(err?.response?.message ?? 'There was an error creating product')
        }
    }

    const onSubmit = async(value) =>{
       const newProd = {
           ...value,
           image:imge
       }

      sendProduct(newProd)
    }

    const uploadImage = async(data)=>{

        try{
            const res = await axios.post(`${baseUrl}/upload`, data);
            return res?.data?.data;
            
        }catch(err){
            console.log(err)
        }

    }

    const onChangeImage = async(e)=>{
        const dataForm = new FormData();
        const {files} = e.target;
        dataForm.append('avatar', files[0])
        const logo = await uploadImage(dataForm);
        setImge(logo)
  
        
    }
   
    

    const formik = useFormik({ 
        initialValues: { 
            title: "", 
            description: "", 
            price: "",
            category:"--Select--",
            color:"--Select--"
        }, 
        validateOnBlur: true,
        onSubmit:(value)=>onSubmit(value) 
        
    });

    return (
        <div>
            <Header>
                <h4> Add New Product </h4>

            </Header>
            <section className='container' style={{marginLeft:'10%'}} >
                <div>
                <Form className='row' onSubmit={formik.handleSubmit} >
                <div className='col-6 form-group' >
                <label className='mb-3' > Product Name </label>
                <input type='type' onChange={formik.handleChange} value={formik.values.title} name='title' className='form-control' placeholder='Enter Product name' />
                </div>
                <div className='col-6 form-group' >
                <label className='mb-3'  > Product Price </label>
                <input type='type' onChange={formik.handleChange} value={formik.values.price} name='price' className='form-control' placeholder='$100' />
                </div>
                <div className='col-6 form-group' >
                <label className='mb-3'  > Product Description </label>
                    <textarea cols='5' onChange={formik.handleChange} value={formik.values.description} name='description' rows='7' className='form-control' placeholder='Enter product description' ></textarea>
                </div>
                <div className='col-6 form-group' >
                <div><label className='mb-3'  > Selected Product view </label></div>
                { imge && ( <img src={imge} alt='.' style={{width:'130px', height:'130px', borderRadius:'60px', marginTop:'6%', marginLeft:'3rem'}} className="border img-thumbnail rounded-circle"  /> ) }
                </div>
                <div className='col-6 form-group' >
                <label > Select Product Color </label>
                <CustomSelect options={color} 
                    value={formik.values.color}
                    onChange={value => formik.setFieldValue('color', value.value)}
                     className='' />
                </div>
                <div className='col-6 form-group' >
                <label className='mb-3'   > Product Category </label>
                <CustomSelect options={optionsNumb} 
                    value={formik.values.category}
                    onChange={value => formik.setFieldValue('category', value.value)}
                     className='' />

                </div>
                <div className='col-12 form-group' >
                <label className='label' for='prod'  > Select Product Image </label>
                    <input type='file' name='avatar' id='prod' onChange={onChangeImage} hidden />
                </div>
                <div className='col-4' >
                <input type='submit' className='btn btn-success bg-success' />
                </div>
                </Form>
                </div>
            </section>
        <Footer />
        </div>
    )
}