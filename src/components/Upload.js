import React from 'react';
import FileUpload from './FileUpload';
//import '../components/upload.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Upload= () => {
  return (
    <>
    <video src='/videos/video-6.mp4' autoPlay loop muted />
    <Navbar/>
    <div className='container'>      
      <FileUpload/>
    </div>
    <Footer/>
    </>
  );
};

export default Upload;