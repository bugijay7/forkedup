// controllers/OffsiteCateringController.js
import { sql } from '../config/db.js';

// Get all offsite catering records
export const getAllOffCatering = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM offsite_catering`;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve records', error });
  }
};

// Get one record by ID
export const getOffCateringById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await sql`SELECT * FROM offsite_catering WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve record', error });
  }
};

// Create a new record
export const createOffCatering = async (req, res) => {
  const { date, venue, time, expected_persons } = req.body;
  try {
    const result = await sql`
      INSERT INTO offsite_catering (date, venue, time, expected_persons)
      VALUES (${date}, ${venue}, ${time}, ${expected_persons})
      RETURNING *
    `;
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create record', error });
  }
};

// Update a record
export const updateOffCatering = async (req, res) => {
  const { id } = req.params;
  const { date, venue, time, expected_persons } = req.body;
  try {
    const result = await sql`
      UPDATE offsite_catering
      SET date = ${date}, venue = ${venue}, time = ${time}, expected_persons = ${expected_persons}
      WHERE id = ${id}
      RETURNING *
    `;
    if (result.length === 0) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json({ message: 'Record updated successfully', updated: result[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update record', error });
  }
};

// Delete a record
export const deleteOffCatering = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sql`DELETE FROM offsite_catering WHERE id = ${id} RETURNING *`;
    if (result.length === 0) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.json({ message: 'Record deleted successfully', deleted: result[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete record', error });
  }
};
