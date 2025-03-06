// Check if user is authenticated
const checkAuth = () => {
    // Simple check for cookie existence
    // A more robust solution would validate the token
    const cookies = document.cookie.split(';');
    const tokenExists = cookies.some((cookie) => cookie.includes('token'));
    
    if (!tokenExists) {
      //window.location.href = '/client/src/auth/login.html';
    } else {
      console.log('token exists');
    }
  };
  
  export default checkAuth;