import React from 'react';
import Slider from "react-slick";
import img1 from '../../../../assets/about/i.jpg'

const FeedBacks = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div>
            <div className='text-center'>
                <p className='text-green-500 italic mb-5'>TESTIMONIALS</p>
                <h1 className='text-4xl font-bold'>Clients Feedbacks</h1>
            </div>

                  {/* slider */}

                  <div className='my-[50px] px-[40px] lg:px-[10px]'>
        
        <Slider {...settings}>

          <div>
            <div className='flex  '>
            <div>
              <img  className='mt-3 h-[100px]' src={img1} alt="" />
            </div>
            <div className='px-5  '>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <p className='font-bold'>Topu Raihan</p>
                      <p className='text-green-500 italic'>Founder</p>
            </div>
            </div>
            
          </div>

          <div>
            <div className='flex  '>
            <div>
            <img  className='mt-3 h-[100px]' src={img1} alt="" />
            </div>
            <div className='px-5  '>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <p className='font-bold'>Topu Raihan</p>
                      <p className='text-green-500 italic'>Founder</p>
            </div>
            </div>
            
          </div>


          <div>
            <div className='flex  '>
            <div>
            <img  className='mt-3 h-[100px]' src={img1} alt="" />
            </div>
            <div className='px-5  '>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <p className='font-bold'>Topu Raihan</p>
                      <p className='text-green-500 italic'>Founder</p>
            </div>
            </div>
            
          </div>


         <div>
            <div className='flex  '>
            <div>
            <img  className='mt-3 h-[100px]' src={img1} alt="" />
            </div>
            <div className='px-5  '>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <p className='font-bold'>Topu Raihan</p>
                      <p className='text-green-500 italic'>Founder</p>
            </div>
            </div>
            
          </div>


           <div>
            <div className='flex  '>
            <div>
            <img  className='mt-3 h-[100px]' src={img1} alt="" />
            </div>
            <div className='px-5  '>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <p className='font-bold'>Topu Raihan</p>
                      <p className='text-green-500 italic'>Founder</p>
            </div>
            </div>
            
          </div>

          <div>
            <div className='flex  '>
            <div>
            <img  className='mt-3 h-[100px]' src={img1} alt="" />
            </div>
            <div className='px-5  '>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <p className='font-bold'>Topu Raihan</p>
                      <p className='text-green-500 italic'>Founder</p>
            </div>
            </div>
            
          </div>
        </Slider>
      </div>
        </div>
    );
};

export default FeedBacks;