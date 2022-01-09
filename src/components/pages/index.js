import {signin} from '../../actions/auth';
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
    FormButton,
    Text,
    FormButtonSmall
    } from './SigninElements';
    
    
const Login = () => {
    const initialState ={email: '',password:''};
    const [formData,setFormData]=useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData,history))
      };
      const handleEmailChange = event => {
        setFormData({...formData,email:event.target.value});
      }
      const handlePasswordChange = event => {
        setFormData({...formData,password:event.target.value});
      }
    return (
        <>
         <div className='video-container'>
            <video src='/videos/video-bg.mp4' autoPlay loop muted />
           <Container> 
               <FormWrap> 
                   <Icon to="/">  </Icon>
                   <FormContent> 
                   <Form onSubmit={handleSubmit}>
                         <FormH1>Log into your account </FormH1>
                         <FormLabel htmlFor='for'>Email</FormLabel>
                         <FormInput className="input" value={formData.email} onChange={handleEmailChange} />
                        <FormLabel htmlFor='for'>Password</FormLabel> 
                        <FormInput className="input" value={formData.password} onChange={handlePasswordChange} />
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
