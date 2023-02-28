import axios from 'axios';
import schedule from 'node-schedule';
import { FindByDateScheduleInterface } from '../../domain/useCases/FindByDateSchedule';
import capitalize from '../helpers/capitalize';

export default function recurringJob(
  findByDateScheduleUseCase: FindByDateScheduleInterface,
) {
  // const rule = new schedule.RecurrenceRule();
  // rule.dayOfWeek = [0, new schedule.Range(0, 4)];
  // rule.hour = 9;
  // rule.minute = 0;
  const today = new Date(Date.now());
  const formatedToday = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  schedule.scheduleJob(`
    */1
    *
    *
    *
    *`, async () => {
    const [result] = await findByDateScheduleUseCase.execute(formatedToday);
    const messageTemplate = `${capitalize(result.name)} ${capitalize(result.surname)}, su email es ${result.email}`;
    await axios({
      method: 'POST',
      url: process.env.SLACK_WEBHOOK,
      headers: { 'Content-Type': 'application/json' },
      data: {
        text: messageTemplate,
      },
    });
  });
}
