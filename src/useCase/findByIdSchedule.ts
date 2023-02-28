import { FindByIdScheduleInterface } from '../domain/useCases/FindByIdSchedule';
import { ScheduleRepositoryInterface } from '../domain/repository/ScheduleRepository';
import { Schedule } from '../domain/entity/schedule';

export default class FindByIdSchedule implements FindByIdScheduleInterface {
  scheduleRepository: ScheduleRepositoryInterface;

  constructor(scheduleRepository: ScheduleRepositoryInterface) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(id: string): Promise<Schedule | undefined> {
    const result = await this.scheduleRepository.findById(id);
    return result;
  }
}
