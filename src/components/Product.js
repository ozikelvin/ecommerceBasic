import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {useItem} from '../hooks';

const Product = (product)=> {
    
	const {  handleDetails, addToCart, openModal } = useItem();
			const { _id, title, image, price, inCart} = product?.product;
	

        return (
            <ItemWrapper className="col-9 col-md-6 col-lg-3 my-3">
                <div className="card">
								
											<div 
											className="img-container p-2" 
											onClick={() => 
												handleDetails(_id)
											}
											>
											<Link to={`/details/${_id}`}  >
												<img src={image} alt="item" className="card-img-top" />
											</Link>
											<button 
												className="cart-btn" 
												disabled={inCart ? true : false} 
												onClick={() => {
													addToCart(_id);
													openModal(_id);
												}}
												>
												{inCart ? (
													<p className="text-capitalize mb-0" disabled>
														{" "}
														in cart
													</p>
												): (
													<i className="fas fa-cart-plus" />
													)}
											</button>
										</div>
									
									{/* card footer */}
									<div className="card-footer d-flex justify-content-between">
										<p className="align-self-center mb-0">
											{title}</p>
										<h5 className="text-blue font-italic mb-0">
											<span className="mr-1">$</span>
											{price}
										</h5>
									</div>
								</div> 
            </ItemWrapper>
        );
    
}
 
const ItemWrapper = styled.div`

	padding:10px;

	.card{
		border-color: transparent;
		transition: all 1.5s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}

	img {
		width:50%;
		height:50%;
	}

	&:hover{
		.card{
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container{
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.img-container:hover .card-img-top {
		transition: scale(1.2);
	}
	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: var(--lightBlue);
		border: none;
		color: var(--mainWhite);
		font-size: 1.4rem;
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 100%);
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		color: var(--mainBlue);
		cursor: pointer;
	}
`

export default Product