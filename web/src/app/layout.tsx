import { type Metadata } from 'next';
import './globals.css';

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
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
