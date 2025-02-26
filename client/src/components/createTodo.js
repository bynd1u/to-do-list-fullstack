   import deleteItemHandler from "../handlers/deleteItemHandler.js";


 /**
 * Creates a DOM element representing a todo item.
 *
 * @param {Object} item - The todo item object.
 * @param {number} item.id - The unique identifier for the todo item.
 * @param {string} item.text - The text description of the todo item.
 * @returns {HTMLElement} The DOM element representing the todo item.
 */

const createItem = (item) => {
    const itemDom = document.createElement("div");
    itemDom.id = item.id;
    itemDom.classList.add("item");

    const itemText = document.createElement("span");
    itemText.classList.add("item-text");
    itemText.innerText = item.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
        deleteItemHandler(item.id);
    });

    itemDom.appendChild(itemText);
    itemDom.appendChild(deleteBtn);

    return itemDom;
};


export default createItem;