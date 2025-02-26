import data from '../data.js';
import dom from '../dom.js';

const clearAllHandler = () => {
    data.items = [];
    dom.itemsList.innerHTML = ''; 
    console.log('All items cleared');
}

export default clearAllHandler;

