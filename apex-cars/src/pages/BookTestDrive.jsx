import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function BookTestDrive(){
  const [cars, setCars] = useState([]);
  const [carId, setCarId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [message, setMessage] = useState('');

  const location = useLocation();
  useEffect(()=>{
    if (location.state?.carId) setCarId(location.state.carId);
    fetch('/api/cars').then(r=>r.json()).then(setCars).catch(()=>setCars([]));
  },[]);

  const submit = async (e) => {
    e.preventDefault();
    const payload = { carId, name, email, phone, date, time, deposit };
    const res = await fetch('/api/bookings', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(payload)});
    const data = await res.json();
    if (data.success) setMessage('Booking confirmed — ID ' + data.id);
    else setMessage('Could not book — try again');
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Book a Test Drive</h2>
      <form onSubmit={submit} className="space-y-4 bg-[#0b0b0c] p-6 rounded border border-steel">
        <label className="block text-sm">Select car</label>
        <select value={carId||''} onChange={e=>setCarId(Number(e.target.value))} className="w-full p-2 bg-[#111214] border border-steel rounded">
          <option value="">Choose a car</option>
          {cars.map(c=> <option key={c.id} value={c.id}>{c.make} {c.model} ({c.year})</option>)}
        </select>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} className="p-2 bg-[#111214] border border-steel rounded" />
          <input required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="p-2 bg-[#111214] border border-steel rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} className="p-2 bg-[#111214] border border-steel rounded" />
          <div className="flex gap-2">
            <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="p-2 bg-[#111214] border border-steel rounded" />
            <input type="time" value={time} onChange={e=>setTime(e.target.value)} className="p-2 bg-[#111214] border border-steel rounded" />
          </div>
        </div>
        <div>
          <label className="block text-sm">Deposit (EUR)</label>
          <input type="number" value={deposit} onChange={e=>setDeposit(Number(e.target.value))} className="p-2 bg-[#111214] border border-steel rounded" />
        </div>

        <button className="bg-ochre px-4 py-2 rounded font-semibold">Confirm Booking</button>
        {message && <div className="mt-2 text-foreground/70">{message}</div>}
      </form>
    </div>
  );
}
