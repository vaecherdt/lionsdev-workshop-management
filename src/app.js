import express from 'express';
import connectDB from './config/db.js';
import vehicleRouter from './routes/vehicle-router.js';
import workshopRouter from './routes/workshop-router.js';
import maintenanceRouter from './routes/maintenance-router.js';


connectDB();

const app = express();
app.use(express.json());

app.use('/vehicles', vehicleRouter);
app.use('/workshops', workshopRouter);
app.use('/maintenances', maintenanceRouter);

app.listen(process.env.PORT, () => console.log('Server is running on port 3000'));