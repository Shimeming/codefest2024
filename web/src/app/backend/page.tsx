import { sql } from "@vercel/postgres";

const Page = async () => {
    const data = await sql<any>`
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
        <div>
            {latestInvoices.map((invoice) => (
                <div key={invoice.id}>
                    {invoice.id}
                </div>
            ))}
        </div>
    )
}

export default Page;