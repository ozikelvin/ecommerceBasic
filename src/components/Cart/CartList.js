import React from 'react';
import CartItem from './CartItem';
import styled from 'styled-components/macro';
import Empty from './EmptyCart';

export default function CartList({ value }) {
   
    return (
        <Wrap className="container">
            { 
                value.length > 0 ?       value.map(item => {
                return <CartItem key={item._id} item={item}
                  value={value} />; 
            }) : ( <Empty /> )
            }
        </Wrap>
    );
}

const Wrap = styled.div`

background:#f9f9f9;
border-radius:10px;
padding:40px;
width:100%;


`