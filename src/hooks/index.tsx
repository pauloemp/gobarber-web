import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const ContextProviders: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default ContextProviders;
