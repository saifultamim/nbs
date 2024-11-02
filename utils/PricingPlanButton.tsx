'use client'

const PricingPlanutton = ({ value, setValue }: { value: boolean; setValue: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const handleClick = () => {
        setValue(!value)
    }
    return (
     <div className='flex gap-4 items-center'>
          <p className='font-semibold text-medium  mt-4 text-black '>Annualy Plan</p>

          <button onClick={handleClick}>
        <input type="checkbox" className=" toggle toggle-primary mt-4 "  defaultChecked   />
        </button>
        
       <p className='font-semibold text-medium text-black mt-4'>Monthly Plan</p>
     </div>
    );
};

export default PricingPlanutton;