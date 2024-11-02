'use client'
import Image from 'next/image';
import { footer_data, playstore } from './Footer-data';
import Link from 'next/link';


const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

const Footer = () => {
    return (
         
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_4fr_1fr]   gap-8 items-center px-10 py-4'>
              
          {/* ==================== logo and playstore start  ====================== */}
          <div className='px-4 mx-auto'> 

          {/* ========================== logo button start ======================= */}
          <button onClick={() => scrollToSection('home')} className='text-center'>
           <Image alt='nirbhabona' src='/image/nirbhabona.png' height={200} width={200} className='' />
           <p className='text-black font-black hidden lg:block '>Nirbhabona mobile app <br/> for business solution</p>
           </button>
          {/* ========================== logo button end =========================== */}


         {/* ================================== playstore start ============================*/}
         <div className=' text-white bg-black w-40 block lg:hidden rounded-lg px-3 py-1 '>
            {
                        playstore.map((params,idx)=>(
                            <div key={idx} className=' flex  items-center  justify-center '>
                                <Link key={idx} href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' target='_blank' className='flex items-center'>
                               <p className='text-xl mr-2'>{params.icon}</p>
                                <div>
                                    <p>{params.title}</p>
                                    <p>{params.name}</p>
                                </div>
                               </Link>
                            </div>
                        ))
                    }
           </div>


           
         {/* ================================== playstore end ================================ */}

           </div>
          {/* ==================== logo and playstore end ========================= */}

            {/* ============================= footer data start ========================== */}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {
                footer_data.map((params,idx)=>(
                    <div key={idx}className=' px-2 mt-4 md:mt-2 lg:mt-0'>
                        <p className='text-black font-bold  text-sm md:text-xl lg:text-xl '>{params.title}</p>
                        {
                            params.data.map((param,idx)=>(
                                <div key={idx} className=''>
                                    <Link href='#' className='text-black sm:text-xs md:text-base lg:text-base hover:underline decoration-blue-700 '>{param}</Link>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
           
           </div>
           {/* ============================= footer data end ============================== */}

           {/* ============================ playstore start =================== */}
           <div className=' text-white bg-black w-40 hidden lg:block rounded-lg px-3 py-1 '>
            {
                        playstore.map((params,idx)=>(
                            <div key={idx} className=' flex  items-center  justify-center '>
                                <Link key={idx} href='https://play.google.com/store/apps/developer?id=DOT+BD+SOLUTIONS+LIMITED' target='_blank' className='flex items-center'>
                               <p className='text-xl mr-2'>{params.icon}</p>
                                <div>
                                    <p>{params.title}</p>
                                    <p>{params.name}</p>
                                </div>
                               </Link>
                            </div>
                        ))
                    }
           </div>
            {/* =========================== playstore end ====================== */}

            </div>

    );
};

export default Footer;
