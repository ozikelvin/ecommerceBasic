import { useState, useEffect , useCallback } from "react";
import { Footer } from './footer';
import Title from "./Title";
import axios from 'axios';
import { CustCard  } from './design.styled';

import { useHistory } from 'react-router-dom';
import { baseUrl } from "./env";


export const Desktop = ()=>{

    const [phones, setPhones] = useState(null)
    const history = useHistory();

    const fetchData = useCallback(
		async()=>{
			const res = await axios.get(`${baseUrl}/allProduct`);
                setPhones(res?.data?.products.filter(item => item.category === 'desktop'))
           
		}, []
	)

        useEffect(()=>{
            fetchData()
          
        }, [fetchData])



    return (
        <div>
        <div className='container' >
        <Title name="Desktops" title="on sales" />
            <div className='my-5 row' >

            {
                phones && phones.map(data =>{
                return   <CustCard key={data?._id} className='col-2 mx-2 pt-3 pb-0 px-2' onClick={()=> history.push(`/details/${data?._id}`)}  >
                <img src={data?.image} alt='.' />
                <div className='my-3' >
                <p className='p'>{ data?.description ?? data?.title}</p>
            </div>
            <div className='my-2 d-flex justify-content-between' >
            <div className='d-flex my-2' >
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star "></span>
            </div>

                    <div>
                        <span className='span' > {data?.color ?? ''} </span>
                    </div>

            <div className='mx-2' >
                <span className='span text-nowrap' >&#x20A6; { data?.price} </span>
             </div>
            </div>
            <div className="d-flex justify-content-center" >
                 <p style={{color:"#023498",  cursor:" pointer !important"}} > View more</p>
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

