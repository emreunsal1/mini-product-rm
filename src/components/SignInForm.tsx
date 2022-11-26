import React from 'react';
import Button from './Button';
import CheckBox from './CheckBox';
import Input from './input';

export default function SignInForm() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <Input placeholder="e-mail giriniz" type="email" value="email" onChange={() => {}} />
            <Input placeholder="şifre Giriniz" value="password" type="password" onChange={() => { }} />
          </div>
          <div className="flex items-center justify-between">
            <CheckBox value={false} onChange={() => {}}>
              Remember Me
            </CheckBox>
          </div>

          <div>
            <Button>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
