export interface TimeOrder {
  start: string;
  end: string;
}

export const timeOrder: { [key: number]: TimeOrder } = {
  0: {
    start: '8:00',
    end: '9:35'
  },
  1: {
    start: '9:45',
    end: '11:20'
  },
  2: {
    start: '11:30',
    end: '13:05'
  },
  3: {
    start: '13:25',
    end: '15:00'
  },
  4: {
    start: '15:10',
    end: '16:45'
  },
  5: {
    start: '16:55',
    end: '18:30'
  }
};
