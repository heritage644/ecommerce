import { createContext, useState, useContext } from "react";

// 1. Type definition
interface AuthContextType {
  emails: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  name:string;
  setName:React.Dispatch<React.SetStateAction<string>>;
  open:boolean;
  setOpen:React.Dispatch<React.SetStateAction<boolean>>;
  address:boolean;
  setAddress:React.Dispatch<React.SetStateAction<boolean>>;
  profileName:string;
  setProfileName:React.Dispatch<React.SetStateAction<string>>;
  profileAddress:string[];
  setProfileAddress:React.Dispatch<React.SetStateAction<string[]>>;
  selectedAddress:any;
  setSelectedAddress:React.Dispatch<React.SetStateAction<any>>;
  userId:string;
  setUserId:React.Dispatch<React.SetStateAction<string>>;
  openItem:boolean;
  setOpenItem:React.Dispatch<React.SetStateAction<boolean>>;
}

// 2. Create context
const authContext = createContext<AuthContextType | undefined>(undefined);

// 3. Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [emails, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
   const [open, setOpen] = useState(false);
   const [address, setAddress] = useState(false)
   const [profileName, setProfileName] = useState("")
   const [profileAddress, setProfileAddress] = useState<string[]>([])
   const [selectedAddress, setSelectedAddress] = useState<any>(null);
   const [userId, setUserId] = useState<string>("")
   const [openItem, setOpenItem] = useState(false)
   
  return (
    <authContext.Provider value={{ emails, 
      setEmail, success, 
     setSuccess,error, setError, setName, name,
     open, setOpen, address, setAddress, profileName, setProfileName,
     
     openItem, setOpenItem, profileAddress, setProfileAddress, selectedAddress, setSelectedAddress, userId, setUserId }}>
      {children}
    </authContext.Provider>
  );
};

// 4. Custom hook with null guard
export const useAuth = (): AuthContextType => {
  const context = useContext(authContext);
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
};

// 5. Default export
export default authContext;