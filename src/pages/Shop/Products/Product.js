import React, { useState } from 'react';
import { shopData } from '../../../components/data/shopData';

import Showproducts from './Showproducts';
import CartProduct from '../../Home/HomeProducts/CartProduct';

const Product = () => {
    const [products,setProducts]=useState(shopData)
    const [modalproducts, setModalProducts] = useState(null);


    // filter type products
    const filterType=(category)=>{
        setProducts(
            shopData.filter((item)=>{
                return item.category ===category;
            })
        );
    };
    return (
        <div className=' my-[40px] lg:my-[100px]' data-aos="fade-up">
             <div className='text-center px-[40px]'>
                <h1 className='lg:text-[40px] text-[30px] text-green-500 italic font-bold'>Our Products</h1>
                <p className='py-2 text-gray-400'> We provide best quality & fresh grocery items near your location</p>
             </div>

             {/* filter products */}
              <div className='mb-[30px]'>
            <div className='flex flex-wrap justify-center items-center py-10'>
                <button onClick={()=>setProducts(shopData)} className=' px-4 hover:text-green-500 font-bold'>All Products</button>
                <button onClick={()=>filterType('chips')} className='border-s-4 border-green-500 px-4 hover:text-green-500 font-bold'>Chips</button>
                <button onClick={()=>filterType('vegetable')} className='border-s-4 border-green-500 px-4 hover:text-green-500 font-bold'> Vegetable</button>
                <button onClick={()=>filterType('foods')} className='border-s-4 border-green-500 px-4 hover:text-green-500 font-bold'>Food</button>
                <button onClick={()=>filterType('drinks')} className='border-s-4 border-green-500 px-4 hover:text-green-500 font-bold'>Drink</button>
            </div>
          </div> 

             {/* product show */}
             
             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto px-[40px] lg:px-[100px]'>
             {
                        products.map((product) => (

                            

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