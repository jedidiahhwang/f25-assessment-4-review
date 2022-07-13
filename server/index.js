const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// Import our controller functions here
// STEP 2: Import your functions here from your controller
const { getCompliment, postName, putName, deleteName } = require('./controller')

// Write our endpoints here
// STEP 3: Combine your endpoint with your function
// REMEMBER THE FIRST SLASH!
app.get("/api/compliment", getCompliment);
app.post("/api/post/name", postName);
app.put("/api/put/name/:id", putName);
app.delete("/api/delete/name/:id", deleteName);

app.listen(4000, () => console.log("Server running on 4000"));
