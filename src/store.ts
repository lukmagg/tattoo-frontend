import dayjs from 'dayjs';
import { Artist, TattooEvent } from '@/Constants';
import { create } from 'zustand';

type Store = {
  tattooPlace: string;
  tattooSize: string;
  allowSite: boolean;
  allowSize: boolean;
  allowCalendar: boolean;
  allowContact: boolean;
  allowArtist: boolean;
  myEventList: Array<TattooEvent>;
  artistList: Array<Artist>;
  setTattooPlace: (newTattooPlace: string) => void;
  setTattooSize: (newTattooSize: string) => void;
  setAllowSite: (newAllowSite: boolean) => void;
  setAllowSize: (newAllowSize: boolean) => void;
  setAllowContact: (newAllowContact: boolean) => void;
  setAllowArtist: (newAllowArtist: boolean) => void;
  setAllowCalendar: (newAllowCalendar: boolean) => void;
  setMyEventList: (newMyEventList: Array<TattooEvent>) => void;
  setArtistList: (newArtistList: Array<Artist>) => void;
};

export const useStore = create<Store>((set) => ({
  tattooPlace: '',
  tattooSize: '',
  allowSite: false,
  allowSize: false,
  allowCalendar: false,
  allowContact: false,
  allowArtist: false,
  myEventList: [
    {
      start: dayjs('2024-07-18T11:00:00').toDate(),
      end: dayjs('2024-07-18T14:10:00').toDate(),
      title: 'tattoo 1',
    },
    {
      start: dayjs('2024-07-23T08:00:00').toDate(),
      end: dayjs('2024-07-23T10:00:00').toDate(),
      title: 'tattoo 2',
    },
    {
      start: dayjs('2024-07-23T15:00:00').toDate(),
      end: dayjs('2024-07-23T17:00:00').toDate(),
      title: 'tattoo 3',
    },
  ],
  artistList: [],
  setTattooPlace: (newTattooPlace: string) => {
    set(() => ({
      tattooPlace: newTattooPlace,
    }));
  },
  setTattooSize: (newTattooSize: string) => {
    set(() => ({
      tattooPlace: newTattooSize,
    }));
  },
  setAllowSite: (newAllowSite: boolean) => {
    set(() => ({
      allowSite: newAllowSite,
    }));
  },
  setAllowSize: (newAllowSize: boolean) => {
    set(() => ({
      allowSize: newAllowSize,
    }));
  },
  setAllowCalendar: (newAllowCalendar: boolean) => {
    set(() => ({
      allowCalendar: newAllowCalendar,
    }));
  },
  setAllowArtist: (newAllowArtist: boolean) => {
    set(() => ({
      allowArtist: newAllowArtist,
    }));
  },
  setAllowContact: (newAllowContact: boolean) => {
    set(() => ({
      allowContact: newAllowContact,
    }));
  },
  setMyEventList: (newMyEventList: Array<TattooEvent>) => {
    set(() => ({
      myEventList: newMyEventList,
    }));
  },
  setArtistList: (newArtistList: Array<Artist>) => {
    set(() => ({
      artistList: newArtistList,
    }));
  },
}));
