import React from 'react';
import { AiFillCustomerService} from "react-icons/ai";
import {SiPurescript} from "react-icons/si";
import {GrDeliver} from "react-icons/gr";

const Service = () => {
    return (
        <div className='mb-[80px]'>
            <div className='text-center pb-8'>
                <h1 className='text-3xl italic text-green-500 font-bold'>Why You Choose Us</h1>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-[40px] md:px-[40px] lg:px-[100px]'>
                  
                  {/* cart */}
                  <div className='text-center'>
                     <div className='flex items-center justify-center my-4'>
                         <AiFillCustomerService size={30}/>
                     </div>
                     <div>
                        <h1 className='text-green-500 font-bold pb-4 italic'>24/7 Online Support</h1>
                        <p className='text-gray-400'>customers can get help and find answers to questions as soon as they come up—24/7 and in real-time</p>
                     </div>
                  </div>

                  <div className='text-center'>
                     <div className='flex items-center justify-center my-4'>
                         <SiPurescript size={30}/>
                     </div>
                     <div>
                        <h1 className='text-green-500 font-bold pb-4 italic'>100% Pure Foods</h1>
                        <p className='text-gray-400'>Discover the best gluten & lactose free products in India at PureFoods.
                             Enjoy a range of healthy and delicious. </p>
                     </div>
                  </div>

                  <div className='text-center'>
                     <div className='flex items-center justify-center my-4'>
                         <GrDeliver size={30}/>
                     </div>
                     <div>
                        <h1 className='text-green-500 font-bold pb-4 italic'>Home Delivery</h1>
                        <p className='text-gray-400'> the customer's home rather than the customer taking or collecting them from the store.</p>
                     </div>
                  </div>
            </div>
        </div>
    );
};

export default Service;