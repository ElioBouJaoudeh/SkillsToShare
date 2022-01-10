 import "./sign.css"
 import {signup} from '../../actions/auth';
 import React, { useState, useEffect } from 'react';
 import { useHistory } from 'react-router-dom';
 import { useDispatch } from 'react-redux';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton
    } from './SigninElements';

const initialState ={email: '',password:'',confirmPassword:''};

const Signup= () => {
  const [formData,setFormData]=useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData,history))
  };


  const handleEmailChange = event => {
    setFormData({...formData,email:event.target.value});
  }
  const handlePasswordChange = event => {
    setFormData({...formData,password:event.target.value});
  }
  const handleconfirmChange = event => {
    setFormData({...formData,confirmPassword:event.target.value});
  }

  return(
    <> 
    <div className='video-container'>
    <video src='/videos/video-bg.mp4' autoPlay loop muted />
       <Container> 
               <FormWrap> 
                   <Icon to="/"> </Icon>
                   <FormContent> 
                     <Form onSubmit={handleSubmit}>
                         <FormH1>Sign up to Skills To Share </FormH1>
                         <FormLabel htmlFor='for'>Email</FormLabel>
                         <FormInput className="input" type="email" value={formData.email} onChange={handleEmailChange} />
                        <FormLabel htmlFor='for'>Password</FormLabel> 
                        <FormInput className="input" type="password" value={formData.password} onChange={handlePasswordChange} /> 
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel> 
                        <FormInput className="input" type="password" value={formData.confirmPassword} onChange={handleconfirmChange} />
                        <FormButton type='submit'>Create</FormButton>
                        <a href="/sign-in">Already have an account?  Sign-In</a>
                         </Form>  
                   </FormContent>
               </FormWrap>
               </Container> 
               </div>
    </>

  );
};

export default Signup;