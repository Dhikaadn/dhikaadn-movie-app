//Import library and others
import React from 'react'
import {useGoogleLogin} from "@react-oauth/google";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../redux/actions/auth';

export const GoogleLogin = ({buttonText}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
      onSuccess:(tokenResponse)=>{
         const data = {
          access_token: tokenResponse.access_token,
         };
         dispatch(googleLogin(data,navigate));
      },
  });
  return (
    <button onClick={()=>login()}>
      {buttonText}
    </button>
  )
}
