// /components/Layout.tsx
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full flex-grow">
        {children}
      </div>
      <footer className="text-center mt-auto p-2 bg-red-800">
        <p className="text-white">
          © {new Date().getFullYear()} Threat-Intelligence-Collection. All rights reserved. by CPE 65 - GROUP 9
        </p>
      </footer>
    </div>
  );
};

export default Layout;
