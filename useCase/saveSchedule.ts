import { Schedule } from "../domain/entity/schedule";
import { IScheduleRepository } from "../domain/repository/IScheduleRepository";
import { ISaveSchedule } from "../domain/useCases/ISaveSchedule";

export class SaveSchedule implements ISaveSchedule {
    scheduleRepository: IScheduleRepository;
    constructor(scheduleRepository: IScheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    async execute(schedule: Schedule): Promise<void> {
        await this.scheduleRepository.save(schedule)
    }
}