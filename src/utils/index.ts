import { SignInType } from '../enums';

export const checkStringEqual = (a: string, b: string) => a === b;

export const formatPrice = (price: number | string, currency = 'TL') => `${price} ${currency}`;

export const validateEmail = (email: string) => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

export const validatePassword = (password:string) => /[^a-z0-9]/gi.test(password) || (password.length > 6 && password.length < 20);

export const validateInputs = (user: any, type:SignInType) => {
  const errorMessage:any = {};
  Object.keys(user).forEach((key) => {
    if (key === 'email' && !validateEmail(user[key])) {
      errorMessage[key] = 'Please enter a valid e-mail';
    }
    if (key === 'password' && !validatePassword(user[key])) {
      errorMessage[key] = 'Password should be 6-20 char and contain only alphanumeric char';
    }
    if (type === SignInType.LOGIN) return;
    if (key === 'phone' && user[key].length !== 18) {
      errorMessage[key] = 'Phone number is required';
    }
    if ((key === 'name' || key === 'surname') && user[key].length === 0) {
      errorMessage[key] = `${key} is required`;
    }
  });
  return { messages: errorMessage, hasError: Object.keys(errorMessage).length > 0 };
};

export const Storage = {
  get: (key: string) => JSON.parse(localStorage.getItem(key) as string),
  set: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value)),
};

export const detectUserCloseTab = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('unload', () => {
      if (!Storage.get('REMEMBER_ME_ACTIVE')) {
        document.cookie = 'token=; Max-Age=0;';
      }
    });
  }
};

export const clearCookieAndRedirect = () => {
  if (typeof window !== 'undefined') {
    document.cookie = 'token=; Max-Age=0';
    window.location.assign('/sign-in');
  }
};
