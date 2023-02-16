import { IScheduleRepository } from '../domain/repository/IScheduleRepository';
import { Schedule } from "../domain/entity/schedule";
import { IFindByDateSchedule } from '../domain/useCases/IFindByDateSchedule';

export class FindByDateSchedule implements IFindByDateSchedule {
    scheduleRepository: IScheduleRepository;
    constructor(scheduleRepository: IScheduleRepository) {
        this.scheduleRepository = scheduleRepository
    }

    async execute(date: string): Promise<Schedule[] | []> {
        const result = await this.scheduleRepository.findByDate(date);
        return result
    }
}