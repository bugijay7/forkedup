export function validateJuice(req, res, next) {
  const { name, description, price, quantity, image_url } = req.body;

  // Check all required fields
  if (!name || !description || !price || !quantity || !image_url) {
    return res.status(400).json({ error: "All fields are required: name, description, price, quantity, image_url" });
  }

  // Validate name
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: "Name must be a non-empty string" });
  }

  // Validate description
  if (typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({ error: "Description must be a non-empty string" });
  }

  // Validate price (numeric)
  const priceNum = parseFloat(price);
  if (isNaN(priceNum) || priceNum < 0) {
    return res.status(400).json({ error: "Price must be a valid positive number" });
  }

  // Validate quantity
  if (typeof quantity !== 'string' || quantity.trim() === '') {
    return res.status(400).json({ error: "Quantity must be a non-empty string" });
  }

  // Validate image_url
  try {
    new URL(image_url);
  } catch {
    return res.status(400).json({ error: "Image URL must be a valid URL" });
  }

  next();
}
