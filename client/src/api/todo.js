
const API_URL = 'http://localhost:5004';

const addItemReq = async (text) => {
    try {
        const res = await fetch("http://localhost:5004/", {
            method: "POST",
            body: JSON.stringify({
                text: text,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        },
    );
    const data = await res.json();
    console.log(`data: ${JSON.stringify(data)}`);
    console.log(`data.text: ${data.text}`);
    console.log(`data.id: ${data._id}`);
    return data;

}
    catch {
        
    }
}

const getAllItemsReq = async () => {
    try {
        const res = await fetch("http://localhost:5004/", {
            credentials: "include"
        });

        if (res.status === 401) {
            window.location.href = "http://127.0.0.1:5500/client/login.html";
        }
        const data = await res.json();
        return data;
    }
    catch {
        
    }
}

const deleteItemReq = async (id) => {
    try {
        fetch("http://localhost:5004/", {
            method: "DELETE",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        },
    );
    }
    catch {
        
    }
    }

const deleteAllItemsReq = async () => {
    try {
        fetch("http://localhost:5004/all", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        },
    );
    }
    catch {
        
    }
}

    const login = async (email, password) => {
        try {
          const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
          });
          console.log('response:', response);
          if (!response.ok) {
            throw new Error('Login failed');
          }
          
          return await response.json();
        } catch (error) {
          console.error('Error logging in:', error);
          throw error;
        }
      };
      

export { addItemReq, getAllItemsReq, deleteItemReq, deleteAllItemsReq, login };