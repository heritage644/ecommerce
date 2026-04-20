import DashboardInterface from "@/pages/profilepages/dashinterface";
import InputFieldgroupModal from "@/pages/profilepages/profileinput/input";
import { useAuth } from "@/context-provider/context";
import AddressFieldgroupModal from "@/pages/profilepages/addressinput/addressinput";
import { useEffect } from "react";
export default function Dashboard() {
  const {open,  address, profileName, setProfileAddress, setProfileName} = useAuth()
useEffect(()=>{
       const fetchProfile = async () => { 
      const res = await fetch("http://localhost:3000/api/users/profile",{
        method:"GET",
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        } }
    )
     if (res.status === 401) {
        console.log("Token expired or invalid");
        localStorage.removeItem("token"); 
        return;
      }
      const data = await res.json()
      console.log(data)
      setProfileName(data.profile.name)
      setProfileAddress(data.addresses)

     } 
     fetchProfile()
},[]) 

  return (
    <>
    
    {open ?  <InputFieldgroupModal/> : <DashboardInterface/>}
    {address ? <AddressFieldgroupModal/> :<InputFieldgroupModal/>}

    </>
  );
}