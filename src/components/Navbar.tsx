'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Upload, Search as SearchIcon, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useUser } from '@/contexts/UserContext';

const TABS = [
  { key: 'upload', href: '/', label: 'Upload', icon: Upload },
  { key: 'search', href: '/search', label: 'Search', icon: SearchIcon },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = TABS.find((tab) => tab.href === pathname)?.key;

  useEffect(() => {
    router.prefetch('/search');
  }, [router]);

  const handleTabChange = (tab: typeof TABS[number]['key']) => {
    const href = TABS.find((t) => t.key === tab)?.href;
    if (href) router.push(href);
  };

  const handleLogout = () => {
    setUser(null);
    router.push('/login');
  };

  const handleLogin = () => router.push('/login');

  const getLinkClass = (href: string) =>
    pathname === href
      ? 'text-white font-semibold underline underline-offset-4'
      : 'text-white hover:text-gray-300';

  const iconVariants = {
    active: { scale: 1.2, y: -2 },
    inactive: { scale: 1, y: 0 },
  };

  const isUserLoggedIn = !!user;

  const renderTabButton = (tab: typeof TABS[number]) => (
    <button
      key={tab.key}
      onClick={() => handleTabChange(tab.key)}
      className={`px-4 py-1 flex items-center justify-center transition-all font-semibold tracking-wide ${
        activeTab === tab.key
          ? 'bg-yellow-400 text-red-900 shadow-md'
          : 'text-white/80 hover:bg-white/20 hover:text-white'
      } hover:scale-105 active:scale-95`}
    >
      <motion.div
        animate={activeTab === tab.key ? 'active' : 'inactive'}
        variants={iconVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <tab.icon size={18} strokeWidth={2.5} />
      </motion.div>
      <span className="ml-2 capitalize font-normal">{tab.label}</span>
    </button>
  );

  const renderMobileMenuLinks = () => {
    const baseLinks = [
      { href: '/', label: 'Upload' },
      { href: '/search', label: 'Search' },
      { href: '/about', label: 'About' },
    ];

    const authLinks = isUserLoggedIn
      ? [
          { href: '/profile', label: 'Profile' },
          { href: '/report', label: 'Report IP' },
        ]
      : [];

    return [...baseLinks, ...authLinks].map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`${getLinkClass(href)} text-lg transition-all hover:scale-105`}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    ));
  };

  return (
    <nav className="bg-gradient-to-r from-red-900 via-red-500 to-red-900 shadow-xl p-2 flex items-center justify-between relative rounded-b-2xl backdrop-blur-lg sticky top-0 z-50">
      {/* Logo & Tabs */}
      <div className="flex items-center space-x-10">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/favicon.png" alt="Logo" className="h-9 w-9 rounded-full shadow-md" />
          <span className="text-xl font-extrabold text-white tracking-wide">wGPY</span>
        </Link>

        <div className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full overflow-hidden shadow-inner border border-white/20">
          {TABS.map(renderTabButton)}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/about" className={`${getLinkClass('/about')} transition duration-300`}>
          About
        </Link>

        {isUserLoggedIn ? (
          <>
            <Link href="/report" className={getLinkClass('/report')}>
              Report IP
            </Link>
            <div className="flex items-center bg-white text-gray-800 rounded-full px-4 py-1.5 shadow-md space-x-3">
              <Link href="/profile" className="text-sm font-medium hover:underline">
                {user?.name}
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 transition"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-gray-100 text-red-900 px-5 py-1 rounded-full font-semibold hover:bg-yellow-400 transition shadow-lg"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        {isUserLoggedIn ? (
          <div className="flex items-center bg-white rounded-full px-4 py-1.5 shadow-sm space-x-2 mr-3">
            <Link href="/profile" className="text-sm font-medium text-gray-800">
              {user?.name}
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 transition"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="text-white font-semibold bg-yellow-400 px-4 py-2 rounded-full mr-3 shadow-lg hover:bg-yellow-300 transition"
          >
            Login
          </button>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-yellow-300 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-2 right-2 mx-auto bg-purple-950/90 backdrop-blur-md rounded-xl shadow-2xl flex flex-col items-center space-y-4 py-5 px-4 z-50 transition-all">
          {renderMobileMenuLinks()}
        </div>
      )}
    </nav>
  );
}
