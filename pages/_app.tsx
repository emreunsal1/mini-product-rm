import React from 'react';
import type { AppProps } from 'next/app';
import '../src/styles/common.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
