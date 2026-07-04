import React, { useState } from 'react';

function calcMonthly(price, down, rate, months){
  const principal = price - down;
  const monthlyRate = rate/100/12;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate) / (1 - Math.pow(1+monthlyRate, -months));
}

export default function Financing(){
  const [price, setPrice] = useState(30000);
  const [down, setDown] = useState(3000);
  const [rate, setRate] = useState(5.5);
  const [term, setTerm] = useState(60);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState(null);

  const compute = () => {
    const monthly = calcMonthly(Number(price), Number(down), Number(rate), Number(term));
    setResult(monthly.toFixed(2));
  };

  const submit = async (e) => {
    e.preventDefault();
    const payload = { name, email, budget, price, down, rate, term };
    await fetch('/api/finance', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(payload)});
    alert('Pre-qualification request sent');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Financing</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#111214] p-6 rounded border border-steel">
          <h4 className="font-semibold mb-2">Loan Calculator</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm">Car price</label>
              <input type="number" value={price} onChange={e=>setPrice(e.target.value)} className="w-full p-2 bg-[#0b0b0c] border border-steel rounded" />
            </div>
            <div>
              <label className="block text-sm">Down payment</label>
              <input type="number" value={down} onChange={e=>setDown(e.target.value)} className="w-full p-2 bg-[#0b0b0c] border border-steel rounded" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm">Interest rate (%)</label>
                <input type="number" step="0.1" value={rate} onChange={e=>setRate(e.target.value)} className="w-full p-2 bg-[#0b0b0c] border border-steel rounded" />
              </div>
              <div>
                <label className="block text-sm">Term (months)</label>
                <input type="number" value={term} onChange={e=>setTerm(e.target.value)} className="w-full p-2 bg-[#0b0b0c] border border-steel rounded" />
              </div>
            </div>
            <div className="mt-2">
              <button onClick={compute} type="button" className="bg-ochre px-4 py-2 rounded">Calculate</button>
              {result && <div className="mt-2">Estimated monthly payment: <strong>€{result}</strong></div>}
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-[#111214] p-6 rounded border border-steel">
          <h4 className="font-semibold mb-2">Pre-qualification</h4>
          <input required placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} className="w-full p-2 mb-2 bg-[#0b0b0c] border border-steel rounded" />
          <input required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 mb-2 bg-[#0b0b0c] border border-steel rounded" />
          <input placeholder="Budget" value={budget} onChange={e=>setBudget(e.target.value)} className="w-full p-2 mb-2 bg-[#0b0b0c] border border-steel rounded" />
          <button className="bg-ochre px-4 py-2 rounded">Request Pre-Qualification</button>
        </form>
      </div>
    </div>
  );
}
