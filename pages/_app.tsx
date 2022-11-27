import React from 'react';
import type { AppProps } from 'next/app';
import '../src/styles/common.scss';
import { Provider } from 'react-redux';
import wrapper from '../src/store';
import { detectUserCloseTab } from '../src/utils/validation';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  detectUserCloseTab();
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
export default wrapper.withRedux(App);
