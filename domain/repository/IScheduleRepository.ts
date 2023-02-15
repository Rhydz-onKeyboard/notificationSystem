import { Schedule } from "../entity/schedule";

export interface IScheduleRepository {
    save(modality: Schedule): Promise<void>;
    findById(id: string): Promise<Schedule | undefined>;
}