import React from 'react';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';
const ContactUs = () => {
    return (
        <div className='my-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[40px] md:px-[40px] lg:px-[100px] gap-4 '>
                <div className=' border-solid border-[1px] border-green-500 py-[40px]'>
                    <div className='flex justify-center items-center  '>
                        <MdMarkEmailRead size={40} />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl font-bold py-1'>Email Address</h1>
                        <p>info@webmail.com</p>
                        <p>jobs@webexample.com</p>
                    </div>
                </div>

                <div className=' border-solid border-[1px] border-green-500 py-[40px]'>
                    <div className='flex justify-center items-center'>
                        <BsTelephonePlusFill size={40} />
                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl font-bold py-1'>Phone Number</h1>
                        <p>+0123-456789</p>
                        <p>+987-6543210</p>
                    </div>
                </div>


                <div className=' border-solid border-[1px] border-green-500 py-[40px]'>
                    <div className='flex justify-center items-center'>
                        <FaAddressCard size={40}/>
                    </div>
                    <div className='text-center'>
                        <p className='text-xl font-bold py-1'>Office Address</p>
                        <p>18/A, New Born Town Hall</p>
                        <p>New York, US</p>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default ContactUs;