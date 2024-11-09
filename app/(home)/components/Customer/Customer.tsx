import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { customer_data, customer_data_list } from './Customer-data';


const Customer = async () => {

    return (
        <div>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 justify-between  mx-auto items-center '>
          <div className='order-last lg:order-first'>
          <div className=''>
               <p className='text-2xl md:text-3xl lg:text-5xl font-bold  text-black '>{customer_data.title}</p>
               <p className='font-semibold text-medium text-black mt-4'>{customer_data.description}</p>
           </div>
           <div className='mt-4'>
               {
                   customer_data_list.map((params,idx)=>(
                       <Link href='https://play.google.com/store/apps/details?id=com.dotbdsolutions.nirbhabona_customer&pcampaignid=web_share' key={idx} className='flex items-center gap-2 '>
                         <p className='text-blue-600'>{params.icon}</p>
                         <p className='text-black'>{params.title}</p>
                       </Link>
                   ))
               }
           </div>
          <Link href='https://play.google.com/store/apps/details?id=com.dotbdsolutions.nirbhabona_customer&pcampaignid=web_share' target='_blank'>
          <button className='bg-blue-600 text-white rounded-lg px-4 py-3 mt-4' >{customer_data.download}</button>
          </Link>
          </div>
      {/* ================================ */}
      {/* <div className="hex"></div> */}
      {/* <div className="relative flex justify-center items-center h-[250px] ">
           {/* Hexagon background */}
           {/* <div className="hex-alt absolute  ml-8 "></div> */} 

           {/* Image */}
           <Image 
               alt="client" 
               src="/image/customer.png" 
               height={200} 
               width={600} 
               className="order-first lg:order-last  mb-6 lg:mb-0"
           />
       {/* </div> */}

        {/* ================================= */}
       </div>
      </div>
    );
};

export default Customer;