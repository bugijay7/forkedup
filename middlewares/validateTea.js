export function validateTea(req, res, next) {
  const { name, description, price, quantity, image_url } = req.body;

  // Name validation
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: "Name is required and must be a non-empty string." });
  }

  // Description validation
  if (!description || typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({ error: "Description is required and must be a non-empty string." });
  }

  // Price validation
  const parsedPrice = parseFloat(price);
  if (isNaN(parsedPrice) || parsedPrice < 0) {
    return res.status(400).json({ error: "Price must be a valid positive number." });
  }

  // Quantity validation
  if (!quantity || typeof quantity !== 'string' || quantity.trim() === '') {
    return res.status(400).json({ error: "Quantity is required and must be a non-empty string." });
  }

  // Image URL validation (optional)
  if (image_url) {
    if (typeof image_url !== 'string' || image_url.trim() === '') {
      return res.status(400).json({ error: "Image URL must be a valid string." });
    }
    try {
      new URL(image_url);
    } catch {
      return res.status(400).json({ error: "Image URL must be a valid URL." });
    }
  }

  next();
}
