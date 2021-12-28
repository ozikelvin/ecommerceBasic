import React, { useEffect, useState } from 'react';
import { storeProducts } from "./data";
import axios from 'axios';
import toast from 'react-hot-toast';
import { baseUrl } from "./components/env";


export const ItemContext = React.createContext();


export const ItemProvider = ({children})=> {
		const [state, setState] = useState({
			products: [],
			detailProduct: null,
			cart: [],
			modalOpen: false,
			modalProduct: null,
			cartSubTotal: 0,
			cartTax: 0,
			cartTotal: 0
		}
		)
	const setProducts = () =>{
		let tempProducts = [];
		storeProducts.forEach(item =>{
			const singleItem = {...item};
			tempProducts = [...tempProducts,singleItem];
		});
		setState(() =>{
			return{ products: tempProducts };
		});
	};

	

	const getItem = id =>{
		const product = state.products.find(item => item._id === id);
		return product;
	};

	const handleDetails = id => {
		const product = getItem(id);
		setState(() => {
		return { detailProduct: product };
		});
	};
	const addToCart = async(id )=> {

	
		try{
			let res = await axios.get(`${baseUrl}/add/${id}`);
		
			toast.success(res?.data?.message ?? 'Successfully added to cart')
			window.open(`/details/${id}`, '_self')
		}catch (err){
			toast.error(err?.message ?? err?.response?.message)
		}
		
	
	};
	 const openModal = id => {
		const product = getItem(id);
		setState(() => {
			return {modalProduct: product, modalOpen: true}
		})
	}
	 const closeModal = () => {
		 setState(() => {
			return {modalOpen: false}
		});
	};
	 const increment = async(id) => {
		const res = await axios.get(`${baseUrl}/increase/${id}`);
		toast.success(res?.data?.message);
		window.open('/cart', '_self')
	};
	 const decrement = async(id) => {
	
		const res = await axios.get(`${baseUrl}/decrease/${id}`);
		if(res?.data?.data?.count === 0){
			removeItem(id)
		}else {
			toast.success(res?.data?.message);
			window.open('/cart', '_self')
		}
	

	
	};
	 const removeItem = async(id) => {
		const res = await axios.get(`${baseUrl}/remove/${id}`);
		
		toast.success(res?.data?.message);
		window.open('/cart', '_self')
	};
	 const clearCart = () => {
		 setState(
			 () => {
				 return { cart: [] };
			 },
			 () => {
				 setProducts();
				 addTotals();
			 }
		 );
	};
	 const addTotals = () => {
		let subTotal = 0;
		state.cart.map(item => (subTotal += item.total));
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
		setState(() => {
			return {
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: total
			};
		});
	};

	const fetchData = async()=>{
		const res = await axios.get(`${baseUrl}/allProduct`);
		const productIncart = res?.data?.products.filter(item => item.inCart === true);
		
		setState(()=>{
			return { products: res?.data?.products, detailProduct: res?.data?.products, modalProduct:res?.data?.products, cart:productIncart }
		})
	
	}
	
	
	
		useEffect( ()=>{
			fetchData()

		}, [])

        return (
            <ItemContext.Provider value={{
														...state,
														handleDetails: handleDetails,
														addToCart: addToCart,
														openModal: openModal,
														closeModal: closeModal,
														increment: increment,
														decrement: decrement,
														removeItem: removeItem,
														clearCart:clearCart

												}}
												>
													{children}
												</ItemContext.Provider>
        )
    }


export  const ItemConsumer = ItemContext.Consumer;


