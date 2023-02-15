import { IFindByIdSchedule } from "../domain/useCases/IFindByIdSchedule";
import { IScheduleRepository } from '../domain/repository/IScheduleRepository';
import { Schedule } from "../domain/entity/schedule";

export class FindByIdSchedule implements IFindByIdSchedule {
    scheduleRepository: IScheduleRepository;
    constructor(scheduleRepository: IScheduleRepository) {
        this.scheduleRepository = scheduleRepository
    }

    async execute(id: string): Promise<Schedule | undefined> {
        const result = await this.scheduleRepository.findById(id);
        return result
    }
}