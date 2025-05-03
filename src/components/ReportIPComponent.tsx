'use client';

import React, { useState } from 'react';
import { useUser } from '@/contexts/UserContext';

const ReportIP = () => {
  const { user } = useUser();
  const [ipAddress, setIpAddress] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert('You need to be logged in to submit a report.');
      return;
    }

    console.log({
      ipAddress,
      category,
      comment,
      location,
      userName: user.name,
    });

    setSubmitted(true);
    setIpAddress('');
    setCategory('');
    setComment('');
    setLocation('');
  };

  const isFormValid = ipAddress && category && location;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white to-blue-100 px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Report IP Address
        </h2>

        {submitted && (
          <div className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded mb-4 shadow">
            ✅ Your report has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            id="ipAddress"
            label="IP Address"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="Enter IP Address"
            required
          />

          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Security">Security</option>
              <option value="Network">Network</option>
              <option value="Server">Server</option>
            </select>
          </div>

          <FormField
            id="comment"
            label="Comment/Description"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter description"
            isTextArea
            rows={3}
          />

          <FormField
            id="location"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            required
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-md font-semibold transition-colors ${
              isFormValid
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIP;

// 🧩 Reusable Field Component
const FormField = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  isTextArea = false,
  rows = 4,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  isTextArea?: boolean;
  rows?: number;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    ) : (
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
    )}
  </div>
);
