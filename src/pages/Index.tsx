import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/Auth/LoginCard';

/**
 * LoginPage serves as the main entry point for the login interface.
 * It utilizes MainAppLayout to provide the overall page structure and centers the LoginCard component.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
