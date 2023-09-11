import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../../assets/back/back1.jpeg'
import Product from './Product';

const Products = () => {
    return (
        <div>

            {/* banner */}
             <div className='relative'>
                <div>
                <div className='absolute  w-full h-full bg-black/80 round-xl text-white '>
                    <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]'>
                        <p className='text-green-500 italic'>Wellcome to Our company</p>
                        <h1 className='text-[40px] mt-5 my-2'>Products</h1>
                        <div className='flex rtl text-end'>
                         <Link to={'/'} className='pr-4  hover:text-green-500'>Home</Link>
                         <p className='border-s-4 border-green-500 px-4 text-green-500 italic'>Products</p>
                         </div>
                    </div>
                    

                </div>
                <img src={img2} alt="" className='h-[460px] md:max-h-[500px] w-full object-cover' />
                </div>

             </div>

            {/* products */}
             <div>
                        <Product/>
             </div>
        </div>
    );
};

export default Products;