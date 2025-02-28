import data from '../data.js';
import dom from '../dom.js';
import createItem from '../components/createTodo.js';
import {addItemReq} from '../api/todo.js';

const addItemHandler = async () => {
    const text = dom.input.value;
    if (text.trim() !== '') { // Check if the input text is not empty
        const newItem = await addItemReq(text);
        console.log(newItem);
        console.log(`newItem.text: ${newItem.text}`);
        console.log(`newItem.id: ${newItem._id}`);
        data.items.push(newItem);
        const itemDom = createItem(newItem);
        dom.itemsList.appendChild(itemDom);
        dom.input.value = '';
        dom.error.textContent = '';
    } else {
        dom.error.textContent = 'Please enter a todo item.';
    }
};
export default addItemHandler;