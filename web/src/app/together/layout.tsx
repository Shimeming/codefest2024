import { Metadata } from "next"
export const metadata: Metadata = {
  title: '揪團活動'
}

const Layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
