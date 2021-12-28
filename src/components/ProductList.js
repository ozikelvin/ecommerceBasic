import React from 'react';
import { DashBoardHeader,  Button } from './design.styled';
import desk  from '../desk.png'
import { Footer } from './footer';
import { useHistory } from 'react-router-dom';


const ProductList  = ()=>{



const history = useHistory();

    return (
        <React.Fragment>
    
            <div className="py-5">
            
                <div className="container">

                <section>
                    <DashBoardHeader className='d-flex' >
                        <div>
                        <h4> Gadget Shopping Made Easy </h4>
                        <p> With Elite Technologies you can make your online gadget shopping easy and fast</p>
                        <p>
                        We give extremely clean and durable U.K used gadgets with warranty, brand new phones, computers (laptops and desktops), and accessories with nationwide delivery. 


                        </p>
                        </div>
                        <div  >
                            <img style={{marginTop:'65px'}} src={desk} alt='.' />
                        </div>
                    </DashBoardHeader>
                </section>
                  
                <div style={{padding:'12px', marginTop:'15px'}} >
                <Button onClick={()=> history.push('/product')} > Get Started </Button>
                </div>
                </div>
                
            </div>
            <Footer />
        </React.Fragment>
            // 
    )
}
    
export default  ProductList;