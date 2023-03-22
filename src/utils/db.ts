import { Pool } from "pg";

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const pool = new Pool({
  host: PG_HOST,
  port: parseInt(PG_PORT),
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
});

export default pool;
