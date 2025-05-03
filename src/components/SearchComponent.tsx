'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

const defaultApis = [
  { name: 'AbuseIPDB', defaultWeight: 0 },
  { name: 'Virustotal', defaultWeight: 0 },
  { name: 'CriminalIP', defaultWeight: 0 },
  { name: 'BlocklistIP', defaultWeight: 0 },
  { name: 'URLvoidData', defaultWeight: 0 },
  { name: 'NeutrinoData', defaultWeight: 0 },
  { name: 'IsmaliciousData', defaultWeight: 0 },
  { name: 'DBIP', defaultWeight: 0 },
];

export default function SearchForm() {
  const [input, setInput] = useState('');
  const [apis, setApis] = useState(
    defaultApis.map((api) => ({
      ...api,
      selected: false,
      weight: api.defaultWeight,
    }))
  );

  const handleCheckboxChange = (index: number) => {
    const newApis = [...apis];
    newApis[index].selected = !newApis[index].selected;
    setApis(newApis);
  };

  const handleWeightChange = (index: number, value: number) => {
    const newApis = [...apis];
    newApis[index].weight = value;
    setApis(newApis);
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      alert('Please enter an IP address or domain name.');
      return;
    }

    const selectedApis = apis.filter((api) => api.selected);

    console.log({
      input,
      selectedApis,
    });

    // TODO: call backend or run fetch
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-red-100 p-4 rounded-full">
            <Search className="w-12 h-12 text-red-800" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">IP / Domain Threat Check</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter IP or domain..."
            className="w-full max-w-xl px-5 py-3 rounded-lg border-2 border-red-800 text-center text-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* API Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {apis.map((api, index) => (
            <div
              key={api.name}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-md shadow-sm"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={api.selected}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label className="text-sm text-gray-700 font-medium">{api.name}</label>
              </div>
              <input
                type="number"
                value={api.weight}
                step="0.1"
                min="0"
                max="1"
                onChange={(e) => handleWeightChange(index, parseFloat(e.target.value))}
                className="w-16 px-2 py-1 rounded-md border text-center text-sm shadow focus:outline-none focus:ring-2 focus:ring-red-700"
              />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="mt-4 bg-red-700 hover:bg-red-600 text-white font-semibold py-3 px-10 rounded-lg shadow transition duration-300"
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
