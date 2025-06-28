import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import logRoutes from './routes/logRoutes';
import toolsRoutes from './routes/toolsRoutes';
import messagesRoutes from './routes/messagesRoutes';
import aboutRoutes from './routes/aboutRoutes';
import projectsRoutes from './routes/projectsRoutes';
import postsRoutes from './routes/postsRoutes';

dotenv.config();
const app = express();

const allowedOrigins = [
  'https://sierrapablo.dev',
  'https://www.sierrapablo.dev',
];

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
app.use('/projects', projectsRoutes);
app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
