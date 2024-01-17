import React from 'react';
import Button from '@mui/material/Button';

type CalculatorButtonProps = {
  action: string,
  dispatch: Function,
  symbol?: string,
  variant?: 'text' | 'outlined' | 'contained',
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  size?: 'small' | 'medium' | 'large',
}

type ExclusiveCalculatorButtonProps = 
  | { text?: string; icon?: never }
  | { icon: React.ReactNode; text?: never }

type AllCalculatorsButtonProps = CalculatorButtonProps & ExclusiveCalculatorButtonProps

const CalculatorButton: React.FC<AllCalculatorsButtonProps> = ({
  dispatch, action, symbol, variant = 'text', color = 'primary', size = 'small', text=symbol, icon, ...rest
}) => {
  // prevent text/symbol from displaying if icon is used
  if(icon) text= '';
  return (
    <>
      <Button
        variant={variant}
        color={color}
        size={size}
        onClick={  () => dispatch({ type: `${action}`, value: `${symbol}` })  }>
        {text} {icon}
      </Button>
    </>
  );
};

export default CalculatorButton;
