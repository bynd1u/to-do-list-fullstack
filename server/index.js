import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';
import Todo from './models/todo.js'
import User from './models/user.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';


dotenv.config();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
      origin: [
          'http://127.0.0.1:5500'
      ],
      credentials: true
  })
);


//app.use(express.static(path.join(PATH, '..', 'client')));

connectToDB();

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  console.log('token: ' + token);
  if (!token) {
    return res.status(401).json({
      title: 'Unauthorized',
      message: 'You are not authorized to access this page'
    });
  }
  console.log('token has been verified')
  next();
}


app.post('/', async (req, res) => {
  let newTodo = new Todo({
    text: req.body.text,
    id: req.body.id
})
  
  let createdTodo = await newTodo.save();
  
  res.json(createdTodo);
})

app.get('/', verifyToken, async (req, res) => {
  let todos = await Todo.find();
  console.log(req.cookies);
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

app.post('/register', async (req, res) => {
  //responde with body
  
  const newUser = new User(req.body);

  await newUser.save();

  res.send(newUser);
});

app.post('/login', async (req, res) => {
  const {email, password} = req.body;

    res.cookie('token', 'token-test');
    console.log('cookie has been set');
    res.status(200).json({
      "message": "success"
    });
});
  



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });