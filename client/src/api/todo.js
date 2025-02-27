
const addItemReq = async (text, id) => {
    try {
        fetch("http://localhost:5004/", {
            method: "POST",
            body: JSON.stringify({
                text: text,
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
export default addItemReq;