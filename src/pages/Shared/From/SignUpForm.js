import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../../assets/back/back1.jpeg'

const SignUpForm = () => {
    return (
        <div className='mb-10'>
            {/* Sign In banner */}
            <div className='relative'>
                <div>
                    <div className='absolute  w-full h-full bg-black/80 round-xl text-white '>
                        <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]' data-aos="fade-right">
                            <p className='text-green-500 italic'>Wellcome to Our company</p>
                            <h1 className='text-[40px] mt-5 my-2'>Sign Up</h1>
                            <div className='flex rtl text-end'>
                                <Link to={'/'} className='pr-4  hover:text-green-500'>Home</Link>
                                <p className='border-s-4 border-green-500 px-4 text-green-500 italic'>Sign Up</p>
                            </div>
                        </div>


                    </div>
                    <img src={img2} alt="" className='h-[460px] md:max-h-[500px] w-full object-cover' />
                </div>

            </div>


            {/* sing up form */}
            <div className="w-full max-w-xl mx-auto mt-10" data-aos="zoom-in-up">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Your Username"
          
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
           
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Your Password"
           
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
        
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Adreess
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Your Address"
          
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Your Phone Number"
          
            required
          />
        </div>
        <div className='mb-6'>
            <p>You have already account ! <Link to={'/signin'} className='hover:text-green-500 text-gray-400'>go to Sign In</Link></p>
        </div>

        <div className="flex items-center justify-between">
        <button className=' border-solid border-[1px] border-green-500 transition duration-300
                              text-green-500 absolute  rounded-none mt-4
                              hover:bg-green-600 px-8 py-1 hover:text-white'>Sign In</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default SignUpForm;