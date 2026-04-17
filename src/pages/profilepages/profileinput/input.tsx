import { useState } from "react"
import flower from "../../../assets/plant 1 (1).svg"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context-provider/context"
const InputFieldgroupModal = () => {
 
const {open, setOpen} = useAuth()
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
                <h3 className="flex  items-center justify-center ">Fa<img src={flower} alt="flower.bg" /> m<strong className="text-orange-400 border-b border-green-400 ">Nest</strong>
            </h3>Account 
              Update Profile
            </h2>

            {/* FORM */}
            <form className="w-[80%] ml-5 items-center justify-center flex">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input className="" id="name" placeholder="Jordan Lee" />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <FieldDescription>
                    We&apos;ll send updates to this address.
                  </FieldDescription>
                </Field>

                <Field className="w-1/2" orientation="horizontal">
                  <Button className="bg-orange-300 hover:bg-orange-400 w-full" type="reset" variant="outline">
                    Reset
                  </Button>
                  <Button className="w-full bg-gray-500 text-white  hover:bg-gray-700" type="submit">Submit</Button>
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