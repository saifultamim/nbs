'use client'
import { createQuestion } from '@/app/(home)/components/Question/server-action';
import React, { useState } from 'react';
import { FormData } from './types';
import Swal from 'sweetalert2'
const SendMessage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',  
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>(''); 


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // If phone is being updated, ensure it's numeric 
    if (name === 'phone' && !/^\d*$/.test(value)) {
      return; 
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.phone.length < 11) {
      setErrorMessage('Please enter a valid 11-digit or more phone number.');
      return;
    }

    // If validation passes, proceed with form submission
    setErrorMessage('');
       const result = await createQuestion(formData)
       if(result.data){
        Swal.fire({
          title: "Thank You",
          text: "Question Successfully Sent",
          icon: "success"
        });
        setFormData({
          firstName: '',
          lastName: '',
          workEmail: '',
          phone: '',
          message: '',
        });
        
       }
       else{
        Swal.fire({
          title: "Error",
          text: "please,try again",
          icon: "error"
        });
       }
       
  };
    return (
        <div className="grid items-center justify-center  text-white  rounded-xl ">
        <div className="max-w-4xl mx-4  p-8 shadow-lg rounded-lg shadow-slate-500 bg-[#5D3FD3] ">
          <h2 className="text-3xl font-bold text-center mb-10">Have any questions</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'> 
          <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-md font-bold  ">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                placeholder=" First Name"
            
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-md font-bold ">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                placeholder=" Last Name"
            
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
          </div> 
            
         
            
            <div className="flex flex-col">
              <label htmlFor="email" className="text-md font-bold ">your email address </label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                id="email"
                placeholder=" Email address"
            
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-md font-bold ">your phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
              onChange={handleChange}
                id="phone"
                //maxLength={11}
                placeholder=" Your Phone Number"
            
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
            {errorMessage && (
            <div className="text-red-500 text-sm mt-2">
              <p>{errorMessage}</p>
            </div>
          )}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-md font-bold ">your message here...</label>
              <textarea
                name="message"
                value={formData.message}
              onChange={handleChange}
                id="message"
                placeholder="Write your message here..."
         
                className="text-black mt-1 p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Your Message Now 
            </button>
          </form>
        </div>
      </div>
    );
};

export default SendMessage;