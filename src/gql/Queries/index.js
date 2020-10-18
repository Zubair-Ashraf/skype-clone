import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(data: { username: $username, password: $password }) {
      user {
        username
        email
      }
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(
      data: { username: $username, email: $email, password: $password }
    ) {
      user {
        username
        email
      }
      token
    }
  }
`;

export const GET_USERS = gql`
  query users {
    users {
      id
      username
      email
      imageUrl
      latestMessage {
        id
        content
        from
        to
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_MESSAGES = gql`
  query receiveMessages($from: String!) {
    receiveMessages(data: { from: $from }) {
      id
      content
      from
      to
      createdAt
      updatedAt
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($to: String!, $content: String!) {
    sendMessage(data: { to: $to, content: $content }) {
      id
      content
      from
      to
      createdAt
      updatedAt
    }
  }
`;

export const NEW_MESSAGE = gql`
  subscription receiveMessage {
    receiveMessage {
      id
      content
      from
      to
      createdAt
      updatedAt
    }
  }
`;
