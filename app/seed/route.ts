import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  try {
    const users = await sql`SELECT * FROM users;`;
    const customers = await sql`SELECT * FROM customers;`;
    const invoices = await sql`SELECT * FROM invoices;`;
    const revenue = await sql`SELECT * FROM revenue;`;

    return Response.json({
      users,
      customers,
      invoices,
      revenue
    });
  } catch (error) {
    console.error('Fetch error:', error);
    return Response.json({ error }, { status: 500 });
  }
}
