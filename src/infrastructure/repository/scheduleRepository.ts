import { Schedule } from "../../domain/entity/schedule";
import { ScheduleRepositoryInterface } from "../../domain/repository/ScheduleRepository";
import { ScheduleServiceInterface } from "../../services/interfaces/ScheduleService";

export default class ScheduleRepository implements ScheduleRepositoryInterface {
  scheduleDataSource: ScheduleServiceInterface;

  constructor(scheduleDataSource: ScheduleServiceInterface) {
    this.scheduleDataSource = scheduleDataSource;
  }

  async save(modality: Schedule): Promise<void> {
    await this.scheduleDataSource.save(modality);
  }

  async findById(id: string): Promise<Schedule | undefined> {
    const result = await this.scheduleDataSource.findById(id);
    return result;
  }

  async findByDate(date: string): Promise<Schedule[] | []> {
    const result = await this.scheduleDataSource.findByDate(date);
    return result;
  }
}
