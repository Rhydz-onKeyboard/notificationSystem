import { Schedule } from "../../../domain/entity/schedule";
import { IScheduleRepository } from "../../../domain/repository/IScheduleRepository";

export class MockScheduleRepository implements IScheduleRepository {
    save(schedule: Schedule): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Schedule | undefined> {
        throw new Error("Method not implemented.");

    }
};