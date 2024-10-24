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
  allArtistList: Array<Artist>;
  currentArtistList: Array<Artist>;
  menuAdminIsOpen: boolean;
  reRender: boolean;
  setTattooPlace: (newTattooPlace: string) => void;
  setTattooSize: (newTattooSize: string) => void;
  setAllowSite: (newAllowSite: boolean) => void;
  setAllowSize: (newAllowSize: boolean) => void;
  setAllowContact: (newAllowContact: boolean) => void;
  setAllowArtist: (newAllowArtist: boolean) => void;
  setAllowCalendar: (newAllowCalendar: boolean) => void;
  setMyEventList: (newMyEventList: Array<TattooEvent>) => void;
  setAllArtistList: (newAllArtistList: Array<Artist>) => void;
  setCurrentArtistList: (newCurrentArtistList: Array<Artist>) => void;
  setMenuAdminIsOpen: (newMenuAdminIsOpen: boolean) => void;
  setReRender: (newReRender: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  reRender: false,
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
  allArtistList: [],
  currentArtistList: [],
  menuAdminIsOpen: false,
  setReRender: (newReRender: boolean) => {
    set(() => ({
      reRender: newReRender,
    }));
  },
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
  setAllArtistList: (newAllArtistList: Array<Artist>) => {
    set(() => ({
      allArtistList: newAllArtistList,
    }));
  },
  setCurrentArtistList: (newCurrentArtistList: Array<Artist>) => {
    set(() => ({
      currentArtistList: newCurrentArtistList,
    }));
  },
  setMenuAdminIsOpen: (newMenuAdminIsOpen: boolean) => {
    set(() => ({
      menuAdminIsOpen: newMenuAdminIsOpen,
    }));
  },
}));
