import { Schedule } from "../entity/schedule";

export interface IFindByDateSchedule {
    execute(date: string): Promise<Schedule[] | []>
}