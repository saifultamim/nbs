import { FaFileInvoice } from "react-icons/fa";
//import { MdManageAccounts } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
//import { TbDeviceMobileSearch } from "react-icons/tb";
//import { TbUserSearch } from "react-icons/tb";
//import { AiOutlineShoppingCart } from "react-icons/ai";
 import { LiaSmsSolid } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { MdCompareArrows } from "react-icons/md";
//import { FcSupport } from "react-icons/fc";
import { AiOutlineStock } from "react-icons/ai";
//import { GrContact } from "react-icons/gr";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { GiCash } from "react-icons/gi";

export const features_one = [
    {
        id: '01',
        icon: <GrContactInfo />,
        serviceName: 'Merchant Information',
        serviceDescription: 'Access diverse merchant info for informed purchasing decisions.'
    },
    {
        id: '02',
        icon: <MdCompareArrows />,
        serviceName: 'Product Comparison',
        serviceDescription: 'Compare similar products from different merchants to find the best prices.'
    },
    {
        id: '03',
        icon: <GiCash />,
        serviceName: 'Cash Sales',
        serviceDescription: 'Track cash sales efficiently with dedicated sales screens.'
    },
    {
        id: '04',
        icon: <LiaSmsSolid />,
        serviceName: 'SMS Service',
        serviceDescription: 'Send targeted SMS and create groups for promotional messages.'
    }
];


export const features_two = [
    {
        id: '05',
        icon: <FaFileInvoice />,
        serviceName: 'Personal Accounting',
        serviceDescription: 'Track daily expenses and share account sheets with others.'
    },
    {
        id: '06',
        icon: <HiOutlineCreditCard />,
        serviceName: 'Credit Sales',
        serviceDescription: 'Maintain detailed credit records and track outstanding amounts easily.'
    },
    {
        id: '07',
        icon: <VscGraph />,
        serviceName: 'Sales Management',
        serviceDescription: 'Manage cash and credit sales through an intuitive entry screen.'
    },
    {
        id: '08',
        icon: <AiOutlineStock />,
        serviceName: 'Stock Management',
        serviceDescription: 'Maintain inventory by adding stock using barcodes or serial numbers.'
    }
];
