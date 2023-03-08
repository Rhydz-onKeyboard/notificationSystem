import { Schedule } from "../entity/schedule";

export interface ScheduleRepositoryInterface {
  save(modality: Schedule): Promise<void>;
  findById(id: string): Promise<Schedule | undefined>;
  findByDate(date: string): Promise<Schedule[] | []>;
}
