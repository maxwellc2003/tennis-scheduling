// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    events: [Event]
    friends: [User]
  }

  type Event {
    _id: ID
    eventDate: String
    eventLocation: String
    eventTime: String
    eventMax: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    events(username: String): [Event]
    event(_id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEvent(eventDate: String!): Event
    addComment(eventId: ID!, commentBody: String!): Event
    addFriend(friendId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
