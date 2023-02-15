import { Schedule } from "../entity/schedule";

export interface ISaveSchedule {
    execute(schedule: Schedule): Promise<void>;
}