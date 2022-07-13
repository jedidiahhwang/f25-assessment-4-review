// STEP 1: Grab element
const complimentBtn = document.getElementById("complimentButton");

const nameInput = document.getElementById("nameInput");
const nameButton = document.getElementById("nameButton");

const indexSelect = document.getElementById("indexSelect");
const newNameInput = document.getElementById("newNameInput");
const indexButton = document.getElementById("indexButton");

const indexSelectDelete = document.getElementById("indexSelectDelete");
const deleteButton = document.getElementById("deleteButton");

// STEP 2: Write function
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postName = () => {
    // Let's format our body object to send to the server
    // This is like preparing a food order ticket at the restaurant
    const nameBody = {
        // Let's create a key value pair for the name
        // nameInput IS THE ELEMENT
        // nameInput.value IS THE ACTUAL VALUE TYPED IN
        name: nameInput.value
    }
    // Now let's send the order with the waiter to our kitchen
    // THIS IS THE AXIOS REQUEST
    axios.post("http://localhost:4000/api/post/name", nameBody)
        // Let's wait for our order to come back
        // Sweet, the order OR res is back from the server
        // They're going to store inside of res, more specifically res.data
        .then((res) => {
            alert(res.data);
        })
};

const putName = () => {
    const putBody = {
        newName: newNameInput.value
    }

    axios.put(`http://localhost:4000/api/put/name/${indexSelect.value}`, putBody)
        .then((res) => {
            alert(res.data);
        })
}

const deleteName = () => {
    // DELETE's sole purpose is to remove information
    // With that in mind, we do NOT need to provide a body here
    axios.delete(`http://localhost:4000/api/delete/name/${indexSelectDelete.value}`)
        .then((res) => {
            alert(res.data);
        })
}

// STEP 3: Combine function with element
complimentBtn.addEventListener('click', getCompliment);
nameButton.addEventListener('click',  postName);
indexButton.addEventListener('click', putName);
deleteButton.addEventListener('click', deleteName);