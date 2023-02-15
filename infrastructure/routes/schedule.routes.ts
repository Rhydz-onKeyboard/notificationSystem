import { Router } from 'express';
import { Request, Response } from 'express';
import { StatusCodes as code } from 'http-status-codes';
import { v4 as uuidGen } from 'uuid';
import { IFindByIdSchedule } from "../../domain/useCases/IFindByIdSchedule";
import { ISaveSchedule } from '../../domain/useCases/ISaveSchedule';

export default function ScheduleRouter(
    findByIdscheduleUseCase: IFindByIdSchedule,
    savescheduleUseCase: ISaveSchedule
) {
    const router = Router()

    router
        .route('/')
        .get(async (req: Request, res: Response) => {
            try {
                const { id } = req.body;
                const schedule = await findByIdscheduleUseCase.execute(id);
                res.status(code.OK).json(schedule);
            } catch (err) {
                res.status(code.BAD_REQUEST).json({ msg: 'Error fetching data' });
            }
        })
        .post(async ({ body }: Request, res: Response) => {
            try {
                const schedule = {
                    id: uuidGen().slice(0, 8),
                    name: body.name,
                    surname: body.surname,
                    email: body.email,
                    dateOnBoard: body.dateOnBoard
                }
                await savescheduleUseCase.execute(schedule);
                res.status(code.CREATED).end();
            } catch (err) {
                console.log(err)
                res.status(code.BAD_REQUEST).json({ msg: 'Error saving data' })
            }
        })

    return router
}