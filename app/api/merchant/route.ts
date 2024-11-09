
import connectDB from '@/helpers/db-connection/connectDB';
import { merchantModel } from '@/models/merchant';
import { NextResponse } from 'next/server';

export  async function GET() {
  await connectDB()
   try {

     const count = await merchantModel.countDocuments();
     return NextResponse.json({ message: 'merchant number count successfully', merchantNumber: count });

   } catch (error) {
     if (error instanceof Error) {
       NextResponse.json({ message: 'Failed to add contact.', error: error.message });
     } else {
       NextResponse.json({ message: 'Failed to add contact.', error: 'Unknown error occurred.' });
     }
   }

 return NextResponse.json({message:'post method'})
}
