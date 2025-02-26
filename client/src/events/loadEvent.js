import data from '../data.js';
import dom from '../dom.js';
import loadHandler from '../handlers/loadHandler.js';

const loadEvent = () => {
    console.log('Load Event Added');
    console.log('Data:', data.items);
    console.log('DOM:', dom);

  document.addEventListener('DOMContentLoaded', loadHandler);
}

export default loadEvent;