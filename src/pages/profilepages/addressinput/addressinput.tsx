import React, { useState } from "react";
import flower from "../../../assets/plant 1 (1).svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context-provider/context";

const AddressFieldgroupModal = () => {
  const { address, setAddress } = useAuth();

  const [formData, setFormData] = useState({
    label: "Home",
    fullName: "",
    addressLine: "",
    city: "",
    state: "",
    phone: "",
    isDefault: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const submitAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found");
      return;
    }

    const res = await fetch("http://localhost:3000/api/users/addAddress", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        addresses: [formData], // 👈 matches your schema
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Error:", data);
      return;
    }

    console.log("Address saved:", data);
    setAddress(false);
  };

  return (
    <>
      {address && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setAddress(false)}
          />

          {/* MODAL */}
          <div className="relative z-10 w-full max-w-md bg-white shadow-xl flex flex-col gap-4 p-6">

            {/* CLOSE */}
            <button
              onClick={() => setAddress(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-lg font-semibold text-center">
              <span className="flex items-center justify-center">
                Fa<img src={flower} alt="flower" />
                m<strong className="text-orange-400 border-b border-green-400">Nest</strong>
              </span>
              Update Address
            </h2>

            {/* FORM */}
            <form onSubmit={submitAddress} className="flex flex-col gap-3">

              <Input name="label" placeholder="Label (Home, Work)" value={formData.label} onChange={handleChange} />

              <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />

              <Textarea name="addressLine" placeholder="Full Address" value={formData.addressLine} onChange={handleChange} />

              <Input name="city" placeholder="City" value={formData.city} onChange={handleChange} />

              <Input name="state" placeholder="State" value={formData.state} onChange={handleChange} />

              <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />

              {/* DEFAULT CHECKBOX */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                />
                Set as default address
              </label>

              {/* BUTTONS */}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    setFormData({
                      label: "Home",
                      fullName: "",
                      addressLine: "",
                      city: "",
                      state: "",
                      phone: "",
                      isDefault: false,
                    })
                  }
                  className="w-full"
                >
                  Reset
                </Button>

                <Button type="submit" className="w-full bg-gray-500 text-white hover:bg-gray-700">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddressFieldgroupModal;