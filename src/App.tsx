import Body from './components/body'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPages from './auth/signIn';
import SignUp from './auth/signUp';
import './App.css'
import NotFound from './pages/notfound';
import CartDashboard from './dashboards/cartDashboard';
import ProfileDashboard from './dashboards/profileDashboard';
import ExploreDashboard from './dashboards/exploreDAshboard';
import About from './pages/about';
import UseSignUp from './hooks/useSignin';
import ShoNow from './pages/shop/ShoNow';
import InputFieldgroup from './pages/profilepages/profileinput/input';
import Blog from './pages/blog';
import MainContent from './pages/profilepages/subpagesfordashbaord/mainContent';
import DashboardInterface from './pages/profilepages/dashinterface';
import Voucher from './pages/profilepages/subpagesfordashbaord/voucher';
import RecentlyViewed from './pages/profilepages/subpagesfordashbaord/RecentlyViewed';
import Inbox from './pages/profilepages/subpagesfordashbaord/inbox';
import Wishlist from './pages/profilepages/subpagesfordashbaord/wishlist';
import FollowedSellers from './pages/profilepages/subpagesfordashbaord/FollowedSellers';
import Orders from './pages/profilepages/subpagesfordashbaord/Orders';
import SingleItem from './pages/shop/singleItem';
function App() {
  

  return (
    <>

<BrowserRouter>
  <Routes>
    <Route path="/checkemail" element={<UseSignUp />} />
    <Route path="/signin" element={<AuthPages />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/" element={<Body />} />
    <Route path="/about" element={<About />} />
    <Route path="/input" element={<InputFieldgroup />} />
    <Route path="/cart" element={<CartDashboard />} />
    <Route path="/profile" element={<ProfileDashboard />} />
    <Route path="/fruit" element={<SingleItem />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/explore" element={<ExploreDashboard />} />

    <Route path="/dashboard" element={<DashboardInterface />}>
      <Route index element={<MainContent />} />
      <Route path="recentlyviewed" element={<RecentlyViewed/>} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="followedsellers" element={<FollowedSellers />} />
      <Route path="voucher" element={<Voucher />} />
      <Route path="orders" element={<Orders/>} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
