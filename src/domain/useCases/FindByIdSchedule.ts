import { Schedule } from '../entity/schedule';

export interface FindByIdScheduleInterface {
  execute(id: string): Promise<Schedule | undefined>;
}
