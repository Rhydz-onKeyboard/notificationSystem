import { IScheduleRepository } from "../../../domain/repository/IScheduleRepository";
import { MockScheduleRepository } from "../data/mockScheduleClass";



describe("schedule Repository", () => {
    let mockscheduleRepository: IScheduleRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        mockscheduleRepository = new MockScheduleRepository()
    });

    describe("save", () => {
        test("should make create ds call", async () => {
            jest.spyOn(mockscheduleRepository, "save").mockImplementation(() => Promise.resolve())
            await mockscheduleRepository.save({ id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' });
            expect(mockscheduleRepository.save).toHaveBeenCalledWith({ id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' });
        });
    });

    describe("find by id", () => {
        test("should return data by id", async () => {
            const inputData = "1";
            const expectedData = { id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' };;
            jest.spyOn(mockscheduleRepository, "findById").mockImplementation(() => Promise.resolve(expectedData));
            const result = await mockscheduleRepository.findById(inputData);
            expect(result).toStrictEqual(expectedData);
        })
    })
})