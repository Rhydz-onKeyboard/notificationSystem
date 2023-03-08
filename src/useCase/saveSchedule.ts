import { Schedule } from "../domain/entity/schedule";
import { ScheduleRepositoryInterface } from "../domain/repository/ScheduleRepository";
import { SaveScheduleInterface } from "../domain/useCases/SaveSchedule";

export default class SaveSchedule implements SaveScheduleInterface {
  scheduleRepository: ScheduleRepositoryInterface;

  constructor(scheduleRepository: ScheduleRepositoryInterface) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(schedule: Schedule): Promise<void> {
    await this.scheduleRepository.save(schedule);
  }
}
