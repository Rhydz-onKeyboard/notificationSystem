export interface ISQLDatabaseWrapper {
    query(queryString: string, params?: any[]): Promise<{ rows: any[] }>
}