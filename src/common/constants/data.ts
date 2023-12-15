export type EventType = {
  id: number;
  description: string;
  date: number;
};

export type PeriodType = {
  id: number;
  startDate: number;
  endDate: number;
  title: string;
  events: EventType[];
};

export const data: PeriodType[] = [
  {
    id: 1,
    startDate: 1987,
    endDate: 1991,
    title: 'История',
    events: [
      {
        id: 1,
        date: 1987,
        description: 'Июль 1987 год - Начало политики "перестройки" в СССР.',
      },
      {
        id: 2,
        date: 1988,
        description:
          'Спитакское землетрясение в Армении, самое разрушительное землетрясение в истории СССР.',
      },
      {
        id: 3,
        date: 1989,
        description:
          'Железнодорожная катастрофа под Уфой, ставшая крупнейшей железнодорожной катастрофой в истории России и СССР.',
      },
      {
        id: 4,
        date: 1990,
        description: 'Избрание М.С. Горбачева президентом СССР. ',
      },
      {
        id: 5,
        date: 1991,
        description:
          'Распад СССР. Образование Содружества независимых государств (СНГ). Конец холодной войны.',
      },
    ],
  },
  {
    id: 2,
    startDate: 1992,
    endDate: 1997,
    title: 'Наука',
    events: [
      {
        id: 1,
        date: 1992,
        description:
          'В Пасадене, на выставке «World Of Commodore» прошла презентация Amiga 4000, первого компьютера на базе чипсета AGA.',
      },
      {
        id: 2,
        date: 1993,
        description:
          'в Лондоне, прошла презентация Amiga CD32 — первой 32-битной игровой консоли использующей CD-ROM.',
      },
      {
        id: 3,
        date: 1994,
        description:
          'Международный сетевой центр InterNIC официально зарегистрировал национальный домен .ru для Российской Федерации',
      },
      {
        id: 4,
        date: 1995,
        description: '24 августа — выпуск в свет операционной системы Windows 95.',
      },
      {
        id: 5,
        date: 1996,
        description: 'Создана первая российская поисковая система «Rambler».',
      },
    ],
  },
  {
    id: 3,
    startDate: 1998,
    endDate: 2002,
    title: 'Кино',
    events: [
      {
        id: 1,
        date: 1998,
        description: 'Тёмный город. Режиссёр: Алекс Пройас',
      },
      {
        id: 2,
        date: 1999,
        description: 'Матрица',
      },
      {
        id: 3,
        date: 2000,
        description: 'Шоу Трумана 103 мин.США. Драма  Режиссёр: Питер Уир',
      },
      {
        id: 4,
        date: 2001,
        description: `Донни Дарко`,
      },
      {
        id: 5,
        date: 2002,
        description: 'Особое мнение',
      },
    ],
  },
  {
    id: 4,
    startDate: 2003,
    endDate: 2010,
    title: 'Литература',
    events: [
      {
        id: 1,
        date: 2003,
        description:
          'Дублинская литературная премия — Орхан Памук, роман «Меня зовут Красный»',
      },
      {
        id: 2,
        date: 2005,
        description: 'Премия Александра Солженицына — критик Игорь Золотусский',
      },
      {
        id: 3,
        date: 2006,
        description: 'Владимир Сорокин — День опричника',
      },
      {
        id: 4,
        date: 2008,
        description: 'Нобелевская премия по литературе — Жан-Мари Гюстав Леклезио',
      },
    ],
  },
  {
    id: 5,
    startDate: 2011,
    endDate: 2015,
    title: 'Технологии',
    events: [
      { id: 1, date: 2011, description: 'Facebook разработал React js' },
      {
        id: 2,
        date: 2012,
        description: '2012 г. является запуск операционной системы Microsoft Windows 8',
      },
      {
        id: 3,
        date: 2014,
        description: 'Падение цен на нефть на мировых рынках',
      },
      {
        id: 4,
        date: 2015,
        description:
          '14 марта — хирурги в Южно-Африканской Республике провели первую в мире успешную операцию по пересадке пениса',
      },
    ],
  },
  {
    id: 6,
    startDate: 2016,
    endDate: 2022,
    title: 'События',
    events: [
      {
        id: 1,
        date: 2016,
        description:
          'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 2,
        date: 2017,
        description:
          'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },

      {
        id: 3,
        date: 2018,
        description: 'Чемпионат Мира по футболу в России',
      },
      {
        id: 4,
        date: 2019,
        description: 'Запуск железнодорожного сообщения через Крымский мост',
      },
      {
        id: 5,
        date: 2020,
        description: 'Коронавирусная инфекция (COVID-19)',
      },
      { id: 6, date: 2021, description: 'США вывели войска из Афганистанаэ' },
      {
        id: 7,
        date: 2022,
        description:
          '24 февраля 2022 года президент РФ Владимир Путин объявил о начале специальной военной операции.',
      },
    ],
  },
];
