import { Schedule } from '../../domain/entity/schedule';
export interface IScheduleService {
    save(schedule: Schedule): Promise<void>;
    findById(id: string): Promise<Schedule | undefined>;
    findByDate(date: string): Promise<Schedule[] | []>;
}