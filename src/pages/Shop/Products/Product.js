import React, { useState } from 'react';
import { shopData } from '../../../components/data/shopData';

import Showproducts from './Showproducts';
import CartProduct from '../../Home/HomeProducts/CartProduct';

const Product = () => {
    const [products,setProducts]=useState(shopData)
    const [modalproducts, setModalProducts] = useState(null);
    return (
        <div className=' my-[40px] lg:my-[100px]  '>
             <div className='text-center px-[40px]'>
                <h1 className='lg:text-[40px] text-[30px] text-green-500 italic font-bold'>Our Products</h1>
                <p className='py-2 text-gray-400'> We provide best quality & fresh grocery items near your location</p>
             </div>

             {/* product show */}
             
             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto px-[40px] lg:px-[100px]'>
             {
                        products.map((product) => (

                            //  <Link key={f.id} className='  cart shadow-lg hover:scale-105 duration-300 mt-[30px] pb-[10px]'>
                            //  <div  >
                            //     <img className='' src={f.img} alt="" />
                            //     <div className='pt-7 text-center'>
                            //         <p>{f.name}</p>
                            //         <p className='font-bold'>Prise: ${f.price}</p>

                            //     </div>
                            // </div>
                            //  </Link>

                            <Showproducts key={product.id} product={product} setModalProducts={setModalProducts}/>
                        ))
                    }

                    <CartProduct
                    modalproducts={modalproducts}
                    />
             </div>
        </div>
    );
};

export default Product;