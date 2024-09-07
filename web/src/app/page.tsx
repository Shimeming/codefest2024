import NavCards from '@/components/nav-cards';
import { sql } from "@vercel/postgres";

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
  const data = await sql<LatestInvoiceRaw>`
    SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    ORDER BY invoices.date DESC
    LIMIT 5`;

  const latestInvoices = data.rows.map((invoice) => ({
    ...invoice,
    amount: invoice.amount,
  }));

  return (
    <>
      <main className="pt-32">
        <NavCards />
        <div>
          {latestInvoices.map((invoice) => (
            <div key={invoice.id}>
              {invoice.id}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
