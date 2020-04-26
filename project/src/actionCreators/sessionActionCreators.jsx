export const login = (user, token, keepLoggedIn) => {
  return ({
    type: 'LOGIN',
    user: user,
    token: token,
    keepLoggedIn: keepLoggedIn
})};

export const logout = () => ({
  type: 'LOGOUT'
});
