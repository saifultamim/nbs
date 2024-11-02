'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState} from 'react';
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [one,setOne]=useState(false)
  const [time,setTime]=useState(90)
  const route = useRouter()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
  
    if(sectionId == 'contact'){
      route.push('/contact')
      setOne(true)
      setTime(900)
    }else{
      
      if(one){
        
        route.push('/')
      }
      setOne(false)


      setTimeout(() => {
       
        const section = document.getElementById(sectionId);
            if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',  
        });
      }
      }, time); 

       setTime(90)

    }

  };

  return (
    <nav className="w-10/12 text-black shadow-lg shadow-gray-500 fixed bg-white z-50 rounded-lg">
      <div className="container mx-auto grid grid-cols-[1fr_2fr] justify-between items-center p-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <button onClick={() => scrollToSection('home')}>
            <Image alt='nirbhabona' src='/image/nirbhabona.png' height={200} width={200} className='bg-white rounded-lg' />
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden text-right">
          <button onClick={toggleMenu} className="focus:outline-none">
            <TiThMenu className="text-2xl" />
          </button>
        </div>  
    
        {/* Full Menu for Larger Screens */}
        <div className={`hidden lg:block space-x-8 font-bold`}>
          <div className="flex justify-end">
            <button onClick={() => scrollToSection('home')} className="hover:text-gray-500 px-4">Home</button>
            <button onClick={() => scrollToSection('achievement')} className="hover:text-gray-500 px-4">Achievement</button>
            <button onClick={() => scrollToSection('customer')} className="hover:text-gray-500 px-4">Customer</button>
            <button onClick={() => scrollToSection('seller')} className="hover:text-gray-500 px-4">Merchant</button>
            <button onClick={() => scrollToSection('feature')} className="hover:text-gray-500 px-4">Features</button>
            <button onClick={() => scrollToSection('pricingPlan')} className="hover:text-gray-500 px-4">Pricing Plan</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-gray-500 px-4">FAQ</button>
            <button  onClick={()=>scrollToSection('contact')} className="hover:text-gray-500 px-4">Contact</button>
          </div>
        </div>
      </div>
    
      {/* Mobile Menu */}
      {isOpen && (
        <div className="block lg:hidden font-bold mb-8">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <button onClick={() => { scrollToSection('home'); toggleMenu(); }} className="hover:text-gray-500">Home</button>
            <button onClick={() => { scrollToSection('achievement'); toggleMenu(); }} className="hover:text-gray-500">Achievement</button>
            <button onClick={() => { scrollToSection('customer'); toggleMenu(); }} className="hover:text-gray-500">Customer</button>
            <button onClick={() => { scrollToSection('seller'); toggleMenu(); }} className="hover:text-gray-500">Merchant</button>
            <button onClick={() => { scrollToSection('feature'); toggleMenu(); }} className="hover:text-gray-500">Features</button>
            <button onClick={() => { scrollToSection('pricingPlan'); toggleMenu(); }} className="hover:text-gray-500">Pricing Plan</button>
            <button onClick={() => { scrollToSection('faq'); toggleMenu(); }} className="hover:text-gray-500">FAQ</button>
            <button  onClick={()=> {scrollToSection('contact');toggleMenu();}} className="hover:text-gray-500 px-4">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;