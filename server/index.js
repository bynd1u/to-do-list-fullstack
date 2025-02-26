import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const app = express();

//app.use(express.static(path.join(PATH, '..', 'client')));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });