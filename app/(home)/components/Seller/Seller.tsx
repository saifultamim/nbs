import React from 'react';

import Image from 'next/image';

import Link from 'next/link';
import { seller_data, seller_data_list } from './Seller-data';

const Seller = () => {
    return (
       <div>
         <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between  mx-auto items-center '>
           <div className='order-last '>
           <div className=''>
                <p className='text-2xl md:text-3xl lg:text-5xl font-bold  text-black '>{seller_data.title}</p>
                <p className='font-semibold text-medium text-black mt-4'>{seller_data.description}</p>
            </div>
            <div className='mt-4'>
                {
                    seller_data_list.map((params,idx)=>(
                        <div key={idx} className='flex items-center gap-2 '>
                          <p className='text-blue-600'>{params.icon}</p>
                          <p className='text-black'>{params.title}</p>
                        </div>
                    ))
                }
            </div>
          <Link href='https://play.google.com/store/apps/details?id=com.dotbdsolutions.nirbhabona_business_solution&pcampaignid=web_share' target='_blank'>
          <button className='bg-blue-600 text-white rounded-lg px-4 py-3 mt-4' >{seller_data.download}</button>
          </Link>
           </div>
       
           
 
    <Image 
        alt='client' 
        src='/image/seller.png' 
        height={200} 
        width={600} 
        className='order-first mb-6 lg:mb-0'
    />
</div>

         
        </div>

    );
};

export default Seller;