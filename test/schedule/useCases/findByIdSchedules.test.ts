import { IScheduleRepository } from "../../../domain/repository/IScheduleRepository"
import { FindByIdSchedule } from "../../../useCase/findByIdSchedule";
import { MockScheduleRepository } from "../data/mockScheduleClass";

describe('Find By Id schedule Use Case', () => {
    let mockscheduleRepository: IScheduleRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        mockscheduleRepository = new MockScheduleRepository();
    });

    test('Should return data by id', async () => {
        const InputData = '1';
        const ExpectedResult = { id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' };

        jest.spyOn(mockscheduleRepository, "findById").mockImplementation(() => Promise.resolve(ExpectedResult));
        const findByIdscheduleUseCase = new FindByIdSchedule(mockscheduleRepository);
        const result = await findByIdscheduleUseCase.execute(InputData);
        expect(result).toStrictEqual(ExpectedResult);
    })
})