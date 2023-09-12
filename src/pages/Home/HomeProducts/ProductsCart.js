import React from 'react';


const ProductsCart = ({ product,setModalProducts }) => {
     


    return (
        <div className='hover:scale-105 duration-300'>
            {/* Product Card */}


            <label className='cart shadow-lg   mt-[30px] pb-[10px] cursor-pointer '
            onClick={()=>setModalProducts(product)}
             htmlFor="booking-modal">
                <img className='h-[250px] w-full' src={product.img} alt="" />
                <div className='pt-7 text-center'>
                    <p>{product.name}</p>
                    <p className='font-bold'>Prise: ${product.price}</p>


                </div>
            
            </label>

        </div>
    );
};

export default ProductsCart;