import DashboardInterface from "@/pages/profilepages/dashinterface";
import InputFieldgroupModal from "@/pages/profilepages/profileinput/input";
import { useAuth } from "@/context-provider/context";
import AddressFieldgroupModal from "@/pages/profilepages/addressinput/addressinput";
export default function Dashboard() {
  const {open, setOpen, address} = useAuth()
  
  return (
    <>
    
    {open ?  <InputFieldgroupModal/> : <DashboardInterface/>}
    {address ? <AddressFieldgroupModal/> :<InputFieldgroupModal/>}

    </>
  );
}