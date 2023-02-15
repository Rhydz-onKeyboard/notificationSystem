import request from 'supertest';
import { Schedule } from '../../../domain/entity/schedule';
import { IFindByIdSchedule } from '../../../domain/useCases/IFindByIdSchedule';
import { ISaveSchedule } from '../../../domain/useCases/ISaveSchedule';
import server from '../../../infrastructure/server'
import scheduleRouter from '../../../infrastructure/routes/schedule.routes';

class MockFindByIdscheduleUseCase implements IFindByIdSchedule {
    execute(id: string): Promise<Schedule | undefined> {
        throw new Error('Method not implemented');
    }
};

class MockSavescheduleUseCase implements ISaveSchedule {
    execute(schedule: Schedule): Promise<void> {
        throw new Error('Method not implemented');
    }
};

describe('Contact Router', () => {
    let mockFindByIdscheduleUseCase: IFindByIdSchedule;
    let mockSavescheduleUseCase: ISaveSchedule;

    beforeAll(() => {
        mockFindByIdscheduleUseCase = new MockFindByIdscheduleUseCase();
        mockSavescheduleUseCase = new MockSavescheduleUseCase();
        server.use("/schedule", scheduleRouter(mockFindByIdscheduleUseCase, mockSavescheduleUseCase))
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /schedule', () => {
        test('should return 200 with data', async () => {
            const InputData = '1';
            const ExpectedResult = { id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' };
            jest.spyOn(mockFindByIdscheduleUseCase, 'execute').mockImplementation(() => Promise.resolve(ExpectedResult));

            const response = await request(server).get('/schedule');

            expect(response.status).toBe(200);
            expect(mockFindByIdscheduleUseCase.execute(InputData));
            expect(response.body).toStrictEqual(ExpectedResult);
        });

        test("GET /schedule returns 400 on use case error", async () => {
            jest.spyOn(mockFindByIdscheduleUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).get("/schedule")
            expect(response.status).toBe(400)
            expect(response.body).toStrictEqual({ msg: "Error fetching data" })
        });
    })

    describe('POST /schedule', () => {
        test('POST /schedule', async () => {
            const InputData = { id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' };
            jest.spyOn(mockSavescheduleUseCase, 'execute').mockImplementation(() => Promise.resolve());
            const response = await request(server).post('/schedule').send(InputData);
            expect(response.status).toBe(201);
        });

        test("POST /schedule returns 400 on use case error", async () => {
            const InputData = { id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' };
            jest.spyOn(mockSavescheduleUseCase, "execute").mockImplementation(() => Promise.reject(Error()))
            const response = await request(server).post("/schedule").send(InputData)
            expect(response.status).toBe(400)
        });
    })
})
