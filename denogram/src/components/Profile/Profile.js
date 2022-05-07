import React from 'react'
import { useQuery } from '@apollo/client';
import {GET_USER} from '../../gql/user';
import "./Profile.scss"

const Profile = (params) => {
    const {username} = params;
    const {data, loading, error} = useQuery(GET_USER, {variables: {username}});

    if (loading) return null; // Without this, we will consume data as undefined at first
    if (error) return <h1>User not found</h1>

    const {getUser} = data;

    return (
        <div>
            <h1>hola profile</h1>
        </div>
    )
}

export default Profile
