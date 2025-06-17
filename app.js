import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sql } from './config/db.js';

import accompanimentRoutes from './routes/accompanimentRoutes.js';
import coffeeRoutes from './routes/coffeeRoutes.js';
import sidesRoutes from './routes/sidesRoutes.js';
import snacksRoutes from './routes/snacksRoutes.js';
import mainsRoutes from './routes/mainsRoutes.js';
import teasRoutes from './routes/teasRoutes.js';
import juicesRoutes from './routes/juicesRoutes.js';
import orderRoutes from './routes/ordersRoutes.js';
import corporateRoutes from './routes/CorporateCateringRoute.js';
import offsiteRoutes from './routes/OffsiteCateringRoute.js';
import reservationRoutes from './routes/reservationRoutes.js';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Adjust this to your frontend URL
  credentials: true
}));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/accompaniments', accompanimentRoutes );
app.use('/api/coffees', coffeeRoutes );
app.use('/api/sides', sidesRoutes );
app.use('/api/snacks', snacksRoutes );
app.use('/api/mains', mainsRoutes );
app.use('/api/teas', teasRoutes );
app.use('/api/juices', juicesRoutes );
app.use('/api/order', orderRoutes );
app.use('/api/copcatering', corporateRoutes );
app.use('/api/offcatering', offsiteRoutes );
app.use('/api/reservations', reservationRoutes );

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
