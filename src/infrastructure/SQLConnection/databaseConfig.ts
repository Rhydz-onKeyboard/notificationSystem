import { Pool, PoolConfig } from 'pg';
import { SQLDatabaseWrapperInterface } from '../../services/interfaces/SQLDatabaseWrapper';

export default class SQLDatabase implements SQLDatabaseWrapperInterface {
  private static intance: SQLDatabase;

  private pool: Pool;

  private constructor(config: PoolConfig) {
    this.pool = new Pool(config);
  }

  public static getInstance(): SQLDatabase {
    if (!SQLDatabase.intance) {
      SQLDatabase.intance = new SQLDatabase({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DB,
        port: Number(process.env.PORT),
      });
    }
    return SQLDatabase.intance;
  }

  public query(queryString: string, params?: any[] | undefined): Promise<{ rows: any[]; }> {
    return this.pool.query(queryString, params);
  }
}
