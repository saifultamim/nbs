import React from 'react';

const AddressMap = () => {
  return (
    <div className="google-map-code flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d3652.290345572649!2d90.40927820958652!3d23.73702352859055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e0!4m4!1s0x3755b8f565e177e1%3A0x7b3b932702da1ce9!3m2!1d23.7370652!2d90.41199569999999!4m5!1s0x3755b8f566f55ad7%3A0xcbe9e374ed3b643c!2sSel%20Trident%20Tower%2C%20VIP%20Rd%2C%20Dhaka%201205!3m2!1d23.737123399999998!2d90.41203949999999!5e0!3m2!1sen!2sbd!4v1729669156241!5m2!1sen!2sbd"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}   
        className='w-full rounded-xl'
      ></iframe>
    </div>
  );
};

export default AddressMap;
