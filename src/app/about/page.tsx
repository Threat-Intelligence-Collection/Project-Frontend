import React from 'react';
import { Info } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-2xl w-full space-y-6">
        <Header />
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">About Us</h1>
        <Content />
      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex justify-center">
    <div className="bg-red-100 p-4 rounded-full">
      <Info className="w-10 h-10 text-red-600" />
    </div>
  </div>
);

const Content = () => (
  <div className="text-gray-600 text-lg leading-relaxed space-y-4 text-left">
    <p>
      Our project is dedicated to gathering and organizing cybersecurity threat intelligence from various sources into a centralized platform.
    </p>
    <p>
      By compiling this valuable information, we aim to simplify the process of threat detection, analysis, and response for security professionals and enthusiasts.
    </p>
    <p>
      Our goal is to make threat intelligence more accessible and easier to search, helping users stay informed and better prepared against emerging cyber threats.
    </p>
  </div>
);

export default AboutPage;
