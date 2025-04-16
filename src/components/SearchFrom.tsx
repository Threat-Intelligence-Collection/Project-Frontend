'use client';

import { Search } from 'lucide-react';

const apis = [
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
  return (
    <div className="flex flex-col items-center space-y-6 bg-gray-100 min-h-screen py-12">
      <Search className="w-16 h-16 text-red-800 mb-6 " />

      <input
        type="text"
        placeholder="ip or domain"
        className="w-[600px] px-6 py-1 rounded-lg border-4 border-red-800 text-center text-lg text-gray-800 placeholder:text-gray-400 outline-none"
      />

      <div className="flex flex-wrap justify-center gap-4 max-w-2xl ">
        {apis.map((api) => (
          <div key={api.name} className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked={api.defaultWeight > 0}/>
            <label className="text-sm font-medium text-black">{api.name}</label>
            {api.defaultWeight > 0 || (
              <div className="w-14 h-10" /> 
            )}
            <input
              type="number"
              defaultValue={api.defaultWeight}
              step="0.1"
              min="0"
              max="1"
              className="w-16 px-2 py-1 rounded-md border text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
            />
          </div>
        ))}
      </div>

      <button className="mt-4 bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-md transition">
        SEARCH
      </button>
    </div>
  );
}
