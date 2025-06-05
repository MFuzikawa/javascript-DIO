import { Pool } from "pg";

const connectionString = "connection string aqui";

const db = new Pool({connectionString});

export default db;