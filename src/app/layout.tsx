import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-row flex-1 grow min-h-screen'>

          <div className='flex-none flex flex-col'>
            <Sidebar />
          </div>

          <div className='flex-1 flex flex-col gap-0'>
            <main className='flex-1 grow flex'>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}