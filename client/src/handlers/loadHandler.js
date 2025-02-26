
import data from "../data.js";
import dom from "../dom.js";
import createItem from "../components/createTodo.js";



const loadHandler = () => {
    data.items.forEach(item => {
        const itemDom = createItem(item);
        dom.itemsList.append(itemDom);

    })
    
}

export default loadHandler;