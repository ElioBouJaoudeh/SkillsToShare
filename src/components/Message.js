import React from 'react';
import PropTypes from 'prop-types';
import './upload.css'

const Message = ({ msg }) => {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      {msg}
      {/* <button
        type='button'
        className='close'
        data-bs-dismiss='alert'
        aria-label='Close'
        
      >
        <span aria-hidden='true'>&times;</span>
      </button> */}
      
      <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  
    </div>
  ); 
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;