import React from 'react';
import img1 from '../../../assets/sale/1.jpg'
import img2 from '../../../assets/sale/2.jpg'
import img3 from '../../../assets/sale/3.jpg'
import { Link } from 'react-router-dom';
const HotSales = () => {

    const sale = [
        {
            id: 1,
            img:img1
        },
        {
            id: 2,
            img:img2
        },
        {
            id: 3,
            img:img3
        },
    ]
    return (
        <div>
            <div className='  grid md:grid-cols-3 gap-6 m-[100px]'>
                {/* card */}

                      
                      {
                          
                        sale.map((s)=>(
                            <Link key={s.id} className='hover:scale-105 duration-700  '>
                            <img
                        className='max-h-[160px] md:max-h-[200px] w-full object-cover '
                        src={s.img}
                        alt='/'
                    />
                    </Link>
                        ))
                         
                     } 

            </div>
        </div>
    );
};

export default HotSales;