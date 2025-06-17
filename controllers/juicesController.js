import { sql } from '../config/db.js';

// Get all juice/soda items
export const getAllJuices = async (req, res) => {
  try {
    const rows  = await sql`SELECT * FROM juicessodas`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching juicessodas:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get one by ID
export const getJuiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows  = await sql`SELECT * FROM juicessodas WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Juice/Soda not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching juicessodas by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create new item
export const createJuice = async (req, res) => {
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows  = await sql`
      INSERT INTO juicessodas (name, description, price, quantity, image_url)
      VALUES (${name}, ${description}, ${price}, ${quantity}, ${imageUrl})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating juicessodas:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update item by ID
export const updateJuice = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const  rows = await sql`
      UPDATE juicessodas
      SET name = ${name}, description = ${description}, price = ${price}, quantity = ${quantity}, image_url = ${imageUrl}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Juice/Soda not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating juicessodas:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete item
export const deleteJuice = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await sql`DELETE FROM juicessodas WHERE id = ${id}`;
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Juice/Soda not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting juicessodas:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Search by name
export const getJuicesByName = async (req, res) => {
  const { name } = req.query;
  try {
    const  rows  = await sql`SELECT * FROM juicessodas WHERE name ILIKE ${'%' + name + '%'}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No juicessodas found with that name' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching juicessodas by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
