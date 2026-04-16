import { createContext, useState, useContext } from "react";

// 1. Type definition
interface AuthContextType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  name:string;
  setName:React.Dispatch<React.SetStateAction<string>>;
}

// 2. Create context
const authContext = createContext<AuthContextType | undefined>(undefined);

// 3. Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  return (
    <authContext.Provider value={{ email, setEmail, success, setSuccess, error, setError,setName,name }}>
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