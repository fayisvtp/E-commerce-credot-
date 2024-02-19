// Cart.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Mycontext } from './context/Context';

function Cart() {
  const { cart } = useContext(Mycontext);
  const { productId } = useParams();

  const selectedProduct = cart.find(item => item.id === productId);
  console.log(selectedProduct);

  return (
    <div className='bg-white'>
      {selectedProduct && (
        <div className='cart col-10 d-flex h-full m-5'>
        <div className='image  col-4 m-5 p-3 card  shadow' style={{backgroundColor:'#F9F9F9'}}>
            <img className='w-50 m-auto p-3' src={selectedProduct.src} alt="" />
        </div>
        <div className='col-6 m-5 p-3 '>

        <h1 className="text-2xl font-bold">{selectedProduct.name}</h1>

          <p className='text-danger'>{selectedProduct.category}</p>
          <p>MRP {selectedProduct.prize}</p>
          <p>Offer Price {selectedProduct.offerPrize}</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
