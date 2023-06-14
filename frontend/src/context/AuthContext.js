import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() =>localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access): null);
  const [authTokens, setAuthToken] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')): null);
  let [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  let logoutUser = () => {
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
    };

  const loginUser = async (e) => {
    e.preventDefault();
    let resp = await fetch('/api/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value }),
    });
    let data = await resp.json();
    if(resp.status === 200){
        setAuthToken(data);
        setUser(jwt_decode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data));
        navigate('/');
    }else{
        alert('Invalid credentials or something went wrong')
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    let resp = await fetch('/api/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value }),
    });
    let data = await resp.json();
    console.log(data)
    if(resp.status === 201){
      alert('User created successfully. Please login to continue')
        navigate('/login');
    }else{
        alert('Invalid credentials or something went wrong')
    }
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    register: registerUser,
    login: loginUser,
    logout: logoutUser,
  };

  let updateToken  = async () => {
    let resp = await fetch('/api/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'refresh': authTokens?.refresh }),
    });
    let data = await resp.json();
    if(resp.status === 200){
      setAuthToken(data);
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data));
    }else{
      logoutUser();
    }
    if(loading){
      setLoading(false);
    }
  };

  useEffect(() => { 
    if(loading){
      updateToken();
    }
    let interval = setInterval(() => {
      if(authTokens){
        updateToken();
      }
    }, 1000*60*4);
    return () => {
      clearInterval(interval);
    }
  }, [authTokens, loading]);


  return (
    <AuthContext.Provider value={contextData}>
      {loading? null :  children}
    </AuthContext.Provider>
  );
};
