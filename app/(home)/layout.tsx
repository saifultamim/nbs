import Footer from '@/shared_components/Footer/Footer';
import Navbar from '@/shared_components/Navbar/Navbar';
import React from 'react';

const layout = ({
    children,
  }:{
    children: React.ReactNode;
  }) => {
    return (
        <div className=' w-10/12 mx-auto '>
            <Navbar></Navbar>
            {children}
           <Footer></Footer>
        </div>
    );
};

export default layout;