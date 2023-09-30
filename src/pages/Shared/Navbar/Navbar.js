import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/icon/logo.svg'
import Cartpage from '../../Home/Cartpage/Cartpage';
import { useCart } from '../../../components/context/Cart';


const Navbar = () => {
  const [cart] = useCart()
  const activeLink = " text-green-500 border-b-2 border-green-500";
  const normalLink = "";
  return (
    <div  >

      {/* navbar */}
      <div className="navbar bg-gray-900 text-white ">
        {/* responsive mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu-sm dropdown-content  z-[1]  shadow bg-gray-900  w-52">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                <p className=" w-full h-full mx-4  centered">Home</p>
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                <p className=" w-full h-full mx-4 centered">Products</p>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                <p className=" w-full h-full mx-4  centered">About</p>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                <p className=" w-full h-full mx-4  centered">contact</p>
              </NavLink>
            </ul>
          </div>
          <Link to={'/'} className='flex lg:pl-[100px]'>
            <img src={logo} alt="" className='w-[30px]' />
            <h3 className=" font-bold pt-1  text-xl pl-1"> BAZER</h3>
          </Link>

        </div>

        {/* laptop */}


        <section>
          <div className="navbar-center hidden lg:flex">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className=" w-full h-full mx-4  centered">Home</p>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className=" w-full h-full mx-4 centered">Products</p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className=" w-full h-full mx-4  centered">About</p>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className=" w-full h-full mx-4  centered">contact</p>
            </NavLink>
          </div>
        </section>


        <div className="navbar-end lg:pr-[100px] md:pr-[80px]">
          <div className="flex">
            {/* Cart */}
            <div className="drawer z-40 mt-4 mx-2">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" >

                  <div className="indicator cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{cart?.length}</span>
                  </div>

                </label>

              </div>
              <div className="drawer-side  ">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[250px] md:w-[400px] lg:w-[400px] min-h-full bg-white text-base-content">
                  {/* Sidebar content here */}
                  <Cartpage />


                </ul>
              </div>
            </div>

            {/* Profile */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                  <CgProfile size={30} />
                </div>
              </label>
              <ul tabIndex={0} className=" menu-sm dropdown-content  z-[1] p-2 shadow bg-gray-900  w-52">
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