import { useState } from "react"
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
          <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl p-6 animate-fadeIn">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-lg font-semibold mb-4">
              Update Profile
            </h2>

            {/* FORM */}
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" placeholder="Jordan Lee" />
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

                <Field orientation="horizontal">
                  <Button type="reset" variant="outline">
                    Reset
                  </Button>
                  <Button type="submit">Submit</Button>
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