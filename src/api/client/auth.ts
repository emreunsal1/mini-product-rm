import api from './index';

interface LoginParams {
  email: string,
  password: string,
}

interface RegisterParams extends LoginParams {
  name:string,
}

export const login = ({ email, password }: LoginParams) => api.post('/auth/login', {
  email, password,
});

export const register = ({
  name, email, password,
}: RegisterParams) => api.post('/auth/register', {
  name,
  email,
  password,
});
