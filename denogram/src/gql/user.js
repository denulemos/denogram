import {gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation register($input: UserInput!) {
        register(input: $input) {
            id
            name
            username
            email
            password
            createdAt
        }
    }
`;

export const LOGIN = gql`
    mutation login($input: LoginInput!) {
        login(input: $input) {
            token
        }
    }
`;