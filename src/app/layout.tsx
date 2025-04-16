// /app/layout.tsx
import './globals.css';
import React from 'react';
import Layout from '@/components/LayoutComponent'; 
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Threat-Intelligence-Collection',
  description: 'ระบบ Threat Intelligence Collection เพื่อรวบรวมข้อมูลภัยคุกคามทางไซเบอร์',
  openGraph: {
    title: 'Threat-Intelligence-Collection',
    description: 'ติดตามข้อมูลภัยคุกคามทางไซเบอร์ล่าสุดกับ Threat-Intelligence-Collection',
    url: 'https://your-site.com', // รอ URL ของเว็บไซต์จริง
    siteName: 'Threat-Intelligence-Collection',
    images: [
      {
        url: '/favicon.png', 
        width: 1200,
        height: 630,
        alt: 'Threat Intelligence Collection',
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  keywords: ['Threat Intelligence', 'Cybersecurity', 'CPE 65 Group 9', 'ภัยคุกคามไซเบอร์'],
  authors: [{ name: 'CPE 65 - Group 9' }],
  creator: 'CPE 65 - Group 9',
  publisher: 'CPE 65 - Group 9',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body >
        <Navbar />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
