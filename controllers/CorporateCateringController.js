import { sql } from '../config/db.js';

// Get all Cop Catering entries
export const getAllCopCatering = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM copcatering ORDER BY date`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching copcatering:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single entry by ID
export const getCopCateringById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await sql`SELECT * FROM copcatering WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching copcatering by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new entry
export const createCopCatering = async (req, res) => {
  const { date, venue, time, expected_persons } = req.body;
  try {
    const rows = await sql`
      INSERT INTO copcatering (date, venue, time, expected_persons)
      VALUES (${date}, ${venue}, ${time}, ${expected_persons})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating copcatering:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing entry
export const updateCopCatering = async (req, res) => {
  const { id } = req.params;
  const { date, venue, time, expected_persons } = req.body;
  try {
    const rows = await sql`
      UPDATE copcatering
      SET date = ${date}, venue = ${venue}, time = ${time}, expected_persons = ${expected_persons}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error updating copcatering:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an entry
export const deleteCopCatering = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await sql`DELETE FROM copcatering WHERE id = ${id} RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Entry not found' });
    }
    res.status(200).json({ message: 'Deleted successfully', deleted: rows[0] });
  } catch (error) {
    console.error('Error deleting copcatering:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
