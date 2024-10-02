import React from 'react';
import { IButton } from '@/utils/interfaces';
import { Typography } from '@mui/material'
import { StyledMuiButton } from './styled';
import { BUTTON_COMPONENT } from '@/utils/constants';

const Button = ({ 
  bgColor, 
  disabledColor, 
  labelColor, 
  lableVariant, 
  label, 
  ...props 
}: IButton) => (
  <StyledMuiButton
    data-testid={BUTTON_COMPONENT}  
    bgColor={bgColor}
    disabledColor={disabledColor}
    sx={{backgroundColor: bgColor}}
  {...props}  
  >
    <Typography
        color={labelColor}
        variant={lableVariant}
    >
        {label}
    </Typography>
  </StyledMuiButton>
)

export default Button;
