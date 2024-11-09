import React from 'react';
//import { achivement_data } from './Achivement-data';
//import { MdArrowRightAlt } from "react-icons/md";
//import Link from 'next/link';
import { MdOutlineAppRegistration } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { customerCount, merchantCount } from './server-action';
//import connectDB from '@/helpers/db-connection/connectDB';
const Achivement = async () => {
  //  await connectDB()
    const {customerNumber} = await customerCount()
    const {merchantNumber}= await merchantCount()

   const achivement_data = [
        {
            icon: <MdOutlineAppRegistration />,
            number:`${customerNumber ? customerNumber : 0}k+`,
            title:'Customer Registration'
        },
        {
            icon:  <FaUserCog />,
            number:`${merchantNumber ? merchantNumber : 0}k+`,
            title:'Merchant Registration'
        },
        // {
        //     icon: <FiDownload/>,
        //     number:'80k+',
        //     title:'Installation'
        // },
    ] 
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr]  lg:grid-cols-[1fr_2fr] text-black   items-center mx-auto'>
            {/* First section with text */}
            <div className='gap-y-3'>
                <p className=' text-xl lg:text-3xl font-bold'>
                    we speck out <br /> achivement & <br /> powerful status
                </p>
                {/* <Link href='#' className='flex items-center text-blue-600 mt-4'>
                    <p className='border-b-2 border-blue-600'>Know more</p>
                    <MdArrowRightAlt className='ml-4 text-2xl' />
                </Link> */}
            </div>

            {/* Second section with achievements */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between md:border-l-4 lg:border-l-4 border-blue-400'>
                {achivement_data.map((params, idx) => (
                    <div key={idx} className=''>
                        <div className='p-8 text-center '>
                            <p className='text-blue-700 text-5xl flex justify-center shadow shadow-blue-400 mb-2 p-3'>
                                {params.icon}
                            </p>
                            <p className='font-bold text-3xl lg:text-5xl'>{params.number}</p>
                            <p className='font-semibold text-xl'>{params.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achivement;
