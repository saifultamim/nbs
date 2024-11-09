



import connectDB from '@/helpers/db-connection/connectDB';
import { customerModel } from '@/models/customer';
import { merchantModel } from '@/models/merchant';

export const customerCount = async () => {
  try {
    await connectDB();
    const count = await customerModel.countDocuments();
    return { message: 'Customer number count successfully', customerNumber: count };
  } catch (error) {
    console.error("Error in customer count action:", error);

    // Check if error is an instance of Error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { message: 'Error fetching customer count', error: errorMessage };
  }
};





// export const customerCount = async() =>{
//     try {
     
//         const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/customer`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const result = await response.json()
//         return result
        
//       } catch (error) {
//         console.error("Error server-action customer number count data:", error);
//       }
//     }







    // export const merchantCount = async() =>{
    //   try {
      
    //       const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/merchant`, {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       });
    //       const result = await response.json()
    //       return result
          
    //     } catch (error) {
    //       console.error("Error server-action merchant number count data:", error);
    //     }
    //   }


    export const merchantCount = async () => {
      try {
        await connectDB();
        const count = await merchantModel.countDocuments();
        return { message: 'merchant number count successfully', merchantNumber: count };
      } catch (error) {
        console.error("Error in merchant count action:", error);
    
        // Check if error is an instance of Error
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return { message: 'Error fetching merchant count', error: errorMessage };
      }
    };