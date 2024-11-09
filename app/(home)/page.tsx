import React from 'react';

import Home from './components/Home/Home';
import Achivement from './components/Achieement/Achivement';
import Customer from './components/Customer/Customer';
import Seller from './components/Seller/Seller';
import Feature from './components/Feature/Feature';
import Interface from './components/Interface/Interface';
import PricingPlan from './components/PricingPlan/PricingPlaln';
import Question from './components/Question/Question';
import AddressMap from './components/AddressMap/AddressMap';
import Download from './components/Download/Download';


const page = async() => {
    return (
        <div className='z-30'>
    <div className=' bg-colour'  > 
    <section id="home" className="py-32 bg-color-home">
        
        <Home></Home>
       
      </section>
    </div>

       <section id="achievement" className="pt-28 lg:pt-24 md:px-10 lg:px-10 mx-auto  ">
       <Achivement></Achivement>
      </section>
   
      <section id="customer" className="pt-28 lg:pt-24 md:px-10 lg:px-10 mx-auto">
       <Customer></Customer>
      </section>

      <section id="seller" className="pt-28 lg:pt-24 md:px-10 lg:px-10 mx-auto">
       <Seller></Seller>
      </section>
 
      <section id="feature" className="pt-28 lg:pt-24 md:px-10 lg:px-10 mx-auto">
       <Feature></Feature>
      </section>

      <section id="interface" className="pt-28 lg:pt-24 md:px-10lg:px-10 mx-auto">
      <Interface></Interface>
      </section>

      <section id="pricingPlan" className="pt-28 lg:pt-24 md:px-10 lg:px-10 mx-auto">
      <PricingPlan></PricingPlan>
      </section>
      
      <section id="faq" className=" pt-28 lg:pt-24 md:px-10 lg:px-10 mx-auto">
      <Question></Question>
      </section>

      <section id="download" className="pt-28  md:px-10 lg:px-10 lg:pt-24  mx-auto ">
      <Download></Download>
      </section>

      <section id="addressMap" className=" mb-16 md:px-10 lg:px-10 mx-auto">
     <AddressMap></AddressMap> 
      </section> 
      
    </div>
    );
};

export default page;