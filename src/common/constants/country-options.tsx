


export type OptionsType = {
  name: string;
  selector: string;
  img: string;
};

export const COUNTRY_OPTIONS: { [key: string]: OptionsType } = {
  RUSSIA: {
    name: 'Россия',
    selector: ' +7',
    img: '/images/russia.png'
  },
  BELARUS: {
    name: 'Беларусь',
    selector: ' +375',
    img: '/images/belarus.png'
  },
  UKRAINE: {
    name: 'Украина',
    selector: ' +380',
    img: '/images/ukraine.png'
  }
}