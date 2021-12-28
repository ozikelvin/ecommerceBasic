import React from 'react'
import {useItem} from '../../hooks';


export default function CartItem({ item }) {
    const { _id, title, image, price, total, count } = item;
    const { increment, decrement, removeItem } = useItem();
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={image}
                    style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Item:</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: $</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(_id)}> - </span>
                        <span className="btn btn-black mx-1">{count} </span>
                        <span className="btn btn-black mx-1" onClick={() => increment(_id)}> + </span>
                    </div>
                </div>
            </div>
            {/* */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(_id)}>
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total: ${total} </strong>
            </div>
        </div>
    )
}
