import dom from '../dom.js';

const deleteItemHandler = (id) => {
   //remove where id is equal to item.id
  
   // document.getElementById(id).remove();
    dom.itemsList.querySelector(`#${id}`).remove();
   
  

}

export default deleteItemHandler;