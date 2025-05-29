import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoginButtonProps {
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // More specific event type
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ isLoading = false, onClick, className }) => {
  return (
    <Button 
      type="submit" 
      variant="default" // 'default' variant uses primary color defined in tailwind.config.ts
      className={cn("w-full bg-primary text-primary-foreground hover:bg-primary/90", className)}
      disabled={isLoading}
      onClick={onClick} // Pass onClick only if form submission is handled here, otherwise rely on form's onSubmit
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      Login
    </Button>
  );
};

export default LoginButton;
