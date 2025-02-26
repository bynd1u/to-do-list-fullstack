import clearAllHandler from '../handlers/clearAllHandler.js';
import dom from '../dom.js';

const clearAllEvent = () => {
    dom.clearAllBtn.addEventListener('click', clearAllHandler);
    console.log("Clear All Event Added");
}

export default clearAllEvent;