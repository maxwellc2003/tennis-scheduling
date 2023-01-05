import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $phone: String
    $first: String!
    $last: String!
    $utr: Int
    $usta: Int
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      phone: $phone
      first: $first
      last: $last
      utr: $utr
      usta: $usta
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $eventDate: String!
    $eventLocation: String!
    $eventTime: String!
    $eventMax: Int
  ) {
    addEvent(
      eventDate: $eventDate
      eventLocation: $eventLocation
      eventTime: $eventTime
      eventMax: $eventMax
    ) {
      _id
      eventDate
      eventLocation
      eventTime
      eventMax
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($eventId: ID!, $commentBody: String!) {
    addComment(eventId: $eventId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;
