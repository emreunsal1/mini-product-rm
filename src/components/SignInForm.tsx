/* eslint-disable no-nonoctal-decimal-escape */
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { login, register } from '../api/client/auth';
import Button from './Button';
import CheckBox from './CheckBox';
import Input from './Input';
import Tab from './Tab';
import { checkStringEqual, validateInputs } from '../utils/validation';
import { SignInType } from '../enums';

interface UserBase {
  email: string,
  password:string,
}

interface UserSignIn extends UserBase {
  name: string,
  surname: string,
  phone: string,
}
type InputErrors = { [key: string]: false | string };

const DEFAULT_INPUT_ERRORS: InputErrors = {
  email: false,
  name: false,
  password: false,
  againPassword: false,
  surname: false,
  phone: false,
};

export default function SignInForm() {
  const [selectedIndex, setSelectedIndex] = useState<SignInType>(0);
  const [
    inputErrors,
    setInputErrors,
  ] = useState<InputErrors>(DEFAULT_INPUT_ERRORS);
  const router = useRouter();
  const userInfo = useRef<UserSignIn>({
    email: '', password: '', name: '', phone: '', surname: '',
  });
  const againPassword = useRef<UserSignIn['password']>('');

  const buttonClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    try {
      const { email, password, name } = userInfo.current;

      const { messages, hasError } = validateInputs(userInfo.current, selectedIndex);
      const isEqual = checkStringEqual(userInfo.current.password, againPassword.current);

      if (!isEqual
        && selectedIndex === SignInType.REGISTER) {
        messages.againPassword = 'Password should match';
      }

      if (hasError || !isEqual) {
        setInputErrors({ ...DEFAULT_INPUT_ERRORS, ...messages });
        return;
      }

      if (selectedIndex === SignInType.LOGIN) {
        await login({ email, password });
        router.push('/');
        return;
      }

      await register({ email, password, name });
      router.push('/');
    } catch (error) {
      window.alert((error as any).response?.data.message);
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
          <div className=" rounded-md shadow-sm">
            <Input errorMessage={inputErrors.email} placeholder="e-mail giriniz" onChange={(event) => inputChangeHandler(event.target.value, 'email')} />
            <Input errorMessage={inputErrors.password} placeholder="şifre Giriniz" type="password" onChange={(event) => { inputChangeHandler(event.target.value, 'password'); }} />

            {selectedIndex === SignInType.REGISTER
              && (
              <>
                <Input errorMessage={inputErrors.againPassword} placeholder="Again PassWord" type="password" onChange={(event) => { againPassword.current = event.target.value; }} />
                <Input errorMessage={inputErrors.name} placeholder="Name" onChange={(event) => { inputChangeHandler(event.target.value, 'name'); }} />
                <Input errorMessage={inputErrors.surname} placeholder="Surname" onChange={(event) => { inputChangeHandler(event.target.value, 'surname'); }} />
                <Input errorMessage={inputErrors.phone} mask="+\90 999 999 99 99" placeholder="Phone Number" onChange={(event) => { inputChangeHandler(event.target.value, 'phone'); }} />
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
