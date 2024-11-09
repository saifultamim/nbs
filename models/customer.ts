
import { ICustomer } from '@/utils/types';
import  { Schema, model, models } from 'mongoose';


const customerSchema = new Schema<ICustomer>({
  xcus: { type: String, required: true },
  xpassword: { type: String, required: true },
  xorg: { type: String, required: true },
  xadd1: { type: String, required: true },
  xdistrict: { type: String, required: true },
  xthana: { type: String, required: true },
  xpostal: { type: String, required: true },
  xcusemail: { type: String, required: true },
  xmobile: { type: String, required: true },
  zactive: { type: Number, required: true },
  xref: { type: String, required: true },
  xpackage: { type: String, required: true },
  xlt: { type: String, required: true },
  xln: { type: String, required: true },
  ztime: { type: Date, required: true },
  xexpdate: { type: Date, required: true }
}, { collection:'customer', timestamps: true });

export const customerModel = models.Customer || model<ICustomer>('Customer', customerSchema);
