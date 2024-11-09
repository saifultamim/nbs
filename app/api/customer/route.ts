


// import connectDB from '@/helpers/db-connection/connectDB';
// import { customerModel } from '@/models/customer';
// import { NextResponse } from 'next/server';

// export  async function GET() {
//   await connectDB()
//    try {

//      const count = await customerModel.countDocuments();
//      return NextResponse.json({ message: 'customer number count successfully', customerNumber: count });

//    } catch (error) {
//      if (error instanceof Error) {
//        NextResponse.json({ message: 'Failed to add contact.', error: error.message });
//      } else {
//        NextResponse.json({ message: 'Failed to add contact.', error: 'Unknown error occurred.' });
//      }
//    }

//  return NextResponse.json({message:'post method'})
// }


import connectDB from '@/helpers/db-connection/connectDB';
import { customerModel } from '@/models/customer';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  try {
    const count = await customerModel.countDocuments();
    return NextResponse.json({ message: 'Customer number count successfully', customerNumber: count });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ message: 'Failed to get customer count.', error: errorMessage }, { status: 500 });
  }
}
