import { ISQLDatabaseWrapper } from '../../../services/interfaces/ISQLDatabaseWrapper';
import { PGDataSourceService } from '../../../services/pgDataSourceService';
describe('PG Data Source Service', () => {
    let mockDatabase: ISQLDatabaseWrapper;

    beforeAll(async () => {
        mockDatabase = {
            query: jest.fn()
        }
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('save', async () => {
        const ds = new PGDataSourceService(mockDatabase);
        await ds.save({ id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' });
        expect(mockDatabase.query).toHaveBeenCalledWith('insert into schedule (id,name,surname,email,dateOnBoard) values ($1,$2,$3,$4,$5);', ["1", "Huesito", "Lechuga", "huesito@lechuga.com", "13 02 2023 12 27 00"])
    })

    test('find by id', async () => {
        const ExpectedResult = { rows: [{ id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' }] };
        const ds = new PGDataSourceService(mockDatabase);
        jest.spyOn(mockDatabase, 'query').mockImplementation(() => Promise.resolve(ExpectedResult));
        const result = await ds.findById('1');
        expect(result).toStrictEqual({ id: '1', name: 'Huesito', surname: 'Lechuga', email: 'huesito@lechuga.com', dateOnBoard: '13 02 2023 12 27 00' });
        expect(mockDatabase.query).toHaveBeenCalledWith('select * from schedule where id = $1 limit 1;', ['1']);
    })
})