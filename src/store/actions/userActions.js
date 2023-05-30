// actions/userActions.js
export const loginSuccess = (userData) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: userData,
    };
  };

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
type: LOGOUT,
});
  
  