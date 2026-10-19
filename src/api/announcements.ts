import { Announcement } from '../types/announcement';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Университетские новости на казахском языке для соответствия методичке
const kazakhNews: Record<number, { title: string; body: string }> = {
  1: {
    title: 'Көктемгі семестр басталады',
    body: 'Оқу кестесі және маңызды ақпаратпен танысыңыз. Сабақтар кесте бойынша жүреді.'
  },
  2: {
    title: 'Стипендиялық бағдарламалар ашылды',
    body: 'Өтінім қабылдау басталды. Мүмкіндікті жіберіп алмаңыз және құжаттарды уақытында тапсырыңыз.'
  },
  3: {
    title: 'Студенттік форум – 2025',
    body: 'Идеялар, тәжірибе және жаңа таныстықтар. Барлық белсенді студенттерді шақырамыз.'
  },
  4: {
    title: 'Кампус инфрақұрылымы жаңарады',
    body: 'Жаңа оқу кеңістіктері мен демалыс аймақтары ашылады. Студенттер үшін қолайлы жағдай жасалуда.'
  },
  5: {
    title: 'IT hackathon байқауы',
    body: 'Бағдарламалаушылар мен дизайнерлерге арналған ауқымды сайысқа тіркеліңіз.'
  },
  6: {
    title: 'Халықаралық академиялық ұтқырлық',
    body: 'Басқа елдердің университеттерінде бір семестр оқу мүмкіндігі беріледі.'
  },
  7: {
    title: 'Кітапхананың жаңа электронды қоры',
    body: 'Студенттерге арналған мыңдаған оқулықтар мен ғылыми журналдар қолжетімді.'
  },
  8: {
    title: 'Спорттық жарыстардың кестесі',
    body: 'Волейбол, футбол және баскетбол секцияларына қабылдау жүріп жатыр.'
  },
  9: {
    title: 'Жыл сайынғы ғылыми конференция',
    body: 'Өз жобаларыңызды қорғап, гранттар ұтып алыңыз.'
  },
  10: {
    title: 'Карьера күні – 2025',
    body: 'Үздік IT компаниялар мен жұмыс берушілермен тікелей сұхбаттасыңыз.'
  },
};

export async function getAnnouncements(): Promise<Announcement[]> {
  const response = await fetch(`${API_URL}/posts?_limit=10`);
  if (!response.ok) {
    throw new Error('HTTP ' + response.status);
  }
  const data: Announcement[] = await response.json();
  
  // Подменяем английские тексты на качественные казахские по id для красоты UI
  return data.map((item) => ({
    ...item,
    title: kazakhNews[item.id]?.title || item.title,
    body: kazakhNews[item.id]?.body || item.body,
  }));
}

export async function getAnnouncementById(id: number): Promise<Announcement> {
  const response = await fetch(`${API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('HTTP ' + response.status);
  }
  const item: Announcement = await response.json();
  
  return {
    ...item,
    title: kazakhNews[id]?.title || item.title,
    body: kazakhNews[id]?.body || item.body,
  };
}