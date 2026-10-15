import mysql from "mysql2/promise";

// Keep one connection pool, even when the dev server reloads files.
const globalForDb = globalThis as unknown as { dbPool?: mysql.Pool };

export const db =
  globalForDb.dbPool ??
  mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.dbPool = db;
}