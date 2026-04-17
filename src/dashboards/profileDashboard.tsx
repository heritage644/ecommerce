import { useState } from "react";
import { useAuth } from "@/context-provider/context";
import flower from "../assets/plant 1.svg"
const orders = [
{ id: "#4821", item: "Linen Tote Bag", date: "Apr 14", total: "$89.00", status: "Shipped" },
{ id: "#4756", item: "Ceramic Mug Set", date: "Mar 30", total: "$54.00", status: "Delivered" },
{ id: "#4701", item: "Wool Throw", date: "Mar 18", total: "$112.00", status: "Delivered" },
];

const statusStyle : Record<string, { bg: string; color: string }> = {
Delivered: { bg: "#e6f4ee", color: "#2e7d5e" },
Shipped:   { bg: "#e8f0fb", color: "#2c5cc5" },
Processing:{ bg: "#fdeee5", color: "#c05a20" },
};

export default function CustomerDashboard() {
const [tab, setTab] = useState("orders");
const { name } = useAuth();
return (
<div style={{
fontFamily: "‘Georgia’, serif",
background: "#f7f4ef",
minHeight: "100vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: "24px",
}}>
<div style={{
background: "#fff",
borderRadius: "18px",
width: "100%",
maxWidth: "520px",
boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
overflow: "hidden",
}}>
    {/* Header */}
    <div className="bg-orange-100 px-6 py-5 text-black" style={{
     
      padding: "28px 28px 20px",
      
    }}>
      <div style={{ fontSize: "0.9rem",  color: "#a89880", textTransform: "uppercase",  }}>
       <h3 className="flex  items-center justify-start ">Fa<img src={flower} alt="flower.bg" /> m<strong className="text-orange-400 border-b border-green-400 ">Nest</strong>
            </h3> 
      </div>
      <div style={{ fontSize: "1.55rem", fontWeight: "700", marginBottom: "18px" }}>
        Hello, {name}!👋
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: "12px" }}>
        {[
          { label: "Orders", value: "24" },
          { label: "Spent", value: "$1,842" },
          { label: "Wishlist", value: "6" },
        ].map((s) => (
          <div key={s.label} style={{
            flex: 1,
            background: "rgba(255,255,255,0.07)",
            borderRadius: "10px",
            padding: "12px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "1.3rem", fontWeight: "700" }}>{s.value}</div>
            <div style={{ fontSize: "0.72rem", color: "#a89880", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Tabs */}
    <div style={{ display: "flex", borderBottom: "1px solid #ede8e0", padding: "0 28px" }}>
      {["orders", "wishlist", "account"].map((t) => (
        <button key={t} onClick={() => setTab(t)} style={{
          background: "none",
          border: "none",
          padding: "14px 0",
          marginRight: "24px",
          fontSize: "0.83rem",
          cursor: "pointer",
          fontFamily: "inherit",
          color: tab === t ? "#1a1410" : "#a89880",
          fontWeight: tab === t ? "700" : "400",
          borderBottom: tab === t ? "2px solid #c9622f" : "2px solid transparent",
          marginBottom: "-1px",
          transition: "color 0.15s",
          textTransform: "capitalize",
        }}>
          {t}
        </button>
      ))}
    </div>

    {/* Tab Content */}
    <div style={{ padding: "20px 28px 28px" }}>

      {/* ORDERS */}
      {tab === "orders" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {orders.map((o) => (
            <div key={o.id} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#f7f4ef",
              borderRadius: "12px",
              padding: "14px 16px",
            }}>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: "600" }}>{o.item}</div>
                <div style={{ fontSize: "0.75rem", color: "#a89880", marginTop: "2px" }}>{o.id} · {o.date}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.88rem", fontWeight: "700" }}>{o.total}</div>
                <span style={{
                  fontSize: "0.7rem",
                  padding: "2px 8px",
                  borderRadius: "20px",
                  fontWeight: "600",
                  background: statusStyle[o.status].bg,
                  color: statusStyle[o.status].color,
                  marginTop: "4px",display: "inline-block",
                }}>
                  {o.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* WISHLIST */}
      {tab === "wishlist" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { name: "Amber Glass Candle", price: "$32", old: "$45", emoji: "🕯️" },
            { name: "Rattan Basket", price: "$58", emoji: "🧺" },
            { name: "Ceramic Plant Pot", price: "$24", old: "$30", emoji: "🪴" },
          ].map((w) => (
            <div key={w.name} style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "#f7f4ef",
              borderRadius: "12px",
              padding: "14px 16px",
            }}>
              <div style={{ fontSize: "1.6rem" }}>{w.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: "600" }}>{w.name}</div>
                <div style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                  <span style={{ color: "#c9622f", fontWeight: "700" }}>{w.price}</span>
                  {w.old && <span style={{ color: "#a89880", textDecoration: "line-through", marginLeft: "6px" }}>{w.old}</span>}
                </div>
              </div>
              <button style={{
                background: "#1a1410", color: "#fff",
                border: "none", borderRadius: "8px",
                padding: "7px 13px", fontSize: "0.75rem",
                cursor: "pointer", fontFamily: "inherit", fontWeight: "600",
              }}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {/* ACCOUNT */}
      {tab === "account" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { label: "Name", value: "Julia Larson" },
            { label: "Email", value: "julia@example.com" },
            { label: "Phone", value: "+1 (503) 555-0142" },
            { label: "Address", value: "142 Maple St, Portland, OR" },
          ].map((f) => (
            <div key={f.label} style={{
              background: "#f7f4ef",
              borderRadius: "10px",
              padding: "12px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ fontSize: "0.75rem", color: "#a89880", textTransform: "uppercase", letterSpacing: "0.07em" }}>{f.label}</span>
              <span style={{ fontSize: "0.88rem", fontWeight: "600" }}>{f.value}</span>
            </div>
          ))}
          <button style={{
            marginTop: "6px",
            background: "#1a1410", color: "#fff",
            border: "none", borderRadius: "10px",
            padding: "13px", fontSize: "0.85rem",
            cursor: "pointer", fontFamily: "inherit", fontWeight: "600",
            width: "100%",
          }}>Edit Profile</button>
        </div>
      )}

    </div>
  </div>
</div>

);
}