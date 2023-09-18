import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../../../assets/back/back1.jpeg'
import ContactUs from './ContactUs';
import ContactForm from '../../From/ContactForm';
import Service from '../../Service/Service'

const Contact = () => {
    return (
        <div>
             {/* contact banner */}
            
            <div className='relative'>
                <div>
                    <div className='absolute  w-full h-full bg-black/80 round-xl text-white '>
                        <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]' data-aos="fade-right">
                            <p className='text-green-500 italic'>Wellcome to Our company</p>
                            <h1 className='text-[40px] mt-5 my-2'>Contact Us</h1>
                            <div className='flex rtl text-end'>
                                <Link to={'/'} className='pr-4  hover:text-green-500'>Home</Link>
                                <Link to={'/'} className='pr-4 border-s-4 border-green-500 hover:text-green-500 px-4'>Products</Link>
                                <p className='border-s-4 border-green-500 px-4 text-green-500 italic'>Contact Us</p>
                            </div>
                        </div>


                    </div>
                    <img src={img2} alt="" className='h-[460px] md:max-h-[500px] w-full object-cover' />
                </div>

            </div>

            <ContactUs/>
            <ContactForm/>
            <Service/>
        </div>
    );
};

export default Contact;