import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Inventory() {
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const API_BASE = import.meta.env.DEV ? '/api' : 'http://localhost:4000';
    fetch(`${API_BASE}/cars`).then(r=>r.json()).then(setCars).catch(()=>setCars([]));
  }, []);

  const filtered = cars.filter(c => {
    if (brand && c.make.toLowerCase() !== brand.toLowerCase()) return false;
    if (year && String(c.year) !== String(year)) return false;
    if (maxPrice && Number(c.price) > Number(maxPrice)) return false;
    return true;
  });

  const brands = Array.from(new Set(cars.map(c=>c.make)));
  const years = Array.from(new Set(cars.map(c=>c.year))).sort((a,b)=>b-a);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Inventory</h2>
      <div className="mb-6 flex gap-4 flex-wrap">
        <select value={brand} onChange={e=>setBrand(e.target.value)} className="bg-[#111214] border border-steel p-2 rounded">
          <option value="">All brands</option>
          {brands.map(b=> <option key={b} value={b}>{b}</option>)}
        </select>
        <select value={year} onChange={e=>setYear(e.target.value)} className="bg-[#111214] border border-steel p-2 rounded">
          <option value="">Any year</option>
          {years.map(y=> <option key={y} value={y}>{y}</option>)}
        </select>
        <input type="number" placeholder="Max price" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} className="bg-[#111214] border border-steel p-2 rounded" />
        <Link to="/" className="ml-auto text-foreground/70">Home</Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(c => (
          <div key={c.id} className="bg-[#111214] border border-steel rounded overflow-hidden">
            <img src={c.images?.[0]} alt="" className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-alabaster">{c.make} {c.model}</div>
                  <div className="text-foreground/70 text-sm">{c.year} • {c.mileage.toLocaleString()} km</div>
                </div>
                <div className="text-ochre font-bold">€{c.price.toLocaleString()}</div>
              </div>
              <p className="text-foreground/70 mt-2 text-sm">{c.description}</p>
              <div className="mt-4 flex gap-2">
                <Link to={`/car/${c.id}`} className="px-3 py-2 bg-ochre text-obsidian rounded font-semibold">Details</Link>
                <Link to="/book" state={{ carId: c.id }} className="px-3 py-2 border border-steel text-alabaster rounded">Book Test Drive</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
