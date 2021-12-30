import express from "express";


//components
import Connection from "./connection/db.js";
import DefaultData from "./default.js";
const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();