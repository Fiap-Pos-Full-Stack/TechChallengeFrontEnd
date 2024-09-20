import {  useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
interface Values {
  user: string;
  password: string;
}

function Logout() {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const {token, setToken} = useAuth();
  useEffect(()=>{
    logout()
    navigate('/login')
  })
  return (
    <>
    </>
  );
}

export default Logout;
