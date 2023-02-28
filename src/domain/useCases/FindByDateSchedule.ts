import { Schedule } from '../entity/schedule';

export interface FindByDateScheduleInterface {
  execute(date: string): Promise<Schedule[] | []>;
}
