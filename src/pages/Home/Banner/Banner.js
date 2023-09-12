import React from 'react';
import img from '../../../assets/back/back1.jpeg'

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <div>
                    {/* overlay */}
                    <div className='absolute  w-full h-full bg-black/80 round-xl text-white  '>
                        <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]'>
                            <p className='text-green-500 italic md:text-[30px]'>Welcome to our Shop</p>
                            <p className='text-[20px] lg:text-[40px md:text-[40px]'>Healthy  <span className='text-green-500 italic'>Vegetable </span>
                             and  <span className='text-green-500 italic'>Foods </span> <br/> that you deserve to eat fresh</p>

                            <button className='border-solid border-[1px] border-green-500 transition duration-700
                              text-white absolute  rounded-none mt-2
                              hover:bg-green-600 px-8 py-4'>EXPLORE PRODUCTS</button>
                            
                        </div>
                    </div>
                    <img className='h-[460px] md:max-h-[500px] w-full object-cover ' src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;