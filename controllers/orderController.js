import { sql } from '../config/db.js';

// GET all orders
export const getAllOrders = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM orders`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET single order by ID
export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await sql`SELECT * FROM orders WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST create new order
export const createOrder = async (req, res) => {
  const { customer_name, customer_email, items, total_price } = req.body;

  try {
    const rows = await sql`
      INSERT INTO orders (customer_name, customer_email, items, total_price)
      VALUES (${customer_name}, ${customer_email}, ${items}, ${total_price})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PUT update order
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { customer_name, customer_email, items, total_price } = req.body;

  try {
    const rows = await sql`
      UPDATE orders
      SET customer_name = ${customer_name},
          customer_email = ${customer_email},
          items = ${items},
          total_price = ${total_price}
      WHERE id = ${id}
      RETURNING *`;

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// DELETE order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const { rowCount } = await sql`DELETE FROM orders WHERE id = ${id}`;
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// OPTIONAL: GET orders by customer email
export const getOrdersByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const rows = await sql`SELECT * FROM orders WHERE customer_email = ${email}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No orders found for this email' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching orders by email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
