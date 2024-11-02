'use client'
import { useState } from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { annual_pricingPlan_data, monthly_pricingPlan_data } from './PricingPlaln-data';
const PricingPlan = () => {
  const [value,setValue]=useState(true)
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

    return (
        <div className='text-black h-auto'>

          <div className='text-center'>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold  '>Choose Our Pricing Plan</h2>
            <p className='font-semibold text-medium  mt-4 mb-4'>Choose our pricing plan for exclusive features, personalized support, and scalable solutions<br/> tailored to enhance your business success.</p>
           
            <div className='flex justify-center  mb-12 '>   
            <div className='flex gap-4'>
          <p className='font-semibold text-medium  mt-4 text-black '>Monthly Plan</p>
          <button onClick={()=>{setValue(!value)}} className='mt-3'>
        <div
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-500' : 'bg-violet-300'}`}
      onClick={toggleSwitch}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${isOn ? 'translate-x-6' : ''}`}
      ></div>
    </div>
        </button>     
       <p className='font-semibold text-medium text-black mt-4'>Annualy Plan</p>
     </div>
              
              </div>
            </div>
       
           
            <div className=''>
                {
                    value ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2'>
                {
                    monthly_pricingPlan_data?.map((params,idx)=>(
                        <div key={idx} className='pricingCard shadow-lg shadow-slate-400  mx-auto  rounded-3xl 
                        bg-[#edf7fc]  p-8 py-16 '>
                        <p className='text-2xl font-bold mb-3'>{params.title}</p>
                        {params.list?.map((param, idx) => (
                          <div key={idx} className={`flex items-center gap-3 mt-1 ${param.bol ? '':'text-slate-400'} `}>
                            {/* <p className='text-xl'>{param.icon}</p> */}
                            <p className='font-bold '>{param.descripton}</p>
                          </div>
                        ))}
                        <p className='mt-4 flex items-center'>
                          <span className='text-xl font-bold text-blue-600 price-symbol gap-2'><FaBangladeshiTakaSign /></span>
                          <span className='text-3xl font-bold text-blue-600 price'>{params.price}</span> {/* Default color blue */}
                          <span className='font-bold ml-1 text-xl'><sub>/month</sub></span>
                        </p>
                        {/* <div className='flex justify-center mt-3'>
                          <button className='px-12 py-3 rounded-xl bg-[#fff] text-blue-600 text-lg font-extrabold '>Choose</button>
                        </div> */}
                      </div>
                      
                    ))
                }

                    </div> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2'>
                {
                    annual_pricingPlan_data?.map((params,idx)=>(
                        <div key={idx} className='pricingCard shadow-lg shadow-slate-400 border-black mx-auto p-8 py-16 rounded-3xl 
                        bg-[#edf7fc]'>
                        <p className='text-2xl font-bold mb-3'>{params.title}</p>
                        {params.list?.map((param, idx) => (
                          <div key={idx} className={`flex items-center gap-3 mt-1 ${param.bol ? '':'text-slate-400'}`}>
                            {/* <p className='text-xl'>{param.icon}</p> */}
                            <p className='font-bold '>{param.descripton}</p>
                          </div>
                        ))}
                        <p className='mt-4 flex items-center'>
                          <span className='text-xl font-bold text-blue-600 price-symbol gap-2'><FaBangladeshiTakaSign /></span> {/* Default color blue */}
                          <span className='text-3xl font-bold text-blue-600 price'>{params.price}</span> {/* Default color blue */}
                          <span className='font-bold ml-1 text-xl'><sub>/year</sub></span>
                        </p>
                        {/* <div className='flex justify-center mt-3'>
                          <button className='px-12 py-3 rounded-xl bg-[#fff] text-blue-600 text-lg font-extrabold '>Choose</button>
                        </div> */}
                      </div>
                      
                    ))
                }

                    </div> 
                }
            </div>
         
        </div>
    );
};

export default PricingPlan;