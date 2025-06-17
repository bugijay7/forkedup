import { sql } from '../config/db.js';

export const getAllTeas = async (req, res) => {
  try {
    const rows  = await sql`SELECT * FROM teas`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching teas:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTeaById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await sql`SELECT * FROM teas WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Tea not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching tea:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createTea = async (req, res) => {
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows  = await sql`
      INSERT INTO teas (name, description, price, quantity, image_url)
      VALUES (${name}, ${description}, ${price}, ${quantity}, ${imageUrl})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating tea:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTea = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows  = await sql`
      UPDATE teas
      SET name = ${name},
          description = ${description},
          price = ${price},
          quantity = ${quantity},
          image_url = ${imageUrl}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Tea not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating tea:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTea = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await sql`DELETE FROM teas WHERE id = ${id}`;
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Tea not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting tea:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTeaByName = async (req, res) => {
  const { name } = req.query;
  try {
    const rows  = await sql`
      SELECT * FROM teas WHERE name ILIKE ${'%' + name + '%'}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No teas found with that name' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching tea by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
