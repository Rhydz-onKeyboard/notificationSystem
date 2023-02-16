import { Schedule } from '../../domain/entity/schedule';
import { IScheduleRepository } from '../../domain/repository/IScheduleRepository';
import { IScheduleService } from '../../services/interfaces/IScheduleService';
export class ScheduleRepositoryImpl implements IScheduleRepository {
    scheduleDataSource: IScheduleService
    constructor(scheduleDataSource: IScheduleService) {
        this.scheduleDataSource = scheduleDataSource;
    };

    async save(modality: Schedule): Promise<void> {
        await this.scheduleDataSource.save(modality);
    };

    async findById(id: string): Promise<Schedule | undefined> {
        const result = await this.scheduleDataSource.findById(id);
        return result;
    };

    async findByDate(date: string): Promise<Schedule[] | []> {
        const result = await this.scheduleDataSource.findByDate(date);
        return result;
    };
}