import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToDB from './config/db.js';
import Todo from './models/todo.js'
import bodyParser from 'body-parser';
import { create } from 'domain';


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
  
  let createdTodo = await newTodo.save();
  
  res.json(createdTodo);
})

app.get('/', async (req, res) => {
  let todos = await Todo.find();
  res.json(todos);
}
)

app.delete('/', async (req, res) => {
  await Todo.deleteOne({_id: req.body._id});
  console.log("item was deleted from the database");
  res.send(`item was deleted from the database`);
});

app.delete('/all', async (req, res) => {
  await Todo.deleteMany();
  console.log("all items were deleted from the database");
  res.send(`all items were deleted from the database`);
})

app.get('/', (req, res) => {
  res.send("Hi weirdo");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });