import {  useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';


function Logout() {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const {token, setToken} = useAuth();
  useEffect(()=>{
    const handleLogout = async () => {
      await logout()
      setToken('')
      navigate('/')
  }; 
  handleLogout();
}, [])
  return (
    <>
    </>
  );
}

export default Logout;
