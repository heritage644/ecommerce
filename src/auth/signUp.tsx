import React from 'react'
import { X } from "lucide-react";
import { useState } from 'react';
import { div } from 'framer-motion/client';



export default function AuthPage() {
const [loading, setLoading] = useState(false);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* 🔥 BACKDROP (this is the dark overlay you noticed) */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
       
      />

      {/* MODAL */}
      <div className="relative z-10 w-full flex flex-col
       items-center justify-center gap-6 max-w-md bg-white
        rounded-sm shadow-xl h-130 animate-fadeIn">
  
              <div>
  
        {/* HEADER */}
        <h2 className="text-xl font-semibold text-center  mb-2">
          Sign in / Register
        </h2>

        <p className="text-green-600 text-sm text-center ">
          🔒 All data is safeguarded
        </p>
    </div>

        {/* FEATURES */}
        <div className="flex justify-center items-center gap-10 text-sm text-gray-600 mb-6">
          <div className="text-center flex flex-col items-center justify-center">
           <img src="/inboxer.avif" alt=""  className='w-[70px]'/>
            <p className="font-medium">Free shipping</p>
            <span className="text-xs">On all orders</span>
          </div>
          <div className="text-center flex flex-col items-center justify-center ">
            <img src="/transporter.avif" alt="" className='w-[70px]' />
            <p className="font-medium">Return within 90d</p>
            <span className="text-xs">From purchase date</span>
          </div>
        </div>

        {/* INPUT */}
        <div className="mb-4 flex items-center  justify-center w-full flex-col gap-1 ">
          <label className="text-sm w-full items-center justify-center  flex flex-col gap-1 text-gray-600">
            Please enter your email address
            <input
            type="email"
            placeholder=""
            className="w-[80%] mt-1 h-10 border border-gray-300 font-bold  py-2 outline-none focus:ring-2 focus:ring-orange-400"
          />
          </label>
          
        </div>

        {/* BUTTON */}
           <button className="w-[80%] h-10 bg-orange-300 hover:bg-orange-400 flex items-center justify-center text-white py-12 rounded-full font-medium transition">
          { loading ? <div className='spinner'></div> :"Continue"}
        </button>

      
        {/* TROUBLE */}
        <p className="text-center text-xs text-gray-500 mt-3 cursor-pointer hover:underline">
          Trouble signing in?
        </p>

        {/* DIVIDER */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-500">
            Or continue with other ways
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-4 mb-4">
          <button className="w-10 h-10 rounded-full border flex items-center justify-center">
            <img src="/google.avif" alt="" />{""}
          </button>
          <button className="w-10 h-10 rounded-full border text-blue-400 text-bold text-[30px] flex items-center justify-center">
            f
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center">
            IOS
          </button>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-xs text-gray-500 text-center">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Use</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}




