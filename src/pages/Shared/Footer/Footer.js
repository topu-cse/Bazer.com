import React from 'react';
import logo from '../../../assets/icon/logo.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

        <div className='flex justify-between items-center'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                   <img src={logo} alt="logo"className='w-[50px]' />
                    <p className='font-bold italic text-green-500'>Topu Raihan.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;