import server from "./infrastructure/server/index";
import SQLDatabase from "./infrastructure/SQLConnection/databaseConfig";
import PGDataSourceService from "./services/pgDataSourceService";
import FindByIdSchedule from "./useCase/findByIdSchedule";
import SaveSchedule from "./useCase/saveSchedule";
import ScheduleRepository from "./infrastructure/repository/scheduleRepository";
import ScheduleRouter from "./infrastructure/routes/schedule.routes";
import recurringJob from "./infrastructure/slack_webhook/scheduleRun";
import FindByDateSchedule from "./useCase/findByDateSchedule";

require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;
const db = SQLDatabase.getInstance();

async function getPGDS() {
  return new PGDataSourceService(db);
}

(async () => {
  const dataSource = await getPGDS();

  const schedule = ScheduleRouter(
    new FindByIdSchedule(new ScheduleRepository(dataSource)),
    new SaveSchedule(new ScheduleRepository(dataSource))
  );

  server.use("/schedule", schedule);
  server.listen(PORT, () => {
    console.log("Running on port", PORT);
    recurringJob(new FindByDateSchedule(new ScheduleRepository(dataSource)));
  });
})();
