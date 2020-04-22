export const login = (user, token) => {
  return ({
    type: 'LOGIN',
    user: user,
    token: token
})};

export const logout = () => ({
  type: 'LOGOUT'
});
