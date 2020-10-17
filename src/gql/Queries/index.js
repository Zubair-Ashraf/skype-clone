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
