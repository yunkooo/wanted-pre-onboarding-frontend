export const validation = {
  isEmailCheck: email => {
    let isCheck = true;

    if (email === '') {
      isCheck = true;
    } else {
      isCheck = email.includes('@');
    }

    return { value: isCheck, message: isCheck ? '' : validationError.EMAIL_ERROR };
  },
  isPasswordCheck: password => {
    let isCheck = true;

    if (password === '') {
      isCheck = true;
    } else {
      isCheck = password.length >= 8;
    }

    return {
      value: isCheck,
      message: isCheck ? '' : validationError.PASSWORD_ERROR,
    };
  },
  isPasswordReCheck: (password, rePassword) => {
    let isCheck = true;

    if (rePassword === '') {
      isCheck = true;
    } else {
      isCheck = password === rePassword;
    }
    return {
      value: isCheck,
      message: isCheck ? '' : validationError.PASSWORD_CHECK_ERROR,
    };
  },
};

const validationError = {
  EMAIL_ERROR: '@를 포함하여 입력해주세요.',
  PASSWORD_ERROR: '8자리 이상 입력해주세요.',
  PASSWORD_CHECK_ERROR: '패스워드와 동일하게 입력해주세요.',
};
