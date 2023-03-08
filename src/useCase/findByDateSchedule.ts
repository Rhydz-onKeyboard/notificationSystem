import { ScheduleRepositoryInterface } from "../domain/repository/ScheduleRepository";
import { Schedule } from "../domain/entity/schedule";
import { FindByDateScheduleInterface } from "../domain/useCases/FindByDateSchedule";

export default class FindByDateSchedule implements FindByDateScheduleInterface {
  scheduleRepository: ScheduleRepositoryInterface;

  constructor(scheduleRepository: ScheduleRepositoryInterface) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(date: string): Promise<Schedule[] | []> {
    const result = await this.scheduleRepository.findByDate(date);
    return result;
  }
}
