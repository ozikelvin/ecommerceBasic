import React, {useState, useEffect, useCallback} from 'react';
import{  useParams } from "react-router-dom";
import{ ButtonContainer } from "./Button";
import {useItem} from '../hooks';
import axios from 'axios';
import { DetailWrapper  } from './design.styled';
import { Footer } from './footer';


const  Details = ()=> {
	const {  addToCart, openModal } = useItem();
		const { id } = useParams();

		const [particularProduct, setParticularProduct] = useState({})
	

				const fetchInfo = useCallback(
					async() =>{
						const info = await axios.get(`http://localhost:3005/getProduct/${id}`);
						setParticularProduct(info?.data?.data);
						}, [id]
				)

					useEffect(()=>{

						fetchInfo()

					}, [fetchInfo])
					

                    return (
						<>
                        <DetailWrapper className="container py-5">
                            {/* title */}
                            <div className="row">
											
										</div>
										{/* end title */}
										{/* product info */}
										<div className="row">
											<div className="col-10 mx-auto col-md-6 my-3 text-capitalize wrap">
											<img src={particularProduct?.image} className="img-fluid" alt="product" />
											</div>
											{/* product text */}
											<div className="col-10 mx-auto col-md-6 my-3 mx-n5 text-capitalize">
												<h2>{particularProduct?.title} </h2>
												<h4 className="text-title text-uppercase mt-3 mb-2">
													Category : <span className="text-uppercase"> {particularProduct?.category} </span>
												</h4>
												<h4 className="text-blue">
													<strong>
														price : <span>$</span>
														{particularProduct?.price}
													</strong>
												</h4>
												<p className="text-capitalize font-weight-bold mt-3 mb-0">
													some info about products:
												</p>
												<p className=" lead">{particularProduct?.description} </p>
												{/* buttons */}
												<div>
													<span onClick={()=> window.open('/product', '_self')}>
														<ButtonContainer> 
															back to products
														</ButtonContainer>
													</span>
													<ButtonContainer 
													cart
													disabled={particularProduct?.inCart ? true: false}
													onClick={() => {
														
														addToCart(particularProduct?._id);
														openModal(particularProduct?._id);
													}}
												>
														{particularProduct?.inCart ? "inCart" : "add to cart"}
													</ButtonContainer>
												</div>
											</div>
										</div>
										
                        </DetailWrapper>
						<Footer />
						</>
        );
    
}

export default Details
