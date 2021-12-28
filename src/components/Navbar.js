import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../lgo.jpeg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (

            <NavWrapper className=" d-flex justify-content-center  ">
                <a href="/" className='my-5' >
                 	<img src={logo} alt="store" style={{width:'90px', height:'90px'}} className="border img-thumbnail rounded-circle" />
                </a>
                <ul className=" d-flex">
                    <li className=" ml-4">
                        <a href="/" className="">
                            Home
                        </a>
                    </li>
                    <li className="">
                        <a href="/product" className="">
                            Products
                        </a>
                    </li>
                    <li className="navbar-item ml-4">
                        <a href="/contact" className="">
                            Contact us
                        </a>
                    </li>
                </ul>
							<div  >
                            <a href='/cart' className="ml-auto">
									<ButtonContainer>
										<span className="mr-2">
											<i className="fas fa-cart-plus" />
										</span>
										My cart
									</ButtonContainer>
								</a>
                            </div>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
		width:100%;
		ul{
			
			font-size: 1.5rem;
			text-transform: capitalize;
            list-style:none;
            margin-top:5%;

            li {
                color:#fff;
                margin-left:25px;
            }

            a {
                color:#fff;
                text-decoration:none;
            }

		}

        div {
            margin-top:5%;
            margin-left:30%;
        }
        
        width:100%;
`