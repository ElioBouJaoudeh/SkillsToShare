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

const Password= () => {
  return(
    <> 
     <div className='video-container'>
    <video src='/videos/video-bg.mp4' autoPlay loop muted />
       <Container> 
               <FormWrap> 
                   <Icon to="/">  </Icon>
                   <FormContent> 
                     <Form action="g">
                         <FormH1>Reset your password</FormH1>
                         <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <a href="/sign-in" class="link_button">Done</a> 
                        
                         </Form>  
                   </FormContent>
               </FormWrap>
               </Container> 
               </div>
    </>

  );
};

export default Password;