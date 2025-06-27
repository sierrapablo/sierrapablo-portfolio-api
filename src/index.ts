import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import logRoutes from './routes/logRoutes';
import toolsRoutes from './routes/toolsRoutes';
import messagesRoutes from './routes/messagesRoutes';
import aboutRoutes from './routes/aboutRoutes';

dotenv.config();
const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

app.use('/logs', logRoutes);
app.use('/tools', toolsRoutes);
app.use('/messages', messagesRoutes);
app.use('/about', aboutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
