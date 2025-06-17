import { sql } from '../config/db.js';

// GET all coffees
export const getAllCoffees = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM coffees`;  // no destructuring
    console.log('Rows:', rows);  // Should print an array now
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching coffees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// GET coffee by ID
export const getCoffeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const  rows  = await sql`SELECT * FROM coffees WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Coffee not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching coffee by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST create coffee
export const createCoffee = async (req, res) => {
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const rows  = await sql`
      INSERT INTO coffees (name, description, price, quantity, image_url)
      VALUES (${name}, ${description}, ${price}, ${quantity}, ${imageUrl})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating coffee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// PUT update coffee
export const updateCoffee = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity, imageUrl } = req.body;
  try {
    const  rows = await sql`
      UPDATE coffees
      SET name = ${name},
          description = ${description},
          price = ${price},
          quantity = ${quantity},
          image_url = ${imageUrl}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Coffee not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating coffee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// DELETE coffee by ID
export const deleteCoffee = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await sql`DELETE FROM coffees WHERE id = ${id}`;
    if (rowCount === 0) {
      return res.status(404).json({ error: 'Coffee not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting coffee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET coffee by name (search)
export const getCoffeeByName = async (req, res) => {
  const { name } = req.query;
  try {
    const  rows  = await sql`SELECT * FROM coffees WHERE name ILIKE ${'%' + name + '%'}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No coffees found with that name' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error searching coffee by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
