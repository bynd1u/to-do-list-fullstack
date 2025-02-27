import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    id: {
        type: String,
        require: true
    }
    // userId: {
    //     type: String,
    //     ref: 'User',
    //     required: true
    // }
}, {
    timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;