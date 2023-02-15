import server from './infrastructure/server';
require('dotenv').config();
import { SQLDatabase } from './infrastructure/SQLConnection/databaseConfig';
import { PGDataSourceService } from './services/pgDataSourceService';
import { FindByIdSchedule } from "./useCase/findByIdSchedule";
import { SaveSchedule } from './useCase/saveSchedule';
import { ScheduleRepositoryImpl } from './infrastructure/RepositoryImpl/scheduleRepositoryImpl';
import ScheduleRouter from './infrastructure/routes/schedule.routes';

const PORT = process.env.SERVER_PORT || 3000;
const db = SQLDatabase.getInstance();

async function getPGDS() {
    return new PGDataSourceService(db);
};

(async () => {
    const dataSource = await getPGDS();

    const schedule = ScheduleRouter(
        new FindByIdSchedule(new ScheduleRepositoryImpl(dataSource)),
        new SaveSchedule(new ScheduleRepositoryImpl(dataSource))
    )

    server.use('/schedule', schedule);
    server.listen(PORT, () => console.log('Running on port', PORT))
})();
