declare namespace NodeJS {
  interface ProcessEnv {
    MY_SQL_DB_HOST: string;
    MY_SQL_DB_USER: string;
    MY_SQL_DB_PASSWORD: string;
    MY_SQL_DB_PORT: string;
    MY_SQL_DB_DATABASE: string;
    MY_SQL_DB_CONNECTION_LIMIT: string;
  }
}
