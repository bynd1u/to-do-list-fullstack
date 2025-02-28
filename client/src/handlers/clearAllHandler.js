import data from '../data.js';
import dom from '../dom.js';
import { deleteAllItemsReq } from '../api/todo.js';

const clearAllHandler = async () => {
    await deleteAllItemsReq();
    data.items = [];
    dom.itemsList.innerHTML = ''; 
    console.log('All items cleared');
}

export default clearAllHandler;

