import React from 'react'
import { useQuery } from '@apollo/client';
import {GET_USER} from '../../gql/user';
import "./Profile.scss"

const Profile = (params) => {
    const {username} = params;
    const result = useQuery(GET_USER, {variables: {username}});

    console.log(result);

    return (
        <div>
            <h1>hola profile</h1>
        </div>
    )
}

export default Profile
