import dom from '../dom.js';
import { deleteItemReq } from '../api/todo.js';

const deleteItemHandler = async (id) => {
   //remove where id is equal to item.id
  
   // document.getElementById(id).remove();

    await deleteItemReq(id);
    console.log("element id to remove: " + id);
    document.getElementById(id).remove();
   
  

}

export default deleteItemHandler;