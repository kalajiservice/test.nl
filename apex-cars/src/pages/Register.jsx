import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) return alert("Wachtwoorden matchen niet");
    alert(`Demo modus: Registreren met ${email}`);
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#111214] border border-steel p-8 rounded-lg">
        <h2 className="text-3xl font-black text-alabaster mb-2">Create your account</h2>
        <p className="text-foreground/70 text-sm mb-6">Sign up to get started</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-alabaster mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/70" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-obsidian border border-steel rounded p-3 pl-10 text-alabaster focus:outline-none focus:border-ochre" placeholder="you@example.com" required />
            </div>
          </div>
          <div>
            <label className="block text-sm text-alabaster mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/70" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-obsidian border border-steel rounded p-3 pl-10 text-alabaster focus:outline-none focus:border-ochre" placeholder="••••••••" required />
            </div>
          </div>
          <div>
            <label className="block text-sm text-alabaster mb-2">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/70" />
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-obsidian border border-steel rounded p-3 pl-10 text-alabaster focus:outline-none focus:border-ochre" placeholder="••••••••" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-ochre text-obsidian font-bold py-3 mt-4 hover:bg-ochre/90 transition-colors">Create account</button>
        </form>
        <p className="text-sm text-foreground/70 mt-4 text-center">Already have an account? <Link to="/login" className="text-ochre hover:underline">Log in</Link></p>
      </div>
    </div>
  );
}