export const hours = [
  { date: "08:00", index: 8 },
  { date: "09:00", index: 9 },
  { date: "10:00", index: 10 },
  { date: "11:00", index: 11 },
  { date: "12:00", index: 12 },
  { date: "13:00", index: 13 },
  { date: "14:00", index: 14 },
  { date: "15:00", index: 15 },
  { date: "16:00", index: 16 },
  { date: "17:00", index: 17 },
  { date: "18:00", index: 18 },
  { date: "19:00", index: 19 },
  { date: "20:00", index: 20 },
  { date: "21:00", index: 21 },
  { date: "22:00", index: 22 },
];

//no modificar probar con estos numero y cambiar otra cosa si no funciona asi
export const months = [
  { date: "Enero", number: 0 },
  { date: "Febrero", number: 1 },
  { date: "Marzo", number: 2 },
  { date: "Abril", number: 3 },
  { date: "Mayo", number: 4 },
  { date: "Junio", number: 5 },
  { date: "Julio", number: 6 },
  { date: "Agosto", number: 7 },
  { date: "Septiembre", number: 8 },
  { date: "Octubre", number: 9 },
  { date: "Noviembre", number: 10 },
  { date: "Diciembre", number: 11 },
];

export interface TattooEvent {
  title: string;
  start: Date;
  end: Date;
}

export interface DecodedToken {
  id: string;
  roles: [string];
  iat: number;
  exp: number;
}

// Custom types

export type OnRequestCloseType = () => void;
export type OnCancelType = () => void;
