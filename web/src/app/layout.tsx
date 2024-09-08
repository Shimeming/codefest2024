import { type Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/nav-bar';
import TopBar from '@/components/top-bar'; // This will be the new client-side component for the top bar

export const metadata: Metadata = {
  title: {
    template: '%s | Taipei Townder',
    default: 'Taipei Townder',
  },
  description: '台北通裡的文藝交友軟體',
};

const RootLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-primary-50 w-full">
        <TopBar /> {/* The new client component */}
        <div className="w-full flex-none md:w-64">
          <NavBar />
        </div>
        <div className="mt-5 px-4">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
