import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDB from './config/db.js';
import Todo from './models/todo.js'
import bodyParser from 'body-parser';


dotenv.config();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(cors());

//app.use(express.static(path.join(PATH, '..', 'client')));

connectToDB();

app.post('/', async (req, res) => {
  let newTodo = new Todo({
    text: req.body.text,
    id: req.body.id
})
  
  await newTodo.save();
  
  res.send(`item with text "${req.body.text}" added to database`);
})

app.delete('/', async (req, res) => {
  await Todo.deleteOne({_id: req.body._id});

  res.send(`item was deleted from the database`);
});
app.get('/', (req, res) => {
  res.send("Hi weirdo");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });