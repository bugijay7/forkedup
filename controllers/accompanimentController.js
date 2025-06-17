import { sql } from '../config/db.js';

// Get all accompaniments
export const getAllAccompaniments = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM accompaniments`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching accompaniments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get accompaniment by ID
export const getAccompanimentById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await sql`SELECT * FROM accompaniments WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Accompaniment not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching accompaniment by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get accompaniment by name (search)
export const getAccompanimentByName = async (req, res) => {
  const { name } = req.params;
  try {
    const rows = await sql`
      SELECT * FROM accompaniments 
      WHERE name ILIKE ${'%' + name + '%'}
    `;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Accompaniment not found' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching accompaniment by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new accompaniment
export const createAccompaniment = async (req, res) => {
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows = await sql`
      INSERT INTO accompaniments (name, description, price, quantity, image_url)
      VALUES (${name}, ${description}, ${price}, ${quantity}, ${imageUrl})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating accompaniment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing accompaniment
export const updateAccompaniment = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows = await sql`
      UPDATE accompaniments
      SET name = ${name}, description = ${description}, price = ${price},
          quantity = ${quantity}, image_url = ${imageUrl}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Accompaniment not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating accompaniment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an accompaniment
export const deleteAccompaniment = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sql`DELETE FROM accompaniments WHERE id = ${id}`;
    // For DELETE, check if any rows affected (depends on library, adjust if needed)
    // If your sql returns an object with rowCount, do:
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Accompaniment not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting accompaniment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
