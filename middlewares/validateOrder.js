export function validateOrder(req, res, next) {
  const { customer_name, items, total_price } = req.body;

  if (typeof customer_name !== 'string' || customer_name.trim() === '') {
    return res.status(400).json({ error: 'Invalid or missing customer name' });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Order must contain at least one item' });
  }

  if (typeof total_price !== 'number' || total_price <= 0) {
    return res.status(400).json({ error: 'Invalid total price' });
  }

  next(); // All validations passed
}
