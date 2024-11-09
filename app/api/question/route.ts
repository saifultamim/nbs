

//import connectDB from '@/helpers/db-connection/connectDB';
import { questionModel } from '@/models/question';
import { IQuestion } from '@/utils/types';
import { NextRequest, NextResponse } from 'next/server';

export  async function POST(req: NextRequest) {
  //await connectDB()
   try {
     const { firstName, lastName, phone,workEmail, message } = await req.json();

     if (!firstName || !lastName || !phone || !workEmail || !message) {
       return NextResponse.json({ message: 'All fields are required.' });
     }

     const newContact: IQuestion = await questionModel.create({
        xmerchant:phone,
        xtitle:'website',
        xdesc:message,
        xstatus:'open',
        xcontactby:workEmail,
        xactiondesc:'',
        xactiondate:null,
        ztime:new Date(),
     });
     return NextResponse.json({ message: 'Contact added successfully!', data: newContact });

   } catch (error) {
     if (error instanceof Error) {
       NextResponse.json({ message: 'Failed to add contact.', error: error.message });
     } else {
       NextResponse.json({ message: 'Failed to add contact.', error: 'Unknown error occurred.' });
     }
   }

 return NextResponse.json({message:'post method'})
}
