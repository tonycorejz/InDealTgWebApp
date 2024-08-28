'use client';
import React from 'react';
import { WebAppProvider } from '../context';

interface IPropsProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IPropsProviders) => {
  return <WebAppProvider>{children}</WebAppProvider>;
};

export default Providers;
