import { sql } from "../config/db.js";

export const getAllSnacks = async (req, res) => {
  try {
    const rows = await sql`SELECT * FROM snacks`;
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching snacks:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const getSnackById = async (req, res) => {
  const { id } = req.params;
  try {
    const  rows  = await sql`SELECT * FROM snacks WHERE id = ${id}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: "Snack not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error fetching snack:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export const createSnack = async (req, res) => {
  const { name, description, imageUrl } = req.body;
  try {
    const  rows  = await sql`
      INSERT INTO snacks (name, description, image_url)
      VALUES (${name}, ${description}, ${imageUrl})
      RETURNING *`;
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error creating snack:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}


export const updateSnack = async (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl } = req.body;
  try {
    const  rows  = await sql`
      UPDATE snacks
      SET name = ${name}, description = ${description}, image_url = ${imageUrl}
      WHERE id = ${id}
      RETURNING *`;
    if (rows.length === 0) {
      return res.status(404).json({ error: "Snack not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error("Error updating snack:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
export const deleteSnack = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await sql`DELETE FROM snacks WHERE id = ${id}`;
    if (rowCount === 0) {
      return res.status(404).json({ error: "Snack not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting snack:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}


export const getSnacksByName = async (req, res) => {
  const { name } = req.query;
  try {
    const rows  = await sql`SELECT * FROM snacks WHERE name ILIKE ${`%${name}%`}`;
    if (rows.length === 0) {
      return res.status(404).json({ error: "No snacks found with that name" });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching snacks by name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}