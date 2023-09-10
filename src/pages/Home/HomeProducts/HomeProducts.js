import React, { useState } from 'react';
import { shopData } from '../../../components/data/shopData'
import { Link } from 'react-router-dom';
const HomeProducts = () => {

    const [food, setfood] = useState(shopData)

    const sliceFood = food.slice(0, 8)
    return (
        <div className='mb-[50px]'>
            <div className='text-center mb-[30px]'>
                <h3 className='text-[20px] font-bold text-green-500 italic'>Best seller grocery near you</h3>
                <p className=' pt-2 text-gray-400'>We provide best quality & fresh grocery items near your location</p>
            </div>

            <div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-[40px] lg:px-[100px] ' >
                    {
                        sliceFood.map((f) => (
                            <div key={f.id} className=' cursor-pointer cart shadow-lg hover:scale-105 duration-300 mt-[30px] pb-[10px]'>
                                <img className='' src={f.img} alt="" />
                                <div className='pt-7 text-center'>
                                    <p>{f.name}</p>
                                    <p className='font-bold'>Prise: ${f.price}</p>

                                </div>
                            </div>
                        ))
                    }
                </div>




            </div>

            <Link to={'/products'}>
                <div class="text-center mt-[70px] py-[20px]">
                    <button class="mx-auto  text-black font-bold  px-4 py-3 border-solid border-[1px] border-white-200  
   hover:border-none   rounded-none 
   hover:bg-green-600  duration-700" >
                        All Products
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default HomeProducts;