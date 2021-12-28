import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ReceiptModal } from '../cusModal';
import { baseUrl } from "../env";

export default function CartTotals({value}) {
    
    let subTotal = value.map(item => Number(item?.total)).reduce((a, b) => a + b , 0);
    const [reci, setReci] = useState([])
    const [orderNum, setOrderNum] = useState('')
    const [showModal, setShowModal] = useState(false)
    const tempTax = subTotal * 0.1;
    const [orderStat, setOrderStat] = useState('Please wait while we process your order status.....')
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    const history = useHistory();
    const rand = ()=>{
     let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'ELT';
    for ( var i = 0; i < 7; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
    }
    
    
    const orderGoods = async(values)=>{
        try{
            const res = await axios.post(`${baseUrl}/order`, values);
            console.log(res?.data)  
            toast.success('Your order has been sent ')
            setOrderStat('Successful')
            clearChart();
        }catch (err){
            setOrderStat('Failed')
            toast.error('There was an error processing your order please try again')
        }
    }

    const sendProd = () =>{
        setReci(value);
        setShowModal(true);
     orderGoods({order:value, num:orderNum})

        
    }


    

 

    const clearChart = ()=>{
        axios.get(`${baseUrl}/clear`).then(res =>{
            history.push(history.location.pathname)
            //toast.success(res?.data?.message)
        })
        .catch(err => {
            toast.error(err?.response?.message ?? 'An error occured please check your internet')
        })
    }

    useEffect(()=>{

        setOrderNum(rand())
    }, [])

    return (
        <React.Fragment>
        { showModal ? <ReceiptModal closeModal={setShowModal}
        status={orderStat}
         data={reci} 
            orderNum={orderNum}
         /> : <span />  }
            <TotalWrapper className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                      
                            <button 
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick = {() => clearChart()}
                            >
                                clear cart
                            </button>
                        
                        <h5>
                            <span className=""> subtotal :  </span>
                            <span>  $ { subTotal ?? 0 } </span>
                        </h5>
                        <h5>
                            <span className=""> tax :  </span>
                            <span> $ { tax ?? 0 } </span>
                        </h5>
                        <h5>
                            <span className=""> total : </span>
                            <span>  $ { total ?? 0 } </span>
                        </h5>
                { 
                    value.length > 0 ? (<button className='button mb-5' onClick={sendProd} >Order Now</button>): (<span />)
                }
                    </div>
                </div>
            </TotalWrapper>
        </React.Fragment>
    )
}

const TotalWrapper = styled.div`

color:#fff;

h5 {
    color:#fff;
}

span {
    color:#fff;
}

p {
    color:#fff;
}

.button {

padding:6px 12px;
border-radius:8px;
background:#DDAF00;
color:#fff;
margin-top:1rem;
border:none;
box-shadow: 0px 4px 6px -2px #768798;
}

`




