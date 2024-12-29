import React from 'react';
import Products from './Products';

const Product = ({product,handleAddToCarts}) => {
    const {name,price,seller,ratings,img} = product
    const {handleAddToCart} = handleAddToCarts;
    

      return (
        <div className="border-2  h-[520px] rounded-md relative">
            <div className="p-2 card-compact mb-4">
            <figure>
            <img className="w-[286px] h-[286px] rounded-md"
            src={img}
            alt={name} />
            </figure>
        <div className="card-body">
            <h2 className="card-title text-black">{name.length > 20 ? name.slice(0,15)
            + "..." : name  }</h2>
            <p className="text-base-100">price: {price}</p>
            <p className="text-base-100">manufacturer: {seller}</p>
            <p className="text-base-100">ratings: {ratings}</p>
            
      </div>
        </div>
       <div className="absolute bottom-0 right-0 left-0">
          < button onClick={() => handleAddToCart(product)}
            className="btn btn-primary w-full rounded-b-md rounded-none">Add to Cart</button>
          </div>
        </div>
    );
};

export default Product;