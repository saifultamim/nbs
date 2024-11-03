
'use client'
import React, { useState } from 'react';
interface FormData {
    firstName: string;
    lastName: string;
    workEmail: string;
    companyName: string;
    phone: string;
    message: string;
  }
const Page = () => {
const [formData,setFormData]=useState<FormData>({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    phone: '',
    message: '',
})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);

  };

  return (
    <div className="  grid items-center justify-center  text-white  rounded-xl transparent-bg-home pt-32  pb-16 ">
    <div className="max-w-4xl mx-4 p-8  shadow-lg rounded-lg shadow-slate-500 bg-[#5D3FD3] ">
      <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'> 
      <div className="flex flex-col w-full">
          <label htmlFor="name" className="text-md font-bold  ">First Name</label>
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
          <label htmlFor="name" className="text-md font-bold ">Last Name</label>
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
          <label htmlFor="email" className="text-md font-bold ">your email address </label>
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
          <label htmlFor="message" className="text-md font-bold ">your phone number</label>
          <input
          type='text'
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
               required
            className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-md font-bold ">your message here...</label>
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
