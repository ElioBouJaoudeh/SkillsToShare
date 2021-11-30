import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    FormButtonSmall
    } from './SigninElements';
    
    
const Login = () => {
    return (
        <>
         <div className='video-container'>
            <video src='/videos/video-bg.mp4' autoPlay loop muted />
           <Container> 
               <FormWrap> 
                   <Icon to="/">  </Icon>
                   <FormContent> 
                     <Form action="/home">
                         <FormH1>Log into your account </FormH1>
                         <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel> 
                        <FormInput type='password' required /> 
                        <FormButton type='submit'>Login</FormButton>
                        <a href="/pass" >Forgot your password?</a>

                         </Form>  
                   </FormContent>
               </FormWrap>
               </Container> 
               </div>
        </>
    )
}

export default Login;
