import NavCard from '@/components/nav-card';

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};


const Page = async () => {

  return (
    <>
      <main className="flex flex-col items-center">
        <NavCard />
      </main>
    </>
  );
};

export default Page;
