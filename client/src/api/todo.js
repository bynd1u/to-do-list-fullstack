
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
        const res = await fetch("http://localhost:5004/");
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
export { addItemReq, getAllItemsReq, deleteItemReq, deleteAllItemsReq };