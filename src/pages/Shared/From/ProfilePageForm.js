import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../../assets/back/back1.jpeg'

const ProfilePageForm = () => {
    return (
        <div className='mb-[100px]'>
            {/* Profile banner */}
            <div className='relative'>
                <div>
                <div className='absolute  w-full h-full bg-black/80 round-xl text-white '>
                    <div className='absolute top-[35%] lg:left-[20%] md:left-[20%] left-[10%] mr-[30px]' data-aos="fade-right">
                        <p className='text-green-500 italic'>Wellcome to Our company</p>
                        <h1 className='text-[40px] mt-5 my-2'>Profile</h1>
                        <div className='flex rtl text-end'>
                         <Link to={'/'} className='pr-4  hover:text-green-500'>Home</Link>
                         <p className='border-s-4 border-green-500 px-4 text-green-500 italic'>Profile</p>
                         </div>
                    </div>
                    

                </div>
                <img src={img2} alt="" className='h-[460px] md:max-h-[500px] w-full object-cover' />
                </div>

             </div>


             {/* profile form */}
             <div className="w-full max-w-xl mx-auto mt-10" data-aos="zoom-in-up">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Your First Name"
          
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Your Last Name"
          
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
           Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Your Adress"
          
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Your Phone Number"
          
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            name="bio"
            placeholder="Tell us about yourself"
          
            rows="4"
          />
        </div>
        <div className="flex items-center justify-between mb-10">
        <button className=' border-solid border-[1px] border-green-500 transition duration-300
                              text-green-500 absolute  rounded-none mt-10
                              hover:bg-green-600 px-8 py-1 hover:text-white'>Update Profile</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default ProfilePageForm;