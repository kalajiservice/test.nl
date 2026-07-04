import React, { useState } from "react";
import { Lock } from "lucide-react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Wachtwoord succesvol gewijzigd (Demo)");
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#111214] border border-steel p-8 rounded-lg">
        <h2 className="text-3xl font-black text-alabaster mb-2">New password</h2>
        <p className="text-foreground/70 text-sm mb-6">Enter your new password below</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-alabaster mb-2">New Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/70" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-obsidian border border-steel rounded p-3 pl-10 text-alabaster focus:outline-none focus:border-ochre" placeholder="••••••••" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-ochre text-obsidian font-bold py-3 mt-4 hover:bg-ochre/90 transition-colors">Reset password</button>
        </form>
      </div>
    </div>
  );
}