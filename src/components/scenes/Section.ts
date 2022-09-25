/* eslint-disable no-restricted-globals */
interface Section {
  classList?: any;
  id: number;
  text: string;
  in: number;
  out: number;
}

export default class Sections {
  cards: Section[] = [];

  constructor() {
    this.cards = [
      {
        id: 1,
        text: '',
        in: 3,
        out: 20,
      },
      {
        id: 2,
        text: '',
        in: 30,
        out: 82,
      },
      {
        id: 3,
        text: '',
        in: 110,
        out: 183,
      },
      {
        id: 4,
        text: '',
        in: 204,
        out: 220,
      },
      {
        id: 5,
        text: '',
        in: 236,
        out: 285,
      },
    ];
  }

  GetCard(index: number) {
    return this.cards[index];
  }
}
