import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
  fragment UserObjectWhole on UserObject {
    id
    username
    email
    roles
    isActive
  }
`;


export const AUTH_RESPONSE_FRAGMENT = gql`
  fragment AuthResponseObjectWhole on AuthResponseObject {
    user {
      ...UserObjectWhole
    }
    token
  }
  ${USER_FRAGMENT}
`;
