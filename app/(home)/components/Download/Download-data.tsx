
import download from '@/public/image/download.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
//import { FaApple } from "react-icons/fa6";
export const download_data =
    {
        title:(
            <>
           Let&apos;s Download Nirbhabona <br/> Mobile App Free
            </>
        ),
        description:(
            <>
            Users download the <span className='text-2xl font-extrabold'>Nirbhabona</span> app to manage daily expenses, find merchants, and get personalized product and service comparisons
            </>
        ),
        img:download

    }

    export const playstore = [
        {
            icon:<IoLogoGooglePlaystore />,
            name:'GooglePlay',
            title:'GET IT ON'

        },
        // {
        //     icon:<FaApple />,
        //     name:"AppStore",
        //     title:'Download on the'
        // }
    ]