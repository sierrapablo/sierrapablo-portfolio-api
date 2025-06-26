import express from 'express';
import dotenv from 'dotenv';
import logRoutes from './routes/logRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/logs', logRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
