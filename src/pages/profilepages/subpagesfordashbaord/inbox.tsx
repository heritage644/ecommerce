import React from 'react'

import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Farmnest Support",
    lastMessage: "Your order has been shipped 🚚",
    time: "2m ago",
  },
  {
    id: 2,
    name: "Delivery Agent",
    lastMessage: "I'm close to your location",
    time: "10m ago",
  },
  {
    id: 3,
    name: "Customer Care",
    lastMessage: "How can we assist you?",
    time: "1h ago",
  },
];

const messagesData: Record<number, { sender: string; text: string }[]> = {
  1: [
    { sender: "them", text: "Your order has been shipped 🚚" },
    { sender: "me", text: "Great, thank you!" },
  ],
  2: [
    { sender: "them", text: "I'm close to your location" },
  ],
};
const Inbox = () => {
  

  const [activeChat, setActiveChat] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  const messages = activeChat ? messagesData[activeChat.id] || [] : [];

  return (
    <div className="h-screen w-[80%] flex bg-gray-50">

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
          fixed md:static inset-0 z-20 bg-white flex flex-col
          w-full  md:w-[320px] border-r
          transition-transform duration-300
          ${showChat ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-lg text-green-600  font-semibold">Inbox</h2>

          {/* Search */}
          <div className="mt-3 flex items-center h-10 bg-orange-100  px-3 py-2">
            <Search size={18} className="text-gray-500" />
            <input
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => {
                setActiveChat(chat);
                setShowChat(true);
              }}
              className="px-4 py-3 border-b h-20 hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex justify-between">
                <p className="font-medium text-sm">{chat.name}</p>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
              <p className="text-xs text-gray-500 truncate">
                {chat.lastMessage}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CHAT AREA ================= */}
      <div
        className={`
          flex-1 flex flex-col bg-white
          fixed md:static inset-0 z-10
          transition-transform duration-300
          ${showChat ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center gap-3">
          {/* Back button (mobile only) */}
          <button
            onClick={() => setShowChat(false)}
            className="md:hidden"
          >{""}
            <ArrowLeft />
          </button>

          <h3 className="font-semibold text-green-600 text-sm md:text-base">
            {activeChat?.name || "Select a chat"}
          </h3>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {!activeChat ? (
            <div className="hidden md:flex h-full items-center justify-center text-gray-400">
              Select a conversation
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-10">
              No messages yet
            </div>
          ) : (
            messages.map((msg: any, i: number) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "me"
                    ? "justify-end"
                    : "justify-start  "
                }`}
              >
                <div
                  className={`
                     flex justify-center items-center rounded-2xl max-w-[70%] text-sm
                    ${
                      msg.sender === "me"
                        ? "bg-[#2E7D32]  h-10 w-60 my-auto text-center  text-white"
                        : "bg-[#2E7D32] h-10 w-60 my-auto text-center  text-white"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input */}
        {activeChat && (
          <div className="p-3 border-t h-15 flex gap-2">
            <input
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-4 py-2 text-sm outline-none"
            />
            <button className="bg-[#F57C00] w-[30%] p-4 text-white l text-sm">
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
 

export default Inbox
