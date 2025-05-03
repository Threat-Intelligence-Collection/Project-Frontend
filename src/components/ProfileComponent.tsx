'use client';

import React from 'react';
import {
  UserIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

type ProfileProps = {
  username: string;
  email: string;
  history: string[];
};

const InfoField = ({
  label,
  icon: Icon,
  value,
}: {
  label: string;
  icon: React.ElementType;
  value: string;
}) => (
  <div className="mb-6">
    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1">
      <Icon className="h-5 w-5 text-red-500" />
      {label}
    </label>
    <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
      {value}
    </div>
  </div>
);

export default function ProfileComponent({
  username,
  email,
  history,
}: ProfileProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-red-800 text-center mb-8">
          My Profile
        </h1>

        <InfoField label="Username" icon={UserIcon} value={username} />
        <InfoField label="Email" icon={EnvelopeIcon} value={email} />

        {/* History Section */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-red-800">
            History Search
          </h2>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            Updated every 7 days
          </span>
        </div>

        <div className="border border-gray-300 rounded-lg bg-white h-72 overflow-y-auto px-4 py-3 space-y-2 shadow-sm">
          {history.length === 0 ? (
            <p className="text-gray-400 italic text-center">
              No history available.
            </p>
          ) : (
            history.map((item, index) => (
              <a
                key={index}
                href={`/search?query=${encodeURIComponent(item)}`}
                className="block text-red-600 hover:underline text-sm hover:text-red-700"
              >
                🔍 {item}
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
