import { Schedule } from "../entity/schedule";

export interface IFindByIdSchedule {
    execute(id: string): Promise<Schedule | undefined>;
}