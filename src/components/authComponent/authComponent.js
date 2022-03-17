import React, { useEffect } from 'react';

const AuthComponent = ({ login, logout, state }) => {
  const { userInfo } = state;
  const { given_name, picture, email_verified } = userInfo;
  useEffect(() => {
    login();
  }, [login]);

  const handleOnLogout = () => {
    logout();
  };

  return (
    <div className="auth">
      {given_name}
      {(email_verified) ? <img src={`${picture}`} height="100" width="100" alt={given_name} /> : ''}
      {(!email_verified) ? <button className="authbtn"><a href="http://localhost:5000/api/auth/google">Login with google</a></button> : ''}
      {(email_verified) ? <button className="authbtn" onClick={handleOnLogout}>Loout</button> : ''}
    </div>
  );
};

export default AuthComponent
