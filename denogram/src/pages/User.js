import React from 'react'
import {useParams} from 'react-router-dom';
import Profile from '../components/Profile/index.js';

const User = () => {
    const params = useParams();

    return (
        <div>
            <h1>{params.username}</h1>
            <Profile username={params.username}/>
        </div>
    )
}

export default User
