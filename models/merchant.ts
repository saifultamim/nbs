
import { IMerchant } from '@/utils/types';
import  { Schema, model, models } from 'mongoose';


const merchantSchema = new Schema<IMerchant>({
    xmerchantsl: { type: Number, required: true },
    xmerchant: { type: String, required: true },
    xuserid: { type: String, required: true },
    xpassword: { type: String, required: true },
    xbillamt: { type: Number, required: true },
    xorg: { type: String, required: true },
    xadd1: { type: String, required: true },
    xpostal: { type: String, required: true },
    xdistrict: { type: String, required: true },
    xthana: { type: String, required: true },
    xcat: { type: String, required: true },
    xuseremail: { type: String, required: true },
    zactive: { type: Number, required: true },
    xrecflag: { type: String, required: true },
    xdeloptions: { type: String, required: true },
    xusertype: { type: String, required: true },
    xref: { type: String, required: true },
    xappno: { type: String, required: true },
    xpackage: { type: String, required: true },
    xexpdate: { type: Date, required: true },
    xnid: { type: String, required: true },
    xlt: { type: String, required: true },
    xln: { type: String, required: true },
    xregion: { type: String, required: true },
    ztime: { type: Date, required: true },
    xdate: { type: Date, required: true },
    xfirebasetoken: { type: String, default: null }
}, { collection:'merchant',timestamps: true });

export const merchantModel = models.Merchant || model<IMerchant>('Merchant', merchantSchema);
