import React from 'react';

const Showproducts = ({product,setModalProducts}) => {
    return (
        <div>
            {/* Product Card */}


            <label className='cart shadow-lg hover:scale-105 duration-300 mt-[30px] pb-[10px] cursor-pointer '
            onClick={()=>setModalProducts(product)}
             htmlFor="booking-modal">
                <img className='' src={product.img} alt="" />
                <div className='pt-7 text-center'>
                    <p>{product.name}</p>
                    <p className='font-bold'>Prise: ${product.price}</p>


                </div>
            
            </label>
        </div>
    );
};

export default Showproducts;