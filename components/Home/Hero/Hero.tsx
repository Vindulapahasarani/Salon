import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* overlay*/ }
        <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
       

        {/* Text content */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
           <div className='flex items-center justify-center flex-col w-full h-full'>
            <div>
            <p className='md:text-base text-center text-lg text-white font-normal[word-spacing:5xp] md:text-[30px]'>Fresh Since 2000</p>
           
                <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[80px] lg:text-[45] tracking-[0.7rem] text-white font-bold uppercase'>Hordor Barber</h1>
                
            </div>
          
           </div>
            </div>    
            </div>
  );
};

export default Hero;