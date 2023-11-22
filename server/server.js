import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";
import db from "./db/db-connection.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Getting __dirname in ES module system
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//React build directory
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from React app
app.use(express.static(REACT_BUILD_DIR));

// Creates an endpoint for the route `/`
app.get("/", (req, res) => {
  res.json("Hello D");
});
app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT}`)
);
