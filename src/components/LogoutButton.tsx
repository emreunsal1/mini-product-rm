import React from 'react';
import { clearCookieAndRedirect } from '../utils';

export default function LogoutButton() {
  const logoutHandler = () => {
    clearCookieAndRedirect();
  };
  return (
    <div onClick={logoutHandler} className="fixed z-10 cursor-pointer right-3 top-3 flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-red-600">Logout</div>
  );
}
