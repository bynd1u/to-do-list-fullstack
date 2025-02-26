import data from '../data.js';
import dom from '../dom.js';
import createItem from '../components/createTodo.js';

const addItemHandler = () => {
    const text = dom.input.value;
    if (text.trim() !== '') { // Check if the input text is not empty
        const newItem = {
            id: "item" + data.items.length + 1,
            text: text,
        };
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