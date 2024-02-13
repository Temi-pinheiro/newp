'use client';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import { useLayoutEffect } from 'react';

const inter = Playfair_Display({ subsets: ['latin'] });

export default function RootLayout({ preview, children }) {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang='en'>
      <body className={[inter.className, 'bg-[#F8DCE1]'].join(' ')}>
        <main className='bg-[#F8DCE1]'>{children}</main>
      </body>
    </html>
  );
}
