'use client'
import { FormData } from '@/utils/types';
import React, { useState } from 'react';
import { createContact } from './server-action';
import Swal from 'sweetalert2'


const Page = () => {
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

    if (name === 'phone' && !/^\d*$/.test(value)) {
      return; 
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,  
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if (formData.phone.length < 11) {
      setErrorMessage('Please enter a valid 11-digit or more phone number.');
      return;
    }

    // If validation passes, proceed with form submission
    setErrorMessage('');
       const result = await createContact(formData)
       if(result.data){
        Swal.fire({
          title: "Thank You",
          text: "Your Information Successfully Sent",
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
    <div className="grid items-center justify-center text-white rounded-xl transparent-bg-home pt-32 pb-16">
      <div className="max-w-4xl mx-4 p-8 shadow-lg rounded-lg shadow-slate-500 bg-[#5D3FD3]">
        <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="text-md font-bold">
                First Name
              </label>
              <input
                type="text"
                placeholder="Your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="text-md font-bold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="workEmail" className="text-md font-bold">
              Your email address
            </label>
            <input
              type="email"
              placeholder="Your work email address"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-md font-bold">
              Your phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your 11-digit phone number"
              required
              //maxLength={11}
              className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-md font-bold">
              Your message here...
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="text-black mt-1 p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
