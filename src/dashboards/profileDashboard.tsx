import DashboardInterface from "@/pages/profilepages/dashinterface";
import InputFieldgroupModal from "@/pages/profilepages/input";
import { useAuth } from "@/context-provider/context";
export default function Dashboard() {
  const {open, setOpen} = useAuth()
  return (
    <>
    
    {open ?  <InputFieldgroupModal/> : <DashboardInterface/>}
    </>
  );
}