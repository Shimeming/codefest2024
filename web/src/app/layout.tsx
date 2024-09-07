import { type Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | CSIE Council',
    default: 'CSIE Council',
  },
  description: 'The database of NTU CSIE.',
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
