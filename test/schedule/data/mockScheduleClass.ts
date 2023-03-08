import { Schedule } from "../../../src/domain/entity/schedule";
import { ScheduleRepositoryInterface } from "../../../src/domain/repository/ScheduleRepository";

export default class MockScheduleRepository
  implements ScheduleRepositoryInterface
{
  save(schedule: Schedule): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<Schedule | undefined> {
    throw new Error("Method not implemented.");
  }

  findByDate(date: string): Promise<Schedule[] | []> {
    throw new Error("Method not implemented");
  }
}
