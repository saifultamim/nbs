
import { IQuestion } from '@/utils/types';
import  { Schema,models,model } from 'mongoose';


const questionSchema: Schema = new Schema({
  xmerchant: { type: String, required: true },
  xtitle: { type: String, required: true },
  xdesc: { type: String, required: true },
  xstatus: { type: String, required: true },
  xcontactby: { type: String, required: true },
  xactiondesc: { type: String, default: '' },
  xactiondate: { type: Date, default: null },
  ztime: { type: Date, default: null },
}, 
{ collection:'helpticket', timestamps: true });

export const questionModel = models.HelpTicket || model<IQuestion>('HelpTicket', questionSchema);


