import { Metadata } from "next"
export const metadata: Metadata = {
  title: '聊天室'
}

const Layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
