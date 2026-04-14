import { useState } from 'react'
import Body from './components/body'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from './auth/signUp';
import AuthPages from './auth/signIn';
import './App.css'
import NotFound from './pages/notfound';
import CartDashboard from './dashboards/cartDashboard';
import ProfileDashboard from './dashboards/profileDashboard';
import ExploreDashboard from './dashboards/exploreDAshboard';
import About from './pages/about';
import UseSignIn from './hooks/useSignin';
function App() {
  

  return (
    <>

 <BrowserRouter>
 <Routes>
   <Route>
    <Route path="/signUp" element={<UseSignIn />} />
           <Route path="/signin" element={<AuthPages/>} />
          <Route path="/" element={  <Body /> } />
          <Route path="/about" element={<About />} />
           <Route path="/cart" element={<CartDashboard/>} />
          <Route path="/profile" element={<ProfileDashboard />} />
           <Route path="/explore" element={<ExploreDashboard />} />
          <Route path="*" element={<NotFound />} />
  </Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
