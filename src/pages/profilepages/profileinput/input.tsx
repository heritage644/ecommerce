import React, { useState } from "react"
import flower from "../../../assets/plant 1 (1).svg"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context-provider/context"
const InputFieldgroupModal = () => {
const {open, setOpen} = useAuth()

const [formData, setFormData] = useState({
   name:""
 })
const handleChange = ( e : React.ChangeEvent<HTMLInputElement>
     | React.ChangeEvent<HTMLTextAreaElement>)=>{
       
  setFormData({
    ...formData,
    [e.target.name] : e.target.value
  })
}

const updateUser = async (e:React.FormEvent)=> {

  const token = localStorage.getItem("token");
  if (!token) {
    console.log("No token found");
    return;
  } 
  const res = await fetch ("http://localhost:3000/api/users/addProfile",{
    
    method :"PUT",
    headers: {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    },
    body:JSON.stringify({profile : formData})
   } 
);
const data = await res.json()
if (!res.ok) {
  console.error("Error:", data.error);
  return;
}
console.log(res)
  
  console.log(data, "updated data")     

}
  return (
    <>
      {/* 🔥 TRIGGER BUTTON */}
      

      {/* 🔥 MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* MODAL CONTENT */}
          <div className="relative z-10 w-full gap-5 flex items-center justify-center flex-col h-150 max-w-md bg-white shadow-xl  animate-fadeIn">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 p-30 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-lg font-semibold mb-4 text-center">
                <span className="flex  items-center justify-center ">Fa<img src={flower} alt="flower.bg" /> m<strong className="text-orange-400 border-b border-green-400 ">Nest</strong>
            </span>Account 
              Update Profile Name
            </h2>

            {/* FORM */}
            <form onSubmit={updateUser} className="w-[80%] ml-5 items-center justify-center flex">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input  name='name' type="text" onChange={handleChange} className="" id="name" placeholder="Jordan123" />
                </Field>
             

                <Field className="w-1/2" orientation="horizontal">
                  <Button className="bg-orange-300 hover:bg-orange-400 w-full" type="reset" variant="outline">
                    Reset
                  </Button>
                  <Button  type="submit"  className="w-full bg-gray-500 text-white  hover:bg-gray-700">Submit</Button>
                </Field>
              </FieldGroup>
            </form>

          </div>
        </div>
      )}
    </>
  )
}

export default InputFieldgroupModal