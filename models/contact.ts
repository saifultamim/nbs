import { IContact } from "@/utils/types";
import  { Schema,model,models } from 'mongoose';

const contactSchema = new Schema<IContact>({
    fullName: { type: String, required:true },
    workEmail:{type: String, required: true},
    phone: { type: String, required: true },
    message: { type: String, required: true },

  }, { collection:'contact', timestamps: true });

  
export const contactModel = models.Contact || model<IContact>('Contact',contactSchema)