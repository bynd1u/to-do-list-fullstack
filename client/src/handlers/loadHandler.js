
import data from "../data.js";
import dom from "../dom.js";
import createItem from "../components/createTodo.js";
import { getAllItemsReq } from "../api/todo.js";


const loadHandler = async () => {

    const res = await getAllItemsReq();
    
    // status === 200
    // if status 401 // redirect to login page

    // if status 403 // show error message


    res.forEach(item => {
        const itemDom = createItem(item);
        dom.itemsList.append(itemDom);
    })
}

export default loadHandler;