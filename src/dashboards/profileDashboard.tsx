import { Mail, Phone, Calendar, Pencil } from "lucide-react";
import OrderRow from "../components/profilecomponent/orderrow";
import { useAuth } from "@/context-provider/context";
export default function ProfilePage() {
const {name} = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* 🔷 HEADER CARD */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          
          {/* TOP BLUE STRIP */}
          <div className="h-24 bg-blue-700" />

          <div className="p-6 flex items-center justify-between">
            
            <div className="flex items-center gap-4">
              
              {/* AVATAR */}
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-semibold border-4 border-white -mt-10">
                AM
              </div>

              {/* USER INFO */}
              <div>
                <h2 className="text-xl font-semibold">Alex Morgan</h2>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Mail size={14} /> {name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={14} /> +1 (555) 234-5678
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> Member since March 2024
                  </span>
                </div>
              </div>
            </div>

            {/* EDIT BUTTON */}
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
              <Pencil size={14} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* 📦 RECENT ORDERS */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          
          <h3 className="font-semibold text-gray-700 mb-4">
            Recent Orders
          </h3>

          <div className="divide-y">

            <OrderRow
              id="ORD-2849"
              date="Apr 10, 2026"
              items="3 items"
              price="$124.99"
              status="Delivered"
            />

            <OrderRow
              id="ORD-2901"
              date="Apr 13, 2026"
              items="1 item"
              price="$79.50"
              status="Shipped"
            />

            <OrderRow
              id="ORD-2955"
              date="Apr 15, 2026"
              items="5 items"
              price="$249.00"
              status="Processing"
            />

            <OrderRow
              id="ORD-2100"
              date="Feb 20, 2026"
              items="1 item"
              price="$34.99"
              status="Cancelled"
            />

          </div>
        </div>
      </div>
    </div>
  );
}