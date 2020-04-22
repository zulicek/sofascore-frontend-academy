export const validateCredentials = (username, password) => {
    let errors = {};

    if (!username) {
        errors.username = "Username can't be empty"
    }
  
    if (!password) {
    errors.password = "Password can't be empty"
    }
    
    return errors;
}