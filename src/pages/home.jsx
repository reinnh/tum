import { useEffect, useState } from "react";
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { FaPhone, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import NavBar from "../components/common/navbar";
import logo from '../assets/logo.png';
import { images, univerityInfo,callToAction } from "../utils/constants";
import { GreenButton } from "../utils/helpers";
import Footer from "../components/common/footer";
import NewsSection from "../components/homecomponents/latestnews";
import EventSection from "../components/homecomponents/events";
import Hero from "../components/homecomponents/hero";


const contacts=[
    { icon: <FaPhone />, title: "Call us at", detail: "+25473395377" },
    { icon: <MdEmail />, title: "Mail us", detail: "info@tum.ac.ke" },
    { title: "Physical Address", detail: "Tom Mboya Street Tudor Msa" }
]

export const ContactSocialLinks=()=>{
    return(
        <>
         {/* Top Links & Socials */}
         <div className="w-full flex flex-col py-2 md:flex-row md:justify-between md:h-15 items-center px-4 border bg-[#D89837] text-gray-100">
                    {["Financial Statements", "Library Service", "Multidisciplinary Conference", "TUM Journal"].map((item, index) => (
                        <a key={`socialliinks-${index}`} href="">{item}</a>
                    ))}
                    <div className="flex gap-3 py-2 ">
                        {[FaFacebook, FaTwitter, FaYoutube].map((Icon, index) => (
                            <div key={`socialicons-${index}`} className="bg-green-800 text-white cursor-pointer w-9 h-9 flex items-center justify-center rounded-full">
                                <Icon />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Contact Section */}
                <div className="py-2 flex  w-full flex-col gap-4 items-center   lg:flex-row lg:px-5 lg:justify-between ">
                    <img src={logo} alt="logo" className="w-15 md:w-20" />
                    <div className=" w-full flex flex-col gap-y-5 md:flex-row md:gap-7 lg:justify-end md:px-10 md:items-center md:justify-center">
                    {contacts.map((item, index) => (
                        <div key={`contacts-key-${index}`} className="flex flex-col items-center md:flex-row md:gap-x-5 ">
                            {item.icon && <div className="text-green-700 text-3xl">{item.icon}</div>}
                           <div className="text-center">
                           <p className="text-[14px] text-gray-600">{item.title}</p>
                           <p className="text-gray-600 text-[14px]">{item.detail}</p>
                           </div>
                        </div>
                    ))}
                    </div>
                </div>

        </>
    )
}

const Home = () => {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (!swiper) {
            setSwiper(new Swiper('.mySwiper', {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                autoplay: { delay: 1000, disableOnInteraction: false }
            }));
        }
    }, [swiper]);

    return (
        <>
            <NavBar />
            <div className="w-full flex flex-col items-center font-[arial] bg-gray-100 pt-[80px]">
                <ContactSocialLinks/>
                <Hero/>
                    
                {/* University Info Section */}
                <div className="container flex flex-col md:flex-row gap-5 p-2 ">
                    {univerityInfo.map((info, index) => (
                        <div key={`universityinfo-${index}`} className="bg-white border-1 border-gray-100 flex flex-col gap-4 justify-between w-full md:max-w-[350px]">
                            <img src={info.src} alt="" className="w-full" />
                            <div className={`leading-7 ${index === 0 ? 'text-green-700' : 'text-[15px] font-[arial]'}`}>
                                {info.heading}
                                <hr className="w-[60px] border-2 border-green-900"/>
                            </div>
                            <p className={`text- text-gray-600 ${index === 0 ? 'font-mono ' : ''}`}>{info.description}</p>
                            <GreenButton text={info.buttonInfo} id={`guniInfo-${index}`} link={null} />
                        </div>
                    ))}
                </div>
                
                {/* Call to Action */}
                <div className="w-full bg-green-800 flex justify-center">
               <div className="container  bg-green-800 text-white p-2  flex flex-col gap-10">
                    {callToAction.map((item, index) => (
                        <div key={`calltoaction-${index}`} className="flex flex-col md:flex-row items-center md:justify-between text-[18px] gap-5  p-4">
                            <p>{item.text}</p>
                            <button className="border-gray-200 border-2 px-5 py-2 rounded-4xl cursor-pointer hover:text-green-800 hover:bg-white">
                                {item.btn}
                            </button>
                        </div>
                    ))}
                </div>
               </div>
            </div>
            <div className="py-3 flex justify-center ">
            <NewsSection/>
            </div>
            <EventSection/>

            <Footer/>
            
        </>
    );
};

export default Home;
