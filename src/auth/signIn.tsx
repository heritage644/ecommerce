import { form } from 'framer-motion/client';
import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AuthPages = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
 const location = useLocation()
const navigate = useNavigate()
 const email = location.state?.email || "";
  const [formData, setFormData] = useState({
    email,
    password:""
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>)=> {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value
      })
      console.log(formData)
    }

    const handleSubmit =async(e:React.FormEvent) => {
      setLoading(true)
      e.preventDefault()
     try{
      const res = await fetch ("http://localhost:3000/api/users/login",{
      method:"POST",
      headers : {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        email :formData.email,
        password : formData.password
      })
     });
  
     const data = await res.json()
        console.log(data)
      if (!res.ok) { 
        setError(data.message || "invald fields provided");
         console.log(data.message)
        return
       
       }
      navigate("/",  {
        state:{email}
      })
    
     }finally {
  setLoading(false)
     }
    }
useEffect(() => {
  if (!location.state?.email) {
    navigate("/enter-email");
  }
}, []);

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
              Welcome Back!
            </h2>
    
            <p className="text-green-600 text-sm text-center ">
               All data is safeguarded
            </p>
        </div>
    
            {/* FEATURES */}
           
    
            {/* INPUT */}
            <div className="mb-4 flex items-center  justify-center w-full flex-col gap-1 ">
              <label className="text-sm w-full items-center justify-center  flex flex-col gap-1 text-gray-600">
                Please enter your password
                <input
                onChange={handleChange}
                type="password"
                name='password'
                placeholder=""
                className="w-[80%] mt-1 h-10 border border-gray-300 font-bold  py-2 outline-none focus:ring-2 focus:ring-orange-400"
              />
              </label>
              
            </div>
    
            {/* BUTTON */}
               <button onClick={handleSubmit} className="w-[80%] h-10 bg-orange-300 hover:bg-orange-400 flex items-center justify-center text-white py-12 rounded-full font-medium transition">
              { loading ? <div className='spinner'></div> :"Continue to app"}
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
          </div>
        </div>
  )
}

export default AuthPages
