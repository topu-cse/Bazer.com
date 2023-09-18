import React from 'react';
import img1 from '../../../../assets/about/i.jpg'
import { Link } from 'react-router-dom';
import { BsFacebook} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import { BsLinkedin} from 'react-icons/bs';

const TeamMember = () => {
    const teamData = [
        {
            id: 1,
            name: 'Topu Raihan',
            post: 'Founder',
            img: img1
        },
        {
            id: 2,
            name: 'Topu Raihan',
            post: 'Founder',
            img: img1
        },
        {
            id: 3,
            name: 'Topu Raihan',
            post: 'Founder',
            img: img1
        },
        {
            id: 4,
            name: 'Topu Raihan',
            post: 'Founder',
            img: img1
        },

    ]

    return (
        <div className='mb-16' data-aos="fade-up">

            <div className='text-center mb-[50px]'>
                <h1 className='text-4xl font-bold text-green-500 italic'>Team Member</h1>
            </div>
            {/* information team card */}
            <div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[40px] lg:px-[100px]'>
                    {/* card body */}

                    {
                       teamData.map((t)=>(
                        <div className='text-center  hover:shadow-lg ' key={t.id}>
                            <img src={t.img} alt="" />
                            <div className='p-3'>
                                <p className='text-green-500 italic'>{t.post}</p>
                                <p className=' font-bold'>{t.name}</p>
                            </div>
                            <div className='flex   items-center justify-center pb-3'>
                                <Link className='px-1 hover:text-green-500' ><BsFacebook size={20}  /></Link>
                                <Link className='px-1 hover:text-green-500'><BsTwitter size={20}/></Link>
                                <Link className='px-1 hover:text-green-500'><BsLinkedin size={20}/></Link>
                            </div>
                        </div>
                       ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamMember;