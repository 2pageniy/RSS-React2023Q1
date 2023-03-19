import { ICard } from '../../entities/card/interface';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.png';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';

export const cardList: ICard[] = [
  {
    img: img1,
    title: 'HSBC London 7s',
    creator: 'Steve Simpson',
    tags: ['Brandind', 'Graphic Design', 'Illustration'],
    date: '15/03/2023',
  },
  {
    img: img2,
    title: 'HELFENDE HAND 2016',
    creator: 'SENSUCHT GmbH',
    tags: ['Art Direction', 'Animation', 'Character'],
    date: '14/03/2023',
  },
  {
    img: img3,
    title: 'Toko Downtown. Dubai',
    creator: 'Multiple Owners',
    tags: ['Branding', 'Graphic Design', 'Illustration'],
    date: '13/03/2023',
  },
  {
    img: img4,
    title: 'Forest Folks',
    creator: 'Zim & Zou',
    tags: ['Art Direction', 'Crafts', 'Arts', 'Fine', 'Photography'],
    date: '12/02/2023',
  },
  {
    img: img5,
    title: 'Folklorious Identity',
    creator: 'Quim Marin',
    tags: ['Graphic Desing', 'Art Direction', 'Branding', 'Animation'],
    date: '11/02/2023',
  },
  {
    img: img6,
    title: 'Lobby Magazine - Faith',
    creator: 'Thomas Hedger',
    tags: ['Art Direction', 'Illustration', 'Graphic Design', 'Branding', 'Animation'],
    date: '10/02/2023',
  },
];
