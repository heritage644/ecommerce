import React, { useState, useEffect } from "react";
import flower from "../../../assets/plant 1 (1).svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context-provider/context";

const AddressFieldgroupModal = () => {
  const {
    address,
    setAddress,
    profileAddress,
    setProfileAddress,
    selectedAddress,
    setSelectedAddress,
  } = useAuth();

  // ✅ NEVER set _id manually
  const [formData, setFormData] = useState<any>({
    label: "Home",
    fullName: "",
    addressLine: "",
    city: "",
    state: "",
    phone: "",
    isDefault: false,
  });

  // 🔥 PREFILL WHEN EDITING
  useEffect(() => {
    if (selectedAddress) {
      setFormData(selectedAddress);
    } else {
      setFormData({
        label: "Home",
        fullName: "",
        addressLine: "",
        city: "",
        state: "",
        phone: "",
        isDefault: false,
      });
    }
  }, [selectedAddress]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const submitAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return;

    const isEdit = Boolean(selectedAddress?._id);

    // ✅ IMPORTANT: ensure correct id is used ONLY for update
    const payload = {
      ...formData,
      _id: isEdit ? selectedAddress._id : undefined,
    };

    const res = await fetch(
      "http://localhost:3000/api/users/addAddress",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          addresses: payload,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      return;
    }
    setSelectedAddress(null);
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
          <div className="relative z-10 w-full items-center h-[700px] justify-center max-w-3xl bg-white shadow-xl flex flex-col gap-4 p-6">

            <button
              onClick={() => setAddress(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold text-center">
              <span className="flex items-center justify-center">
                Fa<img src={flower} alt="" />
                m<strong className="text-orange-400">Nest</strong>
              </span>
              {selectedAddress ? "Edit Address" : "Add Address"}
            </h2>

            <form
              onSubmit={submitAddress}
              className="flex flex-col w-[80%] items-start justify-center gap-3"
            >
              <Input
                name="label"
                value={formData.label}
                onChange={handleChange}
              />

              <Input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />

              <Textarea
                name="addressLine"
                placeholder="Address"
                value={formData.addressLine}
                onChange={handleChange}
              />

              <Input
                name="city"
                placeholder="city"
                value={formData.city}
                onChange={handleChange}
              />

              <Input
                name="state"
                placeholder="state"
                value={formData.state}
                onChange={handleChange}
              />

              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <label className="flex gap-2">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                />
                Set as default
              </label>

              <div className="flex w-[80%] gap-3">
                <Button className="w-[120px]"
                  type="button"
                  onClick={() => setSelectedAddress(null)}
                >
                  Reset
                </Button>

                <Button className="w-full" type="submit">
                  {selectedAddress ? "Update" : "Save"}
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