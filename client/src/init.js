import loadEvent from './events/loadEvent.js';
import clearAllEvent from './events/clearAllEvent.js';
import addItemEvent from './events/addItemEvent.js';
import checkAuth from './auth/checkAuth.js';

// Check if user is authenticated
checkAuth();

//Initialize app
loadEvent();
clearAllEvent();
addItemEvent();