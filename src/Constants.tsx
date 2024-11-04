import { TypedDocumentNode, gql } from '@apollo/client'
import {
  AUTH_RESPONSE_FRAGMENT,
  USER_FRAGMENT,
  ARTIST_FRAGMENT,
} from './app/apollo/fragments'

// INTERFACES

export interface CalendarModalProps {
  isOpen: boolean
  selectedDate: Date
  onRequestClose: OnRequestCloseType
}

export interface BudgetModalProps {
  isOpen: boolean
  selectedSize: string
  onRequestClose: OnRequestCloseType
}

export interface TattooEvent {
  title: string
  start: Date
  end: Date
  isBooked: boolean
}

export interface DecodedToken {
  id: string
  roles: [string]
  iat: number
  exp: number
}

export interface CardProps {
  name: string
  description: string
  instagram: string
  color: string
  onClose: () => void // Si 'onClose' es una función sin retorno
  onEdit: () => void
}

interface Data {
  totalCount: number
}

// interface Books {
//   books: Array<Book>;
// }

interface Variables {
  id: string | string[]
}

// ENUMS
export enum EstimatedTime {
  small = 1800000, // milisegundos
  medium = 10800000,
  large = 21600000,
}
// export enum Lend {
//   PRESTADO = 'PRESTADO',
//   DISPONIBLE = 'DISPONIBLE',
// }

// export interface User {
//   id?: string;
//   name: string;
//   email: string;
//   //phone?: string;
//   roles?: string[];
//   typeUser: TypeUser;
//   grupo?: Group;
//   isActive?: boolean;
//   createdAt?: Date;
// }

export interface Artist {
  id?: string
  name: string
  description: string
  color: string
  instagram: string
  eventList?: TattooEvent[]
  isActive?: boolean
  createdAt?: Date
}

export interface DecodedToken {
  id: string
  roles: [string]
  iat: number
  exp: number
}

// QUERIES AND MUTATIONS

export const SIGN_UP = gql`
  mutation Signup($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      ...AuthResponseObjectWhole
    }
  }
  ${AUTH_RESPONSE_FRAGMENT}
`

export const SIGN_IN = gql`
  mutation Signin($signinInput: SigninInput!) {
    signin(signinInput: $signinInput) {
      ...AuthResponseObjectWhole
    }
  }
  ${AUTH_RESPONSE_FRAGMENT}
`

export const ARTISTS = gql`
  query Artists {
    artists {
      ...ArtistObjectWhole
    }
  }
  ${ARTIST_FRAGMENT}
`

export const CREATE_ARTIST = gql`
  mutation CreateArtist($createArtistInput: CreateArtistInput!) {
    createArtist(createArtistInput: $createArtistInput) {
      ...ArtistObjectWhole
    }
  }
  ${ARTIST_FRAGMENT}
`

export const UPDATE_ARTIST = gql`
  mutation UpdateArtist($updateArtistInput: UpdateArtistInput!) {
    updateArtist(updateArtistInput: $updateArtistInput) {
      ...ArtistObjectWhole
    }
  }
  ${ARTIST_FRAGMENT}
`

export const ACTIVATE_ARTIST = gql`
  mutation ActivateArtist($id: ID!) {
    activateArtist(id: $id) {
      ...ArtistObjectWhole
    }
  }
  ${ARTIST_FRAGMENT}
`

export const DEACTIVATE_ARTIST = gql`
  mutation DeactivateArtist($id: ID!) {
    deactivateArtist(id: $id) {
      ...ArtistObjectWhole
    }
  }
  ${ARTIST_FRAGMENT}
`

export const TOTAL_COUNT: TypedDocumentNode<Data> = gql`
  query TotalBooks {
    totalCount
  }
`

// export const CREATE_BOOK = gql`
//   mutation CreateBook($createBookInput: CreateBookInput!) {
//     createBook(createBookInput: $createBookInput) {
//       ...BookObjectWhole
//     }
//   }
//   ${BOOK_FRAGMENT}
// `;

// export const UPDATE_BOOK = gql`
//   mutation UpdateBook($updateBookInput: UpdateBookInput!) {
//     updateBook(updateBookInput: $updateBookInput) {
//       ...BookObjectWhole
//     }
//   }
//   ${BOOK_FRAGMENT}
// `;

// export const BOOKS: TypedDocumentNode<Books> = gql`
//   query Books($search: String, $offset: Int, $limit: Int) {
//     books(search: $search, offset: $offset, limit: $limit) {
//       ...BookObjectWhole
//     }
//   }
//   ${BOOK_FRAGMENT}
// `;

// export const BOOK: TypedDocumentNode<DataBook, Variables> = gql`
//   query Book($id: ID!) {
//     book(id: $id) {
//       ...BookObjectWhole
//     }
//   }
//   ${BOOK_FRAGMENT}
// `;

export const USERS: TypedDocumentNode<Users> = gql`
  query Users($search: String, $offset: Int, $limit: Int) {
    users(search: $search, offset: $offset, limit: $limit) {
      ...UserObjectWhole
    }
  }
  ${USER_FRAGMENT}
`

export const USER: TypedDocumentNode<DataUser, Variables> = gql`
  query User($id: ID!) {
    user(id: $id) {
      ...UserObjectWhole
    }
  }
  ${USER_FRAGMENT}
`

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      ...UserObjectWhole
    }
  }
  ${USER_FRAGMENT}
`

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateBookInput: $updateUserInput) {
      ...UserObjectWhole
    }
  }
  ${USER_FRAGMENT}
`

// Gloabl constants
export const hours = [
  { date: '08:00', index: 8 },
  { date: '09:00', index: 9 },
  { date: '10:00', index: 10 },
  { date: '11:00', index: 11 },
  { date: '12:00', index: 12 },
  { date: '13:00', index: 13 },
  { date: '14:00', index: 14 },
  { date: '15:00', index: 15 },
  { date: '16:00', index: 16 },
  { date: '17:00', index: 17 },
  { date: '18:00', index: 18 },
  { date: '19:00', index: 19 },
  { date: '20:00', index: 20 },
  { date: '21:00', index: 21 },
  { date: '22:00', index: 22 },
]

//no modificar probar con estos numero y cambiar otra cosa si no funciona asi
export const months = [
  { date: 'Enero', number: 0 },
  { date: 'Febrero', number: 1 },
  { date: 'Marzo', number: 2 },
  { date: 'Abril', number: 3 },
  { date: 'Mayo', number: 4 },
  { date: 'Junio', number: 5 },
  { date: 'Julio', number: 6 },
  { date: 'Agosto', number: 7 },
  { date: 'Septiembre', number: 8 },
  { date: 'Octubre', number: 9 },
  { date: 'Noviembre', number: 10 },
  { date: 'Diciembre', number: 11 },
]

// Custom types

export type OnRequestCloseType = () => void
export type OnCancelType = () => void
