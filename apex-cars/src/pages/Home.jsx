import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('/api/cars')
      .then(r => r.json())
      .then(data => setFeatured(data.slice(0, 3)))
      .catch(() => setFeatured([]));
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-b from-obsidian/90 to-black text-alabaster py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black">The Apex Collective</h1>
            <Link to="/inventory" className="bg-ochre text-obsidian px-4 py-2 rounded">Browse Inventory</Link>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl font-extrabold mb-4">High-performance vehicles, curated for you</h2>
              <p className="text-foreground/70 mb-6">Explore our hand-selected inventory of premium cars, designed for drivers who expect the best.</p>
              <Link to="/inventory" className="inline-block bg-ochre px-5 py-3 rounded font-semibold">View Inventory</Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {featured.map(c => (
                <div key={c.id} className="bg-[#111214] p-4 rounded border border-steel flex gap-4 items-center">
                  <img src={c.images?.[0]} alt="" className="w-28 h-16 object-cover rounded" />
                  <div>
                    <div className="font-bold text-alabaster">{c.make} {c.model}</div>
                    <div className="text-foreground/70 text-sm">{c.year} • €{c.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#111214] border border-steel rounded">"Amazing service and an incredible car." — J. Doe</div>
            <div className="p-6 bg-[#111214] border border-steel rounded">"Professional and fast — highly recommended." — A. Smith</div>
            <div className="p-6 bg-[#111214] border border-steel rounded">"Perfect experience from viewing to purchase." — M. Ruiz</div>
          </div>
        </div>
      </section>
    </div>
  );
}
