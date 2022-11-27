import React, { useState, useRef } from 'react';
import { login, register } from '../api/client/auth';
import Button from './Button';
import CheckBox from './CheckBox';
import Input from './Input';
import Tab from './Tab';

enum SelectedIndex {
  LOGIN = 0,
  REGISTER = 1,
}
interface UserBase {
  email: string,
  password:string,
}

interface UserSignIn extends UserBase {
  name: string,
  surname: string,
  phone: string,
}

export default function SignInForm() {
  const [selectedIndex, setSelectedIndex] = useState<SelectedIndex>(0);
  const userInfo = useRef<UserSignIn>({
    email: '', password: '', name: '', phone: '', surname: '',
  });
  const againPassword = useRef<UserSignIn['password']>('');

  const buttonClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      const { email, password, name } = userInfo.current;
      if (selectedIndex === SelectedIndex.LOGIN) {
        await login({ email, password });
      }
      await register({ email, password, name });
    } catch (error) {
      window.alert(error.response.data.message);
    }
  };

  const inputChangeHandler = (value: string, type: keyof UserSignIn) => {
    userInfo.current[type] = value;
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Tab
          onChange={(index) => {
            setSelectedIndex(index);
          }}
          selectedIndex={selectedIndex}
          tabs={['Login', 'Register']}
        />
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <Input placeholder="e-mail giriniz" type="email" onChange={(event) => inputChangeHandler(event.target.value, 'email')} />
            <Input placeholder="şifre Giriniz" type="password" onChange={(event) => { inputChangeHandler(event.target.value, 'password'); }} />

            {selectedIndex === SelectedIndex.REGISTER
              && (
              <>
                <Input placeholder="Again PassWord" type="password" onChange={(event) => { againPassword.current = event.target.value; }} />
                <Input placeholder="Name" onChange={(event) => { inputChangeHandler(event.target.value, 'name'); }} />
                <Input placeholder="Surname" onChange={(event) => { inputChangeHandler(event.target.value, 'surname'); }} />
                <Input placeholder="Phone Number" type="number" onChange={(event) => { inputChangeHandler(event.target.value, 'phone'); }} />
              </>
              )}

          </div>
          <div className="flex items-center justify-between">
            <CheckBox value={false} onChange={() => {}}>
              Remember Me
            </CheckBox>
          </div>
          <div>
            <Button onClick={buttonClickHandler}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
