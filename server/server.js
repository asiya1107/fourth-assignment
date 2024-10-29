import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", (request, response) => response.json("working"));

app.post("/messages", async function (request, response) {
  const { message, name } = request.body;

  const result = await db.query(
    "INSERT INTO messages (name, message) VALUES ($1, $2)",
    [name, message]
  );

  response.json(result);
});

app.listen(8080, () => console.log("App is running on PORT 8080"));
