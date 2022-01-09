import React from 'react';
import ShowOrg from './Organizations';
import Navbar from '../Navbar';

function UserOrg() {
    return (
        <>
        <Navbar/>
        <video src='/videos/video-5.mp4' autoPlay loop muted /> 
        <ShowOrg/>
        </>
    );
}


export default UserOrg;