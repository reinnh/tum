import React from "react";
import { User, Lock } from "lucide-react";
import { motion } from "framer-motion";
import intranebg from '../../assets/intranet.svg'
import logoSvg from '../../assets/logo.svg'
import bgImage from '../../assets/bg.jpg'
import bunner from '../../assets/banner1.jpg'

export function Login() {
    return (
        <>
            <div className="container flex justify-center">
                <div className="container p-4 flex flex-col gap-6 items-center w-full max-w-md max-auto">
                    <input type="text" placeholder='username' id='username' className='bg-white border-gray-300  border-1  w-full px-5 py-4  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <input type="password" name="" id="password" placeholder='password' className='bg-white  border-gray-300 border-1  w-full px-5 py-4 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <div className='flex justify-between text-lg w-full'>
                        <p className='text-blue-400 cursor-pointer'><a href=""></a>forget password?</p>
                        <button type="button" className=' bg-lime-200 py-2 px-3 font-[500] active:bg-lime-100 text-green-800 rounded-[5px] flex items-center cursor-pointer'>sign in</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export function IntraNet() {
    return (
        <div className="flex w-full flex-col sm:flex-row sm:items-center border-2 justify-center min-h-screen bg-gray-100 p-4 gap-10 fixed inset ">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:w-96 w-full ">
                <div className="flex justify-center mb-4">
                    <div className="w-20 h-16  flex items-center justify-center ">
                        <span className="text-xl font-bold w-full">
                            <img src={logoSvg} alt="" />
                        </span>
                    </div>
                </div>
                <h2 className="text-center text-lg font-semibold mb-4">Log in</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-400"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-400"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
                    Login to Dashboard
                </button>
                <p className="text-center text-blue-500 text-sm mt-2 cursor-pointer hover:underline">
                    Forgot Password?
                </p>
            </div>
            <div className=" sm:flex sm:ml-10  md:h-96">
                <img src={intranebg} alt="Illustration" className=" w-full" />
            </div>
        </div>
    );
}


export const HrLogin = () => {
    return (
        <div className="flex items-center justify-center h-screen fixed bg-gray-100  inset-0 overflow-hidden ">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="absolute inset-0  bg-opacity-50"></div>

            {/* Login Form */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 bg-white p-6 rounded-xl border-10 border-gray-400  shadow-lg w-85"
            >
                <h2 className="text-xl font-bold text-center text-gray-800">LOG IN to <span className="text-orange-500">TUM</span></h2>
                <form className="mt-4 text-gray-400">
                    <div className="flex gap-2 py-1">
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2 ml-3">Username </label>
                            <input type="text" placeholder='username or email' className="w-full p-1  border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div className="">
                            <label className="block text-gra4-400 mb-2 ml-3">Password</label>
                            <input placeholder="password" type="password" className="w-full p-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>
                    <div className="flex justify-end items-center ">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2 w-3" /> Show Password
                        </label>
                    </div>
                    <div className="flex items-baseline pt-2 justify-between">
                        <button type="submit" className="px-12 bg-yellow-500 text-orange-800 font-semibold  active:opacity-50  py-1.5 rounded-sm hover:bg-orange-600 transition">Log in</button>
                        <a href="#" className="text-white bg-gray-600 py-2 px-2 text-sm shadow-2xl inset-1.5 active:opacity-50  hover: rounded-sm">Forgot Password?</a>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};


export const Elearning = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                <img
                    src="/logo.png"
                    alt="TUM Logo"
                    className="w-32 mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Left Panel */}
                    <div className="bg-black text-white p-6 rounded-lg">
                        <h2 className="text-xl font-semibold">TUM E-Learning Portal</h2>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>⚫ Cookies must be enabled in your browser</li>
                            <li>⚫ Some courses may allow guest access</li>
                        </ul>
                        <button className="mt-4 bg-gray-600 cursor-pointer hover:bg-gray-700 text-white px-4 py-2 rounded">
                            Log in as a guest
                        </button>
                    </div>

                    {/* Right Panel */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Already have an account?</h2>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-3 flex items-center">
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-sm">Remember username</label>
                            </div>
                            <button className="w-full cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800">
                                Log in
                            </button>
                        </form>
                        <p className="mt-3 text-sm text-gray-600 cursor-pointer hover:text-black">
                            Forgotten your username or password?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



 export function IndustrialAttatcmentLogin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-96 shadow-lg">
        <div className="flex flex-col gap-8 bg-white shadow-2xl border-1 border-gray-300 shadow-gray-700 pb-4">
          <div className="text-center mb-4 flex flex-col  bg-gray-100 py-2 gap-2">
            <img src="/logo.png" alt="Logo" className="mx-auto h-12" />
            <h2 className="text-lg  text-red-500">Industrial Attachment Portal (IAP)</h2>
          </div>
          <div className="w-full  text-center text-sm">
            <p className="text-gray-500">Login to IAP</p>
          </div>
          <div className="space-y-4 p-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Username" className="pl-10 w-full  text-gray-500 rounded-sm border border-gray-200 py-2 outline-none focus:border-teal-300" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " size={18} />
              <input type="password" placeholder="Enter Password" className="outline-none rounded-sm text-gray-500 focus:border-teal-300 pl-10 w-full border border-gray-200 py-2" />
            </div>
            <button className="w-full border-teal-400 border hover:bg-teal-500 flex hover:text-white items-center pl-4 text-teal-300 justify-center py-2 transition duration-700 rounded-sm mt-8">
              <Lock className="mr-2" size={16} /> Login
            </button>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-500  flex-col items-center gap-1">
            <a href="#" className="text-teal-500 ">Recover password</a>
          <span><span>New To IAP</span> <a href="#" className="text-teal-500 ">Sign Up</a></span>
          </div>
        </div>
      </div>
    </div>
  );
} 

export const OnlineClearance = () => {
    return (
      <>
      <div className="font-[arial]">
      <nav className="fixed left-0 right-0">
        <div className="bg-[#82a738] container px-10 py-2 flex justify-between items-center text-white">
            <div className="max-w-15 ">
                <img src="/logo.png" alt="" className=""/>
            </div>
            <p className="hidden md:block">ONLINE STUDENT CLE`ARANCE SYSTEM</p>
        </div>
      </nav>
      <div
            className="h-screen flex items-center justify-center bg-cover bg-center md:pt-22"
            style={{ backgroundImage: `url(${bunner})` }}
        >
            <div className="bg-gray-50 p-8 shadow-lg  w-full max-w-md">
                <div className="flex flex-col gap-y-2 py-8">
                <p className="text-center text-2xl font-bold ">Login Account</p>
                <p className="text-center text-gray-300 text-sm">Online Student Clearance System</p>

                </div>
                <form>
                    <label className="block mb-2 text-sm  text-gray-400">
                        Student Email
                    </label>
                    <input
                        type="email"
                        placeholder="e.g barc188j2017@students.tum.ac.ke"
                        className="w-full px-4 py-3 rounded-sm border border-gray-200  mb-5 outline-none focus:border-1 focus:border-[#82a738] hover:border-[#82a738]"
                    />

                    <label className="block mb-2 text-sm  text-gray-400">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-3 rounded-sm border border-gray-200  mb-5 outline-none focus:border-1 focus:border-[#82a738] hover:border-[#82a738]"
                    />

                    <a href="#" className="text-sm text-[#82a738] cursor-pointer hover:underline">
                        Forgot password?
                    </a>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-[#82a738] text-white py-3 cursor-pointer rounded-sm hover:opacity-90"
                    >
                         Login
                    </button>
                </form>

                <div className="mt-4 bg-[#fff3cd] p-5 flex flex-col text-sm text-yellow-800 rounded-md gap-4 ">
                   <p> <span className="font-extrabold ">i</span> You are required to create an account to apply for Online Student    Clearance and Caution Fees Refund</p>
                <button className="w-full mt-4 bg-blue-500 text-white py-3 rounded-sm hover:bg-blue-400">
                    Create Account Now ➜
                </button>
                </div>
            </div>
        </div>
      </div>
      </>
    );
};



