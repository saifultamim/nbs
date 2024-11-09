
export interface FormData {
    firstName: string;
    lastName: string;
    workEmail: string;
    phone: string;  
    message: string;
  }


export interface IContact  {
    fullName:string
    workEmail: string;
    phone: string;
    message: string;
  }


  export interface IQuestion {
    xmerchant: string;
    xtitle: string;
    xdesc: string;
    xstatus: string;
    xcontactby: string;
    xactiondesc?: string;
    xactiondate?: Date | null;
    ztime: Date;
  }

  export interface ICustomer {
    xcus: string;
    xpassword: string;
    xorg: string;
    xadd1: string;
    xdistrict: string;
    xthana: string;
    xpostal: string;
    xcusemail: string;
    xmobile: string;
    zactive: number;
    xref: string;
    xpackage: string;
    xlt: string;
    xln: string;
    ztime: Date;
    xexpdate: Date;
  }
  

  export interface IMerchant {
    xmerchantsl: number;
  xmerchant: string;
  xuserid: string;
  xpassword: string;
  xbillamt: number;
  xorg: string;
  xadd1: string;
  xpostal: string;
  xdistrict: string;
  xthana: string;
  xcat: string;
  xuseremail: string;
  zactive: number;
  xrecflag: string;
  xdeloptions: string;
  xusertype: string;
  xref: string;
  xappno: string;
  xpackage: string;
  xexpdate: Date;
  xnid: string;
  xlt: string;
  xln: string;
  xregion: string;
  ztime: Date;
  xdate: Date;
  xfirebasetoken?: string | null;
  }
  