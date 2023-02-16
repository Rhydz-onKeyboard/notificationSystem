import { Schedule } from '../domain/entity/schedule';
import { IScheduleService } from './interfaces/IScheduleService';
import { ISQLDatabaseWrapper } from './interfaces/ISQLDatabaseWrapper';
const DB_TABLE = "schedule";
export class PGDataSourceService implements IScheduleService {
    db: ISQLDatabaseWrapper
    constructor(db: ISQLDatabaseWrapper) {
        this.db = db
    }

    async save(schedule: Schedule): Promise<void> {
        await this.db.query(`insert into ${DB_TABLE} (id,name,surname,email,dateonboard) values ($1,$2,$3,$4,$5);`, [schedule.id, schedule.name, schedule.surname, schedule.email, schedule.dateOnBoard]);
    }

    async findById(id: string): Promise<Schedule | undefined> {
        const dbResponse = await this.db.query(`select id, name, surname, email, extract(year from dateonboard)||'-'||extract(month from dateonboard)||'-'||extract(day from dateonboard) as date from ${DB_TABLE} where id = $1 limit 1;`, [id]);
        const result = dbResponse.rows.map(item => ({
            id: item.id,
            name: item.name,
            surname: item.surname,
            email: item.email,
            dateOnBoard: item.date,
        }));

        return result[0];
    }

    async findByDate(date: string): Promise<Schedule[] | []> {
        const dbResponse = await this.db.query(`select id, name, surname, email, extract(year from dateonboard)||'-'||extract(month from dateonboard)||'-'||extract(day from dateonboard) as date from ${DB_TABLE} where dateonboard = $1;`, [date]);
        // const dbResponse = await this.db.query(`select id, name, surname, email, extract(year from dateonboard)||'-'||extract(month from dateonboard)||'-'||extract(day from dateonboard) as date from ${DB_TABLE}`);
        const result = dbResponse.rows.map(item => ({
            id: item.id,
            name: item.name,
            surname: item.surname,
            email: item.email,
            dateOnBoard: item.date,
        }));
        return result
    }
}