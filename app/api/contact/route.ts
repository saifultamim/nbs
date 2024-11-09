
 //import connectDB from '@/helpers/db-connection/connectDB';
 import { contactModel } from '@/models/contact';
 import { IContact } from '@/utils/types';
import { NextRequest, NextResponse } from 'next/server';

export  async function POST(req: NextRequest) {
   //await connectDB()
    try {
      const { firstName, lastName, phone,workEmail, message } = await req.json();

      if (!firstName || !lastName || !phone || !workEmail || !message) {
        return NextResponse.json({ message: 'All fields are required.' });
      }

      const newContact: IContact = await contactModel.create({
        fullName: `${firstName} ${lastName}`,
        workEmail:workEmail,
        phone:phone,
        message:message,
      });
      return NextResponse.json({ message: 'create contact successfully!', data: newContact });

    } catch (error) {
      if (error instanceof Error) {
        NextResponse.json({ message: 'Failed to add contact.', error: error.message });
      } else {
        NextResponse.json({ message: 'Failed to add contact.', error: 'Unknown error occurred.' });
      }
    }
 
  return NextResponse.json({message:'post method'})
}
