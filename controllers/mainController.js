import { sql } from '../config/db.js';

export const getAllMainDishes = async (req, res) => {
  try {
    const rows  = await sql`SELECT * FROM main_dishes`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching main dishes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMainDishById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows  = await sql`SELECT * FROM main_dishes WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Main dish not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching main dish:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createMainDish = async (req, res) => {
  const { name, description, imageUrl, price, quantity } = req.body;
  try {
    const rows  = await sql`
      INSERT INTO main_dishes (name, description, image_url, price, quantity)
      VALUES (${name}, ${description}, ${imageUrl}, ${price}, ${quantity})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating main dish:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateMainDish = async (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl, price, quantity } = req.body;
  try {
    const rows  = await sql`
      UPDATE main_dishes
      SET name = ${name}, description = ${description}, image_url = ${imageUrl}, price = ${price}, quantity = ${quantity}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Main dish not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating main dish:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteMainDish = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await sql`DELETE FROM main_dishes WHERE id = ${id}`;
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Main dish not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting main dish:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMainDishByName = async (req, res) => {
  const { name } = req.params;
  try {
    const  rows  = await sql`SELECT * FROM main_dishes WHERE name ILIKE ${'%' + name + '%'}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Main dish not found' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching main dish by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
