import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import logo from '../../../assets/icon/logo.svg'

const Navbar = () => {
  return (
    <div>

      {/* navbar */}
      <div className="navbar bg-gray-900 text-white ">
        {/* responsive mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={'/'}>Home</Link></li>
              <li>
                <Link to={'/products'} className='px-2'>Products</Link>

              </li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          <Link to={'/'} className='flex lg:pl-[100px]'>
            <img src={logo} alt="" className='w-[30px]' />
            <h3   className=" font-bold pt-1  text-xl pl-1"> BAZER</h3>
          </Link>

        </div>

        {/* laptop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">
            <li className='px-2  '><Link to={'/'}>Home</Link></li>
            <li> <Link to={'/products'} className='px-2'>Products</Link></li>
            <li className='px-2'><Link to={'/about'}>About</Link></li>
            <li className='px-2'><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>


        <div className="navbar-end lg:pr-[100px] md:pr-[80px]">
          <div className="flex-none">
            <div className="dropdown dropdown-end px-[10px]">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  <CgProfile size={30} />
                </div>
              </label>
              <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
                <li>
                  <Link to={'profile'}>
                    Profile

                  </Link>
                </li>
                <li><Link>Order</Link></li>
                <li><Link to='/signin'>Sign In</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Navbar;