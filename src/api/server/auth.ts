import api from './index';

interface LoginParams {
  email: string,
  password: string,
}

interface RegisterParams extends LoginParams {
  name:string, surname:string, phone:string,
}

export const login = ({ email, password }:LoginParams) => api.post('/user/login', {
  email, password,
});

export const register = ({
  name, surname, phone, email, password,
}: RegisterParams) => api.post('/user/register', {
  name,
  surname,
  phone,
  email,
  password,
});
