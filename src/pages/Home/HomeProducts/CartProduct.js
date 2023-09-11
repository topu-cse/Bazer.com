import React from 'react';

const CartProduct = ({modalproducts}) => {
    if (!modalproducts) {
        return null; // Return early or display an error message
      }
    
      const { name, price,img } = modalproducts;
    return (
        <div>
            <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img}alt="" />
                    <div className='text-center'>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">price: ${price}</h3>
                    <button  className='border-solid border-[1px] border-black-200 
                           px-[30px] mt-3  py-4 bg-green-500
                               '>Add Cart</button>
                    </div>
                   
                   
                    
                </div>
            </div>
        </>
        </div>
    );
};

export default CartProduct;