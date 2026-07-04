import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CarDetail(){
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(()=>{
    fetch(`/api/cars/${id}`).then(r=>r.json()).then(setCar).catch(()=>setCar(null));
  },[id]);

  if (!car) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <img src={car.images?.[0]} alt="" className="w-full h-96 object-cover rounded" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{car.make} {car.model} — {car.year}</h2>
          <div className="text-ochre text-2xl font-extrabold mt-2">€{car.price.toLocaleString()}</div>
          <p className="text-foreground/70 mt-4">{car.description}</p>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Specifications</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/70">
              <li>Mileage: {car.mileage.toLocaleString()} km</li>
              <li>Year: {car.year}</li>
              <li>Make: {car.make}</li>
              <li>Model: {car.model}</li>
            </ul>
          </div>

          <div className="mt-6 flex gap-3">
            <Link to="/book" state={{ carId: car.id }} className="bg-ochre text-obsidian px-4 py-2 rounded font-semibold">Book Test Drive</Link>
            <Link to="/financing" className="px-4 py-2 border border-steel rounded">Financing</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
