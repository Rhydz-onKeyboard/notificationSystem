import { MockScheduleRepository } from '../data/mockScheduleClass';
import { IScheduleRepository } from '../../../domain/repository/IScheduleRepository';
import { SaveSchedule } from '../../../useCase/saveSchedule';

describe('Save schedule Use Case', () => {
    let mockscheduleRepository: IScheduleRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        mockscheduleRepository = new MockScheduleRepository()
    })

    test('Should save data', async () => {
        const InputData = { id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' };

        jest.spyOn(mockscheduleRepository, "save").mockImplementation(() => Promise.resolve());
        const savescheduleUseCase = new SaveSchedule(mockscheduleRepository);
        const result = await savescheduleUseCase.execute(InputData);
        expect(mockscheduleRepository.save).toHaveBeenCalledWith(InputData);
    })
})