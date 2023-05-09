import { createPool, MysqlError, Pool, PoolConnection } from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

let pool: Pool;

export const init = () => {
  try {
    pool = createPool({
      connectionLimit: process.env.MY_SQL_DB_CONNECTION_LIMIT as any as number,
      host: process.env.MY_SQL_DB_HOST,
      user: process.env.MY_SQL_DB_USER,
      password: process.env.MY_SQL_DB_PASSWORD,
      database: process.env.MY_SQL_DB_DATABASE,
      port: process.env.MY_SQL_DB_PORT as any as number
    });

    console.debug("MySql Adapter Pool generated successfully");
  } catch (error) {
    console.error("[mysql.connector][init][Error]: ", error);
    throw new Error("failed to initialized pool");
  }
};

export const execute = <T>(
  query: string,
  params: string[] | Object
): Promise<T> => {
  try {
    if (!pool)
      throw new Error(
        "Pool was not created. Ensure pool is created when running the app."
      );

    console.log(params);
    return new Promise<T>((resolve, reject) => {
      const c = pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
      console.log(c.sql);
    });
  } catch (error) {
    console.error("[mysql.connector][execute][Error]: ", error);
    throw new Error("failed to execute MySQL query");
  }
};
