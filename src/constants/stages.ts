import stage_1 from '../assets/Stages/stage_1.jpg';
import stage_2 from '../assets/Stages/stage_2.jpg';
import stage_3 from '../assets/Stages/stage_3.jpg';
import stage_4 from '../assets/Stages/stage_4.jpg';
import progress_25 from '../assets/Stages/25.jpg';
import progress_50 from '../assets/Stages/50.jpg';
import progress_75 from '../assets/Stages/75.jpg';
import progress_100 from '../assets/Stages/100.jpg';
import plus_1 from '../assets/Stages/plus_1.jpg';
import plus_2 from '../assets/Stages/plus_2.jpg';
import plus_3 from '../assets/Stages/plus_3.jpg';
import plus_4 from '../assets/Stages/plus_4.jpg';

export const STAGES = [
  {
    img: stage_1,
    progress: progress_25,
    title: 'Заявка або дзвінок. Первинна консультація',
  },
  {
    img: stage_2,
    progress: progress_50 ,
    title: 'Пошук варіантів',
  },
  {
    img: stage_3,
    progress: progress_75,
    title: 'Перевірка погодженого варіанту',
  },
  {
    img: stage_4,
    progress: progress_100,
    title: 'Супровід угоди',
  },
]

export const PLUSES = [
  {
    img: plus_1,
    title: 'Потрібну вам модель авто за кращою ціною на ринку',
  },
  {
    img: plus_2,
    title: 'Колосальну економію сил та часу',
  },
  {
    img: plus_3,
    title: 'Впевненість у своєму автомобілі та відсутність неприємних сюрпризів',
  },
  {
    img: plus_4,
    title: 'Знижку від продавця, яка частково або повністю компенсує наші послуги',
  },
]
