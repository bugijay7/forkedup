import { sql } from '../config/db.js';

// Get all reservations
export const getAllReservations = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM reservations`;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve reservations', error });
  }
};

// Get a single reservation by ID
export const getReservationById = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await sql`SELECT * FROM reservations WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve reservation', error });
  }
};

// Create a new reservation
export const createReservation = async (req, res) => {
  const { tables, date, time, persons_per_table } = req.body;
  try {
    const result = await sql`
      INSERT INTO reservations (tables, date, time, persons_per_table)
      VALUES (${tables}, ${date}, ${time}, ${persons_per_table})
      RETURNING *
    `;
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create reservation', error });
  }
};

// Update an existing reservation
export const updateReservation = async (req, res) => {
  const { id } = req.params;
  const { tables, date, time, persons_per_table } = req.body;
  try {
    const result = await sql`
      UPDATE reservations
      SET tables = ${tables}, date = ${date}, time = ${time}, persons_per_table = ${persons_per_table}
      WHERE id = ${id}
      RETURNING *
    `;
    if (result.length === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json({ message: 'Reservation updated successfully', updated: result[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update reservation', error });
  }
};

// Delete a reservation
export const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sql`DELETE FROM reservations WHERE id = ${id} RETURNING *`;
    if (result.length === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json({ message: 'Reservation deleted successfully', deleted: result[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete reservation', error });
  }
};
