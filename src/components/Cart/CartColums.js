import React from 'react'
import styled from 'styled-components/macro';


export default function CartColums() {
    return (
        <Wrapper className="container-fluid text-center d-none d-lg-block mb-5">
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> name of item</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase"> total</p>
                </div>

            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
padding:19px;
width:70%;
border-radius:10px;
background:#000;
font-weight:700;
color:#fff;

`