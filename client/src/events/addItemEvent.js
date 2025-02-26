import addItemHandler from '../handlers/addItemHandler.js';
import dom from '../dom.js';

const addItemEvent = () => 
{
    dom.submitBtn.addEventListener('click', addItemHandler)

    console.log("Add Item Event Added");

    dom.input.addEventListener('keypress', (e) => {
        if(e.key === 'Enter')
        {
            addItemHandler();
        }   
    });
}

export default addItemEvent;


