import { Schedule } from "../entity/schedule";

export interface SaveScheduleInterface {
  execute(schedule: Schedule): Promise<void>;
}
