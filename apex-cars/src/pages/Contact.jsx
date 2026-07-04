import React from 'react';

export default function Contact(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="bg-[#111214] p-6 rounded border border-steel">
        <p className="text-foreground/70">Reach out to The Apex Collective for inquiries, sales, or support.</p>
        <form className="mt-4 space-y-3">
          <input placeholder="Name" className="w-full p-2 bg-[#0b0b0c] border border-steel rounded" />
          <input placeholder="Email" className="w-full p-2 bg-[#0b0b0c] border border-steel rounded" />
          <textarea placeholder="Message" className="w-full p-2 bg-[#0b0b0c] border border-steel rounded" rows={5} />
          <button className="bg-ochre px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </div>
  );
}
