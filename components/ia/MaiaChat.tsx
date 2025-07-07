"use client"
import { useState } from "react"
import { Bot } from "lucide-react"

export default function MaiaChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-[350px] h-[500px] bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">
          <div className="bg-[#009E60] text-white p-3 flex items-center justify-between">
            <span className="font-semibold">💬 MIA – Assistance Municipale</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <iframe
            src="https://poe.com/Marcory-IA.1.0"
            className="w-full h-full"
            title="Maïa"
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-[#F77F00] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
