
import data from "../data.js";
import dom from "../dom.js";
import createItem from "../components/createTodo.js";
import { getAllItemsReq } from "../api/todo.js";


const loadHandler = async () => {
    const data = await getAllItemsReq();
    data.forEach(item => {
        const itemDom = createItem(item);
        dom.itemsList.append(itemDom);
    })
}

export default loadHandler;