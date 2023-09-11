import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../../../assets/back/back1.jpeg'
import img1 from '../../../../assets/about/1.png'
const About = () => {
    return (
        <div>
            {/* about banner */}
            <div className='relative'>
                <div>
                    <div className='absolute  w-full h-full bg-black/80 round-xl text-white '>
                        <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]'>
                            <p className='text-green-500 italic'>Wellcome to Our company</p>
                            <h1 className='text-[40px] mt-5 my-2'>Abut Us</h1>
                            <div className='flex rtl text-end'>
                                <Link to={'/'} className='pr-4  hover:text-green-500'>Home</Link>
                                <Link to={'/'} className='pr-4 border-s-4 border-green-500 hover:text-green-500 px-4'>Products</Link>
                                <p className='border-s-4 border-green-500 px-4 text-green-500 italic'>About Us</p>
                            </div>
                        </div>


                    </div>
                    <img src={img2} alt="" className='h-[460px] md:max-h-[500px] w-full object-cover' />
                </div>

            </div>

            {/* abou shop */}

            <div className='px-[40px] lg:px-[100px] my-[40px] lg:my-[100px]'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    {/* img */}
                    <div className=''>
                        <img src={img1} alt="" />

                    </div>
                    {/* about */}
                    <div>
                        <div>
                            <p>KNOW MORE ABOUT SHOP</p>
                            <h1>Trusted Organic Food Store</h1>
                              
                        </div>
                        <div>
                            <p>Best organic food store in Bangladesh for its supreme quality in
                                 collecting natural and healthy organic food products.</p>
                        </div>
                        <div>
                            <p> sellers who aspire to be good, do good, and spread goodness.
                                 We democratic, self-sustaining, two-sided marketplace which 
                                 thrives on trust and is built on community and quality content.</p>
                                 <h2>Topu Raihan</h2>
                                 <p>Shop Diretor</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;