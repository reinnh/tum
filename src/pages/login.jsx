import {Login} from "../components/forms/login";
import logo from '../assets/logo.png';
import iso from '../assets/iso.png'
 const TummisLogin=()=>{
    return(
        <>
        <div className="flex overflow-x-hidden flex-col md:flex-row gap-7 h-svh pt-5 bg-gray-100 text-blue-950 md:pt-0">
        <div className="container flex-1 flex flex-col items-center p-2 gap-5 md:text-white  md:justify-end md:gap-5 md:min-w-[330px] md:bg-green-800">
            <div className="w-[40%] flex items-center justify-center"> <img src={logo} alt="logo" className="md:max-w-[200px] md:w-full md:pb-5 "/></div>
            <div className="md:hidden">
                <p className="flex justify-center gap-2 font-[500] text-center text-lg pb-2">SIGN IN <div className="border-1 border-blue-950"></div>  TUMMIS</p> 
                <p className="text-center text-lg">Welcome! Login to access your </p>
                <p className="text-center"> dashboard</p>
            </div>
            <div className="hidden md:block ">
              <div className="container">
              <p className="font-[500] text-2xl px-20 pb-5">Technical University of Mombas</p>
                <p className="px-20 mb-10">
                Welcome to Technical University of Mombasa. 
                A Technical University of Global Excellence in Advancing Knowledge, 
                Science and Technolog
                </p>
              </div>
                <div className="items-center justify-between  pb-15 px-20 flex">
                    <p>TUM &copy; 2025</p>
                    <img src={iso} alt="iso" className="w-[200px]" />
                </div>
            </div>
        </div>
        <div className="container flex  flex-col flex-2 gap-7  h-full md:justify-center">
        <div className="md:block hidden">
                <p className="flex justify-center gap-4 font-[500] text-center text-2xl pb-4 ">SIGN IN <div className="border-1 border-blue-950"></div>  TUMMIS</p> 
                <p className="text-center text-lg">Welcome! Login to access your dashboard </p>
            </div>
        <Login/>
        <div className="container p-4 text-sm text-center text-[15px]">
            <p>Create your <span className="text-blue-500">E-citizen account here</span> if you are </p> 
            <p> paying awaiting graduation. if have an account already log in </p>
        </div>
        <div className="flex items-end w-full justify-center pb-5 md:hidden  h-full ">
            <img src={iso} alt="iso" className="w-[300px] h-[70px]" />
        </div>
        </div>
        </div>
        </>
    )
 }

 export default TummisLogin;
