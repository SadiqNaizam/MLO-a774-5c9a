import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionLinksProps {
  className?: string;
}

const ActionLinks: React.FC<ActionLinksProps> = ({ className }) => {
  return (
    <div className={cn("w-full flex flex-col gap-3 items-stretch", className)}>
      <Button 
        variant="link" 
        className="p-0 h-auto self-end text-sm font-normal text-muted-foreground hover:text-primary hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0"
        asChild // Use asChild to allow custom link behavior if needed, or remove for simple button
      >
        <a href="#forgot-password">Forgot Password</a>
      </Button>
      <div className="text-center mt-1"> {/* Added small margin-top for spacing if needed */} 
        <span className="text-sm text-muted-foreground">Don't have an account? </span>
        <Button 
          variant="link" 
          className="p-0 h-auto text-sm text-primary font-medium hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0"
          asChild
        >
          <a href="#signup">SignUp</a>
        </Button>
      </div>
    </div>
  );
};

export default ActionLinks;
