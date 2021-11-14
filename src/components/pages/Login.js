import React from 'react';
import "./sign.css"
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

const Login= () => {
  return(
    <> 
    <div className='video-container'>
    <video src='/videos/video-bg.mp4' autoPlay loop muted />
       <Container> 
               <FormWrap> 
                   <Icon to="/"> </Icon>
                   <FormContent> 
                     <Form action="g">
                         <FormH1>Sign in to your account </FormH1>
                         <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel> 
                        <FormInput type='password' required /> 
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel> 
                        <FormInput type='password' required /> 
                        
                        <a href="/home" class="link_button">Create</a>
                      
                        <a href="/sign-in">Already have an account?  Sign-In</a>
                         </Form>  
                   </FormContent>
               </FormWrap>
               </Container> 
               </div>
    </>

  );
};

export default Login;