import React from 'react';
import Title from "../Title";
import CartColums from "./CartColums";
import EmptyCart from "./EmptyCart";
import { useHistory } from 'react-router-dom';
import CartList from "./CartList";
import CartTotals from './CartTotals';
import {useItem} from '../../hooks';



const  Cart = ()=> {
   
    const { cart } = useItem();

  
   
    
    const history = useHistory();
              
                       
                        if(cart !== null){
                            return (
                                <div style={{marginLeft:'1rem'}}>
                                <Title name="your" title="cart" />
                                <CartColums />
                               <CartList value={cart}  /> 
                              <CartTotals value={cart} history={history} /> 
                                </div>
                            );
                        } else {
                            return <EmptyCart />;
                        }
            
    
}

export default Cart;
