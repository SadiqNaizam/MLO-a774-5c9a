import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LoginForm from './LoginForm';
import { cn } from '@/lib/utils';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-[400px] bg-card text-card-foreground rounded-lg shadow-md", className)}>
      <CardHeader className="p-8 pb-6">
        <CardTitle className="text-2xl font-bold text-center text-card-foreground">Welcome</CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
