import Image from 'next/image';
import React from 'react';

const Interface = () => {
    return (
        <div>
            <div className='text-black text-2xl md:text-3xl lg:text-5xl  font-bold text-center mb-12'>
                <p className='mb-2'>Checkout Out Application</p>
                <p>Interface Design</p>
            </div>

            <Image alt='interface' src='/image/interface.png' width={800} height={200} className='w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl'/>
        </div>
    );
};

export default Interface;