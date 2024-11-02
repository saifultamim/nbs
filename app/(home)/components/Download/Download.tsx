import React from 'react';
import { download_data, playstore } from './Download-data';
import Image from 'next/image';
import Link from 'next/link';

const Download = () => {
    return (
        <div>
        <div className='grid  lg:grid-cols-2  mx-auto  justify-around h-auto mb-16 items-end relative '>
          <div className=' h-full md:h-96 lg:h-96 w-full bg-[#6400c8cc] absolute z-10 rounded-xl'>
              </div>
          {/* text section */}
  <div className='z-20 py-8 px-11'>
      <h2 className='text-2xl text-white md:text-3xl lg:text-4xl font-extrabold mb-8  '>{download_data.title}
      </h2>
      
    
      <p className='font-semibold text-xl mb-8 text-white '>{download_data.description}
      </p>
    
      <div className='flex gap-4 mt-6 '>
          {
              playstore.map((params,idx)=>(
                  <Link key={idx} href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' target='_blank'>
                  <div  className='bg-black flex items-center gap-6 rounded-lg px-4 py-2'>
                      <p className='text-white text-4xl'>{params.icon}</p>
                      <div>
                          <p className='text-white'>{params.title}</p>
                          <p className='text-white'>{params.name}</p>
                      </div>
                  </div>
                  </Link>
              ))
          }
      </div>

  </div>



  {/* image section */}
      <Image alt='downlaod' src={download_data.img} width={600} height={200} className='2/6 z-20 hidden lg:block' />
  


</div>
    </div>
    );
};

export default Download;