const validation = {
  isEmailCheck: email => {
    return email.includes('@');
  },
  isPasswordCheck: password => {
    if (password.length >= 8) return true;
    else return false;
  },
};
