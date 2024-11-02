import React from 'react';
import { features_one, features_two } from './Feature-data';
import Image from 'next/image';

const Feature = () => {
    return (
       <div>
         <div className='text-2xl md:text-3xl lg:text-5xl font-bold  text-black  text-center '>
               <p>Popular Features That</p>
               <p className='mt-2'>Blows Your Mind</p>
                
            </div>
         <div className='  grid grid-cols-1 lg:grid-cols-3 items-center mx-auto '>
            {/* first */}
        
            <div className='p-4 '>
            {
                features_one.map((params,idx)=>(
                    <div key={idx} className='mt-4'>
                        <div className='flex items-center gap-3'>
                            {/* text section */}
                        <p className='text-blue-600 p-4 shadow-lg bg-[#ffff] shadow-slate-400 rounded-lg'>{params.id}</p>
                        {/* icon section */}
                       <div >
                        <p className='text-blue-600 text-2xl flex justify-center'>{params.icon}</p>
                       <p className='text-black lg:text-xl font-bold'>{params.serviceName}</p>
                       </div>
                            </div>
                        <p className='text-black mt-3'>{params.serviceDescription}</p>
                         </div>
                ))
            }
            </div>
            {/* first */}
            {/* second */}
            <div className=' '>
            <Image alt='features' src='/image/feature.png' height={200} width={600} className='p-4 rounded-3xl' />
            </div>
            {/* second */}

            {/* third */}
            <div className='p-4 '>
            {
                features_two.map((params,idx)=>(
                    <div key={idx} className='mt-4' >
                    <div className='flex items-center gap-3 '>
                    <p className='text-blue-600 p-4 shadow-lg bg-[#ffff] shadow-slate-400 rounded-lg'>{params.id}</p>
                   <div className=''>
                    <p className='text-blue-600 text-2xl flex justify-center'>{params.icon}</p>
                   <p className='text-black lg:text-xl font-bold'>{params.serviceName}</p>
                   </div>
                        </div>
                    <p className='text-black mt-3'>{params.serviceDescription}</p>
                     </div>
                ))
            }
            </div>
            {/* third */}
        </div>
       </div>
    );
};

export default Feature;