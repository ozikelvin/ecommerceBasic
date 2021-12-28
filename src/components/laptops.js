import { useState, useEffect , useCallback } from "react";
import { Footer } from './footer';
import Title from "./Title";
import axios from 'axios';
import { CustCard  } from './design.styled';

import { useHistory } from 'react-router-dom';
import { baseUrl } from "./env";


export const Laptops = ()=>{

    const [phones, setPhones] = useState(null)
    const history = useHistory();

    const fetchData = useCallback(
		async()=>{
			const res = await axios.get(`${baseUrl}/allProduct`);
                setPhones(res?.data?.products.filter(item => item.category === 'laptop'))
           
		}, []
	)

        useEffect(()=>{
            fetchData()
          
        }, [fetchData])



    return (
        <div>
        <div className='container' >
        <Title name="Laptops" title="on sales" />
            <div className='my-5 row' >

            {
                phones && phones.map(data =>{
                return   <CustCard key={data?._id} className='col-4 mx-2' onClick={()=> history.push(`/details/${data?._id}`)}  >
                <img src={data?.image} alt='.' />
                <div className='my-3' >
                <p className='p'>{ data?.description ?? data?.title}</p>
            </div>
            <div className='my-2 d-flex justify-content-center' >
            <div className='d-flex my-2' >
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star "></span>
            </div>
            <div className='mx-3 ' >
                <span className='span text-nowrap' >&#x20A6; { data?.price} </span>
             </div>
            </div>
            </CustCard>
                })
            }

            {
                phones && phones.length === 0 ? (
                   <div className='container d-flex justify-content-center' >
                   <span style={{fontSize:'23px', color:"#fff", lineHeight:'40px', textAlign:'center'}} > No Product in store Yet... </span>
                   </div>
                ): (<span></span>)
             }
           
            </div>
        </div>
        <Footer />
        </div>
    )
}

