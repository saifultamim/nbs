import React from 'react';

const SendMessage = () => {
    return (
        <div className="grid items-center justify-center  text-white  rounded-xl ">
        <div className="max-w-4xl mx-4 p-8  shadow-lg rounded-lg shadow-slate-500 bg-[#5D3FD3] ">
          <h2 className="text-3xl font-bold text-center mb-10">Have any questions</h2>
          <form className="space-y-6">
            
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'> 
          <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-md font-bold  ">First Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" First Name"
            
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-md font-bold ">Last Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" Last Name"
            
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
          </div>
            
         
            
            <div className="flex flex-col">
              <label htmlFor="email" className="text-md font-bold ">your email address </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" Email address"
            
                className="text-black mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="message" className="text-md font-bold ">your message here...</label>
              <textarea
                name="message"
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