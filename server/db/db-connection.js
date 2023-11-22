import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
  connectionString: process.env.DB_URL,
  //uncomment for production
  //   ssl: process.env.DATABASE_SSL !== "false" && {
  //     rejectUnauthorized: false,
  //   },
});
export default db;
