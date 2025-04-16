'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Upload, Search as SearchIcon, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activeTab: 'upload' | 'search' | undefined = pathname === '/' ? 'upload' : pathname === '/search' ? 'search' : undefined;

  const user = { name: 'John Doe' };

  useEffect(() => {
    router.prefetch('/search');
  }, [router]);

  const handleTabChange = (tab: 'upload' | 'search') => {
    router.push(tab === 'upload' ? '/' : '/search');
  };

  const getLinkClass = (href: string) =>
    pathname === href
      ? 'text-white font-semibold underline underline-offset-4'
      : 'text-white hover:text-gray-300';

  const iconVariants = {
    active: { scale: 1.2, y: -2 },
    inactive: { scale: 1, y: 0 },
  };

  return (
    <nav className="bg-red-800 shadow-md p-2 flex items-center justify-between relative">

      {/* Logo + Toggle Tab (Desktop) */}
      <div className="flex items-center space-x-10">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/favicon.png" alt="Logo" className="h-8 w-8 rounded-3xl" />
          <span className="text-lg font-bold text-white">wGPY</span>
        </Link>

        {/* Upload / Search Tab (Desktop) */}
        <div className="hidden md:flex bg-yellow-500 rounded-3xl overflow-hidden">
          {(['upload', 'search'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-1.5 flex items-center justify-center transition font-bold ${
                activeTab === tab ? 'bg-white text-black' : 'text-gray-700'
              } hover:scale-105 active:scale-95`}
            >
              <motion.div
                animate={activeTab === tab ? 'active' : 'inactive'}
                variants={iconVariants}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {tab === 'upload' ? (
                  <Upload size={16} strokeWidth={2.5} />
                ) : (
                  <SearchIcon size={16} strokeWidth={2.5} />
                )}
              </motion.div>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {['/report', '/about'].map((href) => (
          <Link key={href} href={href} className={getLinkClass(href)}>
            {href === '/report' ? 'Report IP' : 'About'}
          </Link>
        ))}

        {/* User Info */}
        <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm space-x-2 ml-auto">
          <Link href="/profile" className="text-sm font-medium text-gray-800">
            {user.name}
          </Link>
          <button
            onClick={() => alert('Logged out!')}
            className="text-red-600 hover:text-red-800 transition"
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>

      {/* Mobile: User Info + Hamburger */}
      <div className="md:hidden flex items-center">
        <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm space-x-2 mr-4">
          <Link href="/profile" className="text-sm font-medium text-gray-800">
            {user.name}
          </Link>
          <button
            onClick={() => alert('Logged out!')}
            className="text-red-600 hover:text-red-800 transition"
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-red-700 flex flex-col items-center space-y-4 py-4 shadow-md z-50">
          {[
            { href: '/', label: 'Upload' },
            { href: '/search', label: 'Search' },
            { href: '/report', label: 'Report IP' },
            { href: '/about', label: 'About' },
            { href: '/profile', label: 'Profile' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={getLinkClass(href)}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
