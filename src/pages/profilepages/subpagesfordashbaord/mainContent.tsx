import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom"
import flower from "../../../assets/plant 1 (1).svg"
import { useAuth } from "@/context-provider/context";
import { useNavigate } from "react-router-dom";
const MainContent = () => {
      const { setOpen, profileAddress, profileName, name, setSelectedAddress, setAddress} = useAuth()
    const hasAddress = profileAddress?.length > 0;
      const setOPpenModal =()=>{
        setOpen(true)
      }
          const navigate = useNavigate()
  
    const isAuthenticated = !!localStorage.getItem("token");
  const logOutSession = ()=> {
    localStorage.removeItem("email")
    localStorage.removeItem("token")
    
    navigate("/checkemail")

  }
  return (
    <div>
        <main className="main-content">
       <Link to="/"> <h1 className="page-title flex items-center  gap-3">  <HomeIcon/>  Account Overview</h1>
</Link>
        <div className="content-grid">
          {/* Account Details */}
          <div className="card ">
            <h2 className="card-title">ACCOUNT DETAILS</h2>
            <div className="flex items-start justify-between">
              <div>
                <p className="account-name"> {profileName} </p>
              <p className="account-email">{name}</p> 
              </div>
               <button onClick={setOPpenModal} className="edit-btn">{""}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Address Book */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">ADDRESS BOOK</h2>
              <button disabled={hasAddress}  onClick={() => {
          setSelectedAddress(null); // 👈 CREATE MODE
          setAddress(true);
          
        }} className="edit-btn">{""}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
            </div>
            <div className="card-content">
              <p className="address-label">Your default shipping address:</p>
        {profileAddress.map((addr: any) => (
        <div
          key={addr._id}
          onClick={() => {
            setSelectedAddress(addr); // 👈 EDIT MODE
            setAddress(true);
          }}
          className=" p-3 cursor-pointer mb-2"
        >
          <p>{addr.fullName.toUpperCase()}</p>
          <p>{addr.addressLine}</p>
          <p>{addr.city}</p>
          <p>{addr.state}</p>
         <p>{addr.phone}</p>
          
        </div>
      ))}
            </div>
          </div>

          {/* Jumia Store Credit */}
          <div className="card">
            <h2 className="card-title">JUMIA STORE CREDIT</h2>
            <div className="card-content">
              <div className="credit-info">
                <span className="bg-green-500 w-7 text-center">₦</span>
                <span className="flex  items-center gap-3"> <h3 className="flex  items-center justify-center ">Fa<img src={flower} alt="flower.bg" /> m<strong className="text-orange-400 border-b border-green-400 ">Nest</strong>
            </h3> credit balance: </span>
                <span className="credit-amount">₦ 0</span>
              </div>
            </div>
          </div>

          {/* Newsletter Preferences */}
          <div className="card">
            <h2 className="card-title">NEWSLETTER PREFERENCES</h2>
            <div className="card-content">
              <p className="newsletter-text">
                Manage your email communications to stay updated with the latest news and offers.
              </p>
              <a href="#" className="newsletter-link">Edit Newsletter preferences</a>
            </div>
         
          </div>
        </div>
        { isAuthenticated && <  div className="bg-red-500 h-10 flex items-center justify-center w-[10%] "> 
         < button onClick={logOutSession} className="font-bold hover:bg-red-700 transition w-full h-full text-white">
            Log Out
         </button>
         </div>}
      </main>
    </div>
  )
}

export default MainContent
