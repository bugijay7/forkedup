import { sql } from '../config/db.js';

// Get all sides
export const getAllSides = async (req, res) => {
  try {
    const  rows  = await sql`SELECT * FROM sides`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching sides:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a side by ID
export const getSideById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows  = await sql`SELECT * FROM sides WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Side not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching side:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new side
export const createSide = async (req, res) => {
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows  = await sql`
      INSERT INTO sides (name, description, price, quantity, image_url)
      VALUES (${name}, ${description}, ${price}, ${quantity}, ${imageUrl})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating side:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing side
export const updateSide = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows  = await sql`
      UPDATE sides
      SET name = ${name}, description = ${description}, price = ${price},
          quantity = ${quantity}, image_url = ${imageUrl}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Side not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating side:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a side
export const deleteSide = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await sql`DELETE FROM sides WHERE id = ${id}`;
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Side not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting side:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Search side by name
export const getSideByName = async (req, res) => {
  const { name } = req.params;
  try {
    const rows  = await sql`
      SELECT * FROM sides WHERE name ILIKE ${'%' + name + '%'}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Side not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching side by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
